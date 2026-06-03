"use client";
import { useReducer, useCallback, useEffect, useState } from "react";
import type { GameState, Choice, Screen } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { saveScore } from "@/lib/supabase";

const TOPICS = PHASES_DATA;
const N_TOPICS = TOPICS.length;
const N_SUBS = 3;
const SAVE_KEY = "assertivo_save_v2";

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
  topicScores: Array(N_TOPICS).fill(0),
  correct: 0,
  partial: 0,
  wrong: 0,
  breakdown: Array.from({ length: N_TOPICS }, () =>
    Array.from({ length: N_SUBS }, () => []),
  ),
});

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
}

function loadSaved(): SavedData | null {
  if (typeof window === "undefined") return null;
  try {
    const r = localStorage.getItem(SAVE_KEY);
    return r ? JSON.parse(r) : null;
  } catch {
    return null;
  }
}
function writeSave(s: GameState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify({
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
    }),
  );
}
function clearSave() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SAVE_KEY);
}

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
      const onStreak = state.streak >= 2;
      const pts = isCorrect ? (onStreak ? 150 : 100) : choice.points;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      const newLives = isWrong ? Math.max(0, state.lives - 1) : state.lives;
      const newTopicScores = [...state.topicScores];
      newTopicScores[state.topicIdx] += pts;
      const newBreakdown = state.breakdown.map((topic, ti) =>
        topic.map((sub, si) =>
          ti === state.topicIdx && si === state.subIdx
            ? [...sub, { pts }]
            : sub,
        ),
      );
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
        breakdown: newBreakdown,
      };
    }

    case "NEXT_ITEM": {
      if (state.lives <= 0) return { ...state, screen: "game-over" };
      const currentSub = TOPICS[state.topicIdx].subPhases[state.subIdx];
      const totalItems = currentSub.items.length;
      const nextItemIdx = state.itemIdx + 1;
      if (nextItemIdx >= totalItems)
        return {
          ...state,
          screen: "sub-result",
          answered: false,
          selectedChoice: null,
        };
      return {
        ...state,
        itemIdx: nextItemIdx,
        answered: false,
        selectedChoice: null,
      };
    }

    case "NEXT_SUB": {
      const nextSubIdx = state.subIdx + 1;
      if (nextSubIdx < N_SUBS) {
        return {
          ...state,
          subIdx: nextSubIdx,
          itemIdx: 0,
          answered: false,
          selectedChoice: null,
          screen: "phase-intro",
        };
      }
      const nextTopicIdx = state.topicIdx + 1;
      if (nextTopicIdx < N_TOPICS) {
        return {
          ...state,
          topicIdx: nextTopicIdx,
          subIdx: 0,
          itemIdx: 0,
          answered: false,
          selectedChoice: null,
          screen: "phase-intro",
        };
      }
      return { ...state, screen: "final" };
    }

    case "RESTART":
      return makeInitial();
    default:
      return state;
  }
}

export function useGame() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitial);
  const [savedGame, setSavedGame] = useState<SavedData | null>(null);

  useEffect(() => {
    setSavedGame(loadSaved());
  }, []);

  useEffect(() => {
    if (state.screen === "welcome") return;
    if (state.screen === "final" || state.screen === "game-over") {
      clearSave();
      setSavedGame(null);
      return;
    }
    if (state.playerName) writeSave(state);
  }, [state]);

  const currentTopic = TOPICS[state.topicIdx] ?? null;
  const currentSub = currentTopic?.subPhases[state.subIdx] ?? null;
  const currentItem = currentSub?.items[state.itemIdx] ?? null;
  const maxScore = TOPICS.reduce(
    (acc, t) =>
      acc +
      t.subPhases.reduce(
        (a, s) => a + s.items.filter((i) => i.type === "choice").length * 100,
        0,
      ),
    0,
  );
  const globalProgress =
    TOPICS.slice(0, state.topicIdx).reduce(
      (acc, t) => acc + t.subPhases.reduce((a, s) => a + s.items.length, 0),
      0,
    ) +
    (currentTopic?.subPhases
      .slice(0, state.subIdx)
      .reduce((a, s) => a + s.items.length, 0) ?? 0) +
    state.itemIdx;
  const totalItems = TOPICS.reduce(
    (acc, t) => acc + t.subPhases.reduce((a, s) => a + s.items.length, 0),
    0,
  );

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
  const nextItem = useCallback(() => dispatch({ type: "NEXT_ITEM" }), []);
  const nextSub = useCallback(() => dispatch({ type: "NEXT_SUB" }), []);
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
    globalProgress,
    totalItems,
    maxScore,
    savedGame,
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
