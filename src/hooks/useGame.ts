"use client";
import { useReducer, useCallback, useEffect, useState } from "react";
import type { GameState, Choice, Screen } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { saveScore } from "@/lib/supabase";

const N = PHASES_DATA.length;
const PER_PHASE = 5;
const SAVE_KEY = "assertivo_save";

const makeInitial = (): GameState => ({
  screen: "welcome",
  playerName: "",
  phase: 0,
  scenario: 0,
  score: 0,
  lives: 3,
  streak: 0,
  maxStreak: 0,
  answered: false,
  selectedChoice: null,
  phaseScores: Array(N).fill(0),
  correct: 0,
  partial: 0,
  wrong: 0,
  phaseBreakdown: Array.from({ length: N }, () => []),
});

// ── O que salvar no localStorage ──
interface SavedData {
  playerName: string;
  phase: number;
  scenario: number;
  score: number;
  lives: number;
  streak: number;
  maxStreak: number;
  phaseScores: number[];
  correct: number;
  partial: number;
  wrong: number;
  phaseBreakdown: { pts: number }[][];
}

function loadSaved(): SavedData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? (JSON.parse(raw) as SavedData) : null;
  } catch {
    return null;
  }
}

function writeSave(state: GameState) {
  if (typeof window === "undefined") return;
  const data: SavedData = {
    playerName: state.playerName,
    phase: state.phase,
    scenario: state.scenario,
    score: state.score,
    lives: state.lives,
    streak: state.streak,
    maxStreak: state.maxStreak,
    phaseScores: state.phaseScores,
    correct: state.correct,
    partial: state.partial,
    wrong: state.wrong,
    phaseBreakdown: state.phaseBreakdown,
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

function clearSave() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SAVE_KEY);
}

// ── Reducer ──
type Action =
  | { type: "SET_SCREEN"; screen: Screen }
  | { type: "SET_NAME"; name: string }
  | { type: "SELECT_CHOICE"; choice: Choice }
  | { type: "NEXT_SCENARIO" }
  | { type: "NEXT_PHASE" }
  | { type: "LOAD_SAVE"; data: SavedData }
  | { type: "RESTART" };

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SET_SCREEN":
      return { ...state, screen: action.screen };
    case "SET_NAME":
      return { ...state, playerName: action.name };

    case "LOAD_SAVE":
      return {
        ...makeInitial(),
        ...action.data,
        screen: "game", // sempre começa no jogo
        answered: false,
        selectedChoice: null,
      };

    case "SELECT_CHOICE": {
      if (state.answered) return state;
      const { choice } = action;
      const isCorrect = choice.type === "correct";
      const isWrong = choice.type === "wrong";
      const onStreak = state.streak >= 2;
      const pts = isCorrect ? (onStreak ? 150 : 100) : choice.points;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      const newLives = isWrong ? Math.max(0, state.lives - 1) : state.lives;
      const newPhaseScores = [...state.phaseScores];
      newPhaseScores[state.phase] += pts;
      return {
        ...state,
        answered: true,
        selectedChoice: choice,
        score: state.score + pts,
        lives: newLives,
        streak: newStreak,
        maxStreak: Math.max(state.maxStreak, newStreak),
        phaseScores: newPhaseScores,
        correct: isCorrect ? state.correct + 1 : state.correct,
        partial: choice.type === "partial" ? state.partial + 1 : state.partial,
        wrong: isWrong ? state.wrong + 1 : state.wrong,
        phaseBreakdown: state.phaseBreakdown.map((d, i) =>
          i === state.phase ? [...d, { pts }] : d,
        ),
      };
    }

    case "NEXT_SCENARIO": {
      if (state.lives <= 0) return { ...state, screen: "game-over" };
      const next = state.scenario + 1;
      if (next >= PER_PHASE) return { ...state, screen: "phase-result" };
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

// ── Hook ──
export function useGame() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitial);
  const [savedGame, setSavedGame] = useState<SavedData | null>(null);

  // Carrega save ao montar
  useEffect(() => {
    setSavedGame(loadSaved());
  }, []);

  // Auto-salva sempre que o estado muda (exceto welcome/final/game-over)
  useEffect(() => {
    if (state.screen === "welcome") return;
    if (state.screen === "final" || state.screen === "game-over") {
      clearSave();
      setSavedGame(null);
      return;
    }
    if (state.playerName) writeSave(state);
  }, [state]);

  const phases = PHASES_DATA;
  const currentPhase = phases[state.phase] ?? null;
  const currentScenario = currentPhase?.scenarios[state.scenario] ?? null;
  const globalProgress = state.phase * PER_PHASE + state.scenario;
  const maxScore = N * PER_PHASE * 100;

  const getClass = useCallback(
    (score: number) => {
      const pct = score / maxScore;
      if (pct >= 0.9) return { title: "Mestre da Comunicação", trophy: "🏆" };
      if (pct >= 0.7) return { title: "Comunicador Assertivo", trophy: "🥇" };
      if (pct >= 0.45)
        return { title: "Comunicador em Crescimento", trophy: "🥈" };
      return { title: "Aprendiz em Comunicação", trophy: "🌱" };
    },
    [maxScore],
  );

  const startGame = useCallback((name: string) => {
    clearSave();
    setSavedGame(null);
    dispatch({ type: "RESTART" });
    dispatch({ type: "SET_NAME", name });
    dispatch({ type: "SET_SCREEN", screen: "phase-intro" });
  }, []);

  const continueGame = useCallback(() => {
    const saved = loadSaved();
    if (!saved) return;
    dispatch({ type: "LOAD_SAVE", data: saved });
  }, []);

  const goToGame = useCallback(
    () => dispatch({ type: "SET_SCREEN", screen: "game" }),
    [],
  );
  const selectChoice = useCallback(
    (c: Choice) => dispatch({ type: "SELECT_CHOICE", choice: c }),
    [],
  );
  const nextScenario = useCallback(
    () => dispatch({ type: "NEXT_SCENARIO" }),
    [],
  );
  const nextPhase = useCallback(() => dispatch({ type: "NEXT_PHASE" }), []);
  const restart = useCallback(() => {
    clearSave();
    setSavedGame(null);
    dispatch({ type: "RESTART" });
  }, []);

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
    perPhase: PER_PHASE,
    savedGame,
    finalClassification: getClass(state.score),
    startGame,
    continueGame,
    goToGame,
    selectChoice,
    nextScenario,
    nextPhase,
    restart,
    submitScore,
  };
}
