"use client";

import { useReducer, useCallback, useEffect, useState } from "react";
import type { GameState, Phase, Choice, Screen } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { saveScore } from "@/lib/supabase";

const initialState: GameState = {
  screen: "welcome",
  phase: 0,
  scenario: 0,
  score: 0,
  lives: 3,
  answered: false,
  selectedChoice: null,
  phaseScores: [0, 0, 0, 0, 0],
  correct: 0,
  partial: 0,
  wrong: 0,
  phaseBreakdown: [[], [], [], [], []],
};

type Action =
  | { type: "SET_SCREEN"; screen: Screen }
  | { type: "SELECT_CHOICE"; choice: Choice }
  | { type: "NEXT_SCENARIO" }
  | { type: "NEXT_PHASE" }
  | { type: "RESTART" };

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SET_SCREEN":
      if (action.screen === "game") {
        return {
          ...state,
          screen: "game",
          answered: false,
          selectedChoice: null,
        };
      }
      return { ...state, screen: action.screen };

    case "SELECT_CHOICE": {
      if (state.answered) return state;
      const { choice } = action;
      const newPhaseScores = [...state.phaseScores];
      newPhaseScores[state.phase] += choice.points;
      const newBreakdown = state.phaseBreakdown.map((d, i) =>
        i === state.phase
          ? [...d, { pts: choice.points, type: choice.type }]
          : d,
      );
      return {
        ...state,
        answered: true,
        selectedChoice: choice,
        score: state.score + choice.points,
        phaseScores: newPhaseScores,
        lives:
          choice.type === "wrong" ? Math.max(0, state.lives - 1) : state.lives,
        correct: choice.type === "correct" ? state.correct + 1 : state.correct,
        partial: choice.type === "partial" ? state.partial + 1 : state.partial,
        wrong: choice.type === "wrong" ? state.wrong + 1 : state.wrong,
        phaseBreakdown: newBreakdown,
      };
    }

    case "NEXT_SCENARIO": {
      const nextScenario = state.scenario + 1;
      if (nextScenario >= 3) return { ...state, screen: "phase-result" };
      return {
        ...state,
        scenario: nextScenario,
        answered: false,
        selectedChoice: null,
      };
    }

    case "NEXT_PHASE": {
      const nextPhase = state.phase + 1;
      if (nextPhase >= 5) return { ...state, screen: "final" };
      return {
        ...state,
        phase: nextPhase,
        scenario: 0,
        answered: false,
        selectedChoice: null,
        screen: "phase-intro",
      };
    }

    case "RESTART":
      return { ...initialState };

    default:
      return state;
  }
}

export function useGame() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Phases come from local data — no API call needed
  const phases = PHASES_DATA;
  const currentPhase = phases[state.phase] ?? null;
  const currentScenario = currentPhase?.scenarios[state.scenario] ?? null;
  const globalProgress = state.phase * 3 + state.scenario;

  const getClassification = useCallback((score: number) => {
    const pct = score / 1500;
    if (pct >= 0.93) return { title: "Mestre da Comunicação", trophy: "🏆" };
    if (pct >= 0.73) return { title: "Comunicador Assertivo", trophy: "🥇" };
    if (pct >= 0.47)
      return { title: "Comunicador em Crescimento", trophy: "🥈" };
    return { title: "Aprendiz em Comunicação", trophy: "🌱" };
  }, []);

  const finalClassification = getClassification(state.score);

  const startGame = useCallback(() => {
    if (state.screen === "welcome") {
      dispatch({ type: "RESTART" });
      dispatch({ type: "SET_SCREEN", screen: "phase-intro" });
    } else {
      dispatch({ type: "SET_SCREEN", screen: "game" });
    }
  }, [state.screen]);
  const selectChoice = useCallback(
    (choice: Choice) => dispatch({ type: "SELECT_CHOICE", choice }),
    [],
  );
  const nextScenario = useCallback(
    () => dispatch({ type: "NEXT_SCENARIO" }),
    [],
  );
  const nextPhase = useCallback(() => dispatch({ type: "NEXT_PHASE" }), []);
  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);

  // Save score directly to Supabase — same as Roesel
  const submitScore = useCallback(
    async (playerName?: string) => {
      return await saveScore({
        player_name: playerName,
        total_score: state.score,
        phase_scores: state.phaseScores,
        correct_count: state.correct,
        partial_count: state.partial,
        wrong_count: state.wrong,
      });
    },
    [state],
  );

  return {
    state,
    phases,
    currentPhase,
    currentScenario,
    globalProgress,
    finalClassification,
    startGame,
    selectChoice,
    nextScenario,
    nextPhase,
    restart,
    submitScore,
  };
}
