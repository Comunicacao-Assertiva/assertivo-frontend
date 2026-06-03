"use client";
import { useReducer, useCallback, useEffect, useState } from "react";
import type { GameState, Choice, Screen, ChoiceItem } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { saveScore } from "@/lib/supabase";

const N = PHASES_DATA.length;
const SAVE_KEY = "assertivo_progresso";

const makeInitial = (): GameState => ({
  screen: "welcome",
  playerName: "",
  topicIdx: 0,
  subIdx: 0,
  itemIdx: 0,
  score: 0,
  lives: 3,
  streak: 0,
  maxStreak: 0,
  answered: false,
  selectedChoice: null,
  topicScores: Array(N).fill(0),
  correct: 0,
  partial: 0,
  wrong: 0,
  breakdown: Array.from({ length: N }, () =>
    Array.from({ length: 3 }, () => []),
  ),
});

// ── Tipos do save ──────────────────────────────────────
interface SavedData {
  playerName: string;
  topicIdx: number;
  subIdx: number;
  itemIdx: number;
  score: number;
  lives: number;
  streak: number;
  maxStreak: number;
  topicScores: number[];
  correct: number;
  partial: number;
  wrong: number;
  breakdown: { pts: number }[][][];
  savedAt: string; // timestamp
}

function loadSaved(): SavedData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as SavedData;
    // Valida que o save tem os campos necessários
    if (!data.playerName || data.topicIdx === undefined) return null;
    return data;
  } catch {
    return null;
  }
}

function writeSave(s: GameState) {
  if (typeof window === "undefined") return;
  if (!s.playerName) return; // não salva sem nome
  try {
    const data: SavedData = {
      playerName: s.playerName,
      topicIdx: s.topicIdx,
      subIdx: s.subIdx,
      itemIdx: s.itemIdx,
      score: s.score,
      lives: s.lives,
      streak: s.streak,
      maxStreak: s.maxStreak,
      topicScores: s.topicScores,
      correct: s.correct,
      partial: s.partial,
      wrong: s.wrong,
      breakdown: s.breakdown,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // localStorage cheio ou bloqueado — ignora silenciosamente
  }
}

function clearSave() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {}
}

// ── Reducer ────────────────────────────────────────────
type Action =
  | { type: "SET_SCREEN"; screen: Screen }
  | { type: "SET_NAME"; name: string }
  | { type: "SELECT_CHOICE"; choice: Choice }
  | { type: "NEXT_ITEM" }
  | { type: "NEXT_SUB" }
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
        screen: "game",
        answered: false,
        selectedChoice: null,
      };

    case "SELECT_CHOICE": {
      if (state.answered) return state;
      const { choice } = action;
      const isCorrect = choice.type === "correct";
      const isWrong = choice.type === "wrong";
      const pts = isCorrect ? (state.streak >= 2 ? 150 : 100) : choice.points;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      const newLives = isWrong ? Math.max(0, state.lives - 1) : state.lives;
      const newTopicScores = [...state.topicScores];
      newTopicScores[state.topicIdx] += pts;
      return {
        ...state,
        answered: true,
        selectedChoice: choice,
        score: state.score + pts,
        lives: newLives,
        streak: newStreak,
        maxStreak: Math.max(state.maxStreak, newStreak),
        topicScores: newTopicScores,
        correct: isCorrect ? state.correct + 1 : state.correct,
        partial: choice.type === "partial" ? state.partial + 1 : state.partial,
        wrong: isWrong ? state.wrong + 1 : state.wrong,
        breakdown: state.breakdown.map((t, ti) =>
          t.map((s, si) =>
            ti === state.topicIdx && si === state.subIdx ? [...s, { pts }] : s,
          ),
        ),
      };
    }

    case "NEXT_ITEM": {
      if (state.lives <= 0) return { ...state, screen: "game-over" };
      if (state.itemIdx >= 3)
        return {
          ...state,
          screen: "sub-result",
          answered: false,
          selectedChoice: null,
        };
      return {
        ...state,
        itemIdx: state.itemIdx + 1,
        answered: false,
        selectedChoice: null,
      };
    }

    case "NEXT_SUB": {
      const nextSub = state.subIdx + 1;
      if (nextSub < 3)
        return {
          ...state,
          subIdx: nextSub,
          itemIdx: 0,
          answered: false,
          selectedChoice: null,
          screen: "phase-intro",
        };
      const nextTopic = state.topicIdx + 1;
      if (nextTopic < N)
        return {
          ...state,
          topicIdx: nextTopic,
          subIdx: 0,
          itemIdx: 0,
          answered: false,
          selectedChoice: null,
          screen: "phase-intro",
        };
      return { ...state, screen: "final" };
    }

    case "RESTART":
      return makeInitial();
    default:
      return state;
  }
}

// ── Gera questões via API ─────────────────────────────
async function generateQuestions(
  topicIdx: number,
  subIdx: number,
): Promise<ChoiceItem[]> {
  const topic = PHASES_DATA[topicIdx];
  const sub = topic.subPhases[subIdx];
  const res = await fetch("/api/generate-questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      topicTitle: topic.title,
      subTitle: sub.title,
      topicNumber: topicIdx + 1,
      subNumber: subIdx + 1,
    }),
  });
  const data = await res.json();
  if (data.error || !data.questions) throw new Error(data.error);
  return data.questions;
}

// ── Hook principal ────────────────────────────────────
export function useGame() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitial);
  const [savedGame, setSavedGame] = useState<SavedData | null>(null);
  const [genQuestions, setGenQuestions] = useState<
    Record<string, ChoiceItem[]>
  >({});
  const [loadingQ, setLoadingQ] = useState(false);

  // Carrega save ao abrir o app
  useEffect(() => {
    setSavedGame(loadSaved());
  }, []);

  // Salva automaticamente sempre que o estado relevante muda
  useEffect(() => {
    if (state.screen === "welcome") return;
    if (state.screen === "final" || state.screen === "game-over") {
      clearSave();
      setSavedGame(null);
      return;
    }
    writeSave(state);
  }, [
    state.screen,
    state.topicIdx,
    state.subIdx,
    state.itemIdx,
    state.score,
    state.lives,
    state.streak,
    state.correct,
    state.partial,
    state.wrong,
  ]);

  // Gera questões ao entrar em nova subfase
  useEffect(() => {
    if (state.screen !== "phase-intro" && state.screen !== "game") return;
    const key = `${state.topicIdx}-${state.subIdx}`;
    if (genQuestions[key]) return;

    setLoadingQ(true);
    generateQuestions(state.topicIdx, state.subIdx)
      .then((questions) => {
        setGenQuestions((prev) => ({ ...prev, [key]: questions }));
        setLoadingQ(false);
      })
      .catch(() => setLoadingQ(false));
  }, [state.topicIdx, state.subIdx, state.screen]);

  const currentTopic = PHASES_DATA[state.topicIdx] ?? null;
  const currentSub = currentTopic?.subPhases[state.subIdx] ?? null;
  const key = `${state.topicIdx}-${state.subIdx}`;
  const tip = currentSub?.items[0];
  const questions = genQuestions[key] ?? [];
  const allItems = tip ? [tip, ...questions] : questions;
  const currentItem = allItems[state.itemIdx] ?? null;
  const totalItems = N * 3 * 4;
  const globalProgress = state.topicIdx * 12 + state.subIdx * 4 + state.itemIdx;
  const maxScore = N * 3 * 3 * 100;

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
    setGenQuestions({});
    dispatch({ type: "RESTART" });
    dispatch({ type: "SET_NAME", name });
    dispatch({ type: "SET_SCREEN", screen: "phase-intro" });
  }, []);

  const continueGame = useCallback(() => {
    const saved = loadSaved();
    if (!saved) return;
    setGenQuestions({}); // questões serão regeneradas
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
  const nextItem = useCallback(() => dispatch({ type: "NEXT_ITEM" }), []);
  const nextSub = useCallback(() => dispatch({ type: "NEXT_SUB" }), []);
  const restart = useCallback(() => {
    clearSave();
    setSavedGame(null);
    setGenQuestions({});
    dispatch({ type: "RESTART" });
  }, []);

  const submitScore = useCallback(async () => {
    return await saveScore(
      {
        player_name: state.playerName,
        total_score: state.score,
        phase_scores: state.topicScores,
        correct_count: state.correct,
        partial_count: state.partial,
        wrong_count: state.wrong,
      },
      maxScore,
    );
  }, [state, maxScore]);

  return {
    state,
    currentTopic,
    currentSub,
    currentItem,
    allItems,
    loadingQ,
    savedGame,
    globalProgress,
    totalItems,
    maxScore,
    finalClassification: getClass(state.score),
    startGame,
    continueGame,
    goToGame,
    selectChoice,
    nextItem,
    nextSub,
    restart,
    submitScore,
  };
}
