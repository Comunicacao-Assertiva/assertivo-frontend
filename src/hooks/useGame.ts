"use client";
import { useReducer, useCallback } from "react";
import type { GameState, Screen } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { saveScore, getClassification } from "@/lib/supabase";

const N = PHASES_DATA.length;

const makeInitial = (): GameState => ({
  screen: "welcome",
  playerName: "",
  phase: 0,
  scenario: 0,
  score: 0,
  answered: false,
  scenarioScore: null,
  phaseScores: Array(N).fill(0),
  correct: 0,
  partial: 0,
  wrong: 0,
  phaseBreakdown: Array.from({ length: N }, () => []),
});

type Action =
  | { type: "SET_SCREEN"; screen: Screen }
  | { type: "SET_NAME"; name: string }
  | { type: "SCORE_SCENARIO"; pts: number }
  | { type: "NEXT_SCENARIO" }
  | { type: "NEXT_PHASE" }
  | { type: "RESTART" };

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SET_SCREEN":
      return { ...state, screen: action.screen };
    case "SET_NAME":
      return { ...state, playerName: action.name };

    case "SCORE_SCENARIO": {
      const pts = action.pts;
      const newPhaseScores = [...state.phaseScores];
      newPhaseScores[state.phase] += pts;
      const newBreakdown = state.phaseBreakdown.map((d, i) =>
        i === state.phase ? [...d, { pts }] : d,
      );
      return {
        ...state,
        answered: true,
        scenarioScore: pts,
        score: state.score + pts,
        phaseScores: newPhaseScores,
        correct: pts === 100 ? state.correct + 1 : state.correct,
        partial: pts > 0 && pts < 100 ? state.partial + 1 : state.partial,
        wrong: pts === 0 ? state.wrong + 1 : state.wrong,
        phaseBreakdown: newBreakdown,
      };
    }

    case "NEXT_SCENARIO": {
      const next = state.scenario + 1;
      if (next >= 3) return { ...state, screen: "phase-result" };
      return { ...state, scenario: next, answered: false, scenarioScore: null };
    }

    case "NEXT_PHASE": {
      const next = state.phase + 1;
      if (next >= N) return { ...state, screen: "final" };
      return {
        ...state,
        phase: next,
        scenario: 0,
        answered: false,
        scenarioScore: null,
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

  const getClass = useCallback(
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

  const startGame = useCallback((name: string) => {
    dispatch({ type: "RESTART" });
    dispatch({ type: "SET_NAME", name });
    dispatch({ type: "SET_SCREEN", screen: "phase-intro" });
  }, []);
  const goToGame = useCallback(
    () => dispatch({ type: "SET_SCREEN", screen: "game" }),
    [],
  );
  const scoreScenario = useCallback(
    (pts: number) => dispatch({ type: "SCORE_SCENARIO", pts }),
    [],
  );
  const nextScenario = useCallback(
    () => dispatch({ type: "NEXT_SCENARIO" }),
    [],
  );
  const nextPhase = useCallback(() => dispatch({ type: "NEXT_PHASE" }), []);
  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);

  const submitScore = useCallback(async () => {
    return await saveScore(
      {
        player_name: state.playerName,
        total_score: state.score,
        phase_scores: state.phaseScores,
        correct_count: state.correct,
        partial_count: state.partial,
        wrong_count: state.wrong,
      },
      maxScore,
    );
  }, [state, maxScore]);

  return {
    state,
    phases,
    currentPhase,
    currentScenario,
    globalProgress,
    maxScore,
    finalClassification: getClass(state.score),
    startGame,
    goToGame,
    scoreScenario,
    nextScenario,
    nextPhase,
    restart,
    submitScore,
  };
}
