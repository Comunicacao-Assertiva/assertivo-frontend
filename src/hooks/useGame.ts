"use client";
import { useReducer, useCallback } from "react";
import type { GameState, Choice, Screen } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { saveScore } from "@/lib/supabase";

const N = PHASES_DATA.length; // automático — funciona com qualquer número de fases

const makeInitial = (): GameState => ({
  screen: "welcome",
  phase: 0,
  scenario: 0,
  score: 0,
  lives: 3,
  answered: false,
  selectedChoice: null,
  phaseScores: Array(N).fill(0),
  correct: 0,
  partial: 0,
  wrong: 0,
  phaseBreakdown: Array.from({ length: N }, () => []),
});

type Action =
  | { type: "SET_SCREEN"; screen: Screen }
  | { type: "SELECT_CHOICE"; choice: Choice }
  | { type: "NEXT_SCENARIO" }
  | { type: "NEXT_PHASE" }
  | { type: "RESTART" };

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SET_SCREEN":
      return { ...state, screen: action.screen };
    case "SELECT_CHOICE": {
      if (state.answered) return state;
      const { choice } = action;
      const newPhaseScores = [...state.phaseScores];
      newPhaseScores[state.phase] += choice.points;
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
        phaseBreakdown: state.phaseBreakdown.map((d, i) =>
          i === state.phase
            ? [...d, { pts: choice.points, type: choice.type }]
            : d,
        ),
      };
    }
    case "NEXT_SCENARIO": {
      const next = state.scenario + 1;
      if (next >= 3) return { ...state, screen: "phase-result" };
      return {
        ...state,
        scenario: next,
        answered: false,
        selectedChoice: null,
      };
    }
    case "NEXT_PHASE": {
      const next = state.phase + 1;
      if (next >= N) return { ...state, screen: "final" };
      return {
        ...state,
        phase: next,
        scenario: 0,
        answered: false,
        selectedChoice: null,
        screen: "phase-intro",
      };
    }
    case "RESTART":
      return makeInitial();
    default:
      return state;
  }
}

export function useGame() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitial);
  const phases = PHASES_DATA;
  const currentPhase = phases[state.phase] ?? null;
  const currentScenario = currentPhase?.scenarios[state.scenario] ?? null;
  const globalProgress = state.phase * 3 + state.scenario;
  const maxScore = N * 300;

  const getClassification = useCallback(
    (score: number) => {
      const pct = score / maxScore;
      if (pct >= 0.93) return { title: "Mestre da Comunicação", trophy: "🏆" };
      if (pct >= 0.73) return { title: "Comunicador Assertivo", trophy: "🥇" };
      if (pct >= 0.47)
        return { title: "Comunicador em Crescimento", trophy: "🥈" };
      return { title: "Aprendiz em Comunicação", trophy: "🌱" };
    },
    [maxScore],
  );

  const startGame = useCallback(() => {
    dispatch({ type: "RESTART" });
    dispatch({ type: "SET_SCREEN", screen: "phase-intro" });
  }, []);
  const selectChoice = useCallback(
    (c: Choice) => dispatch({ type: "SELECT_CHOICE", choice: c }),
    [],
  );
  const nextScenario = useCallback(
    () => dispatch({ type: "NEXT_SCENARIO" }),
    [],
  );
  const nextPhase = useCallback(() => dispatch({ type: "NEXT_PHASE" }), []);
  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);

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
    maxScore,
    finalClassification: getClassification(state.score),
    startGame,
    selectChoice,
    nextScenario,
    nextPhase,
    restart,
    submitScore,
  };
}
