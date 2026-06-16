export type ChoiceType = "correct" | "partial" | "wrong";
export type GameContext = "geral" | "igreja";
export type Screen =
  | "welcome"
  | "phase-intro"
  | "game"
  | "sub-result"
  | "game-over"
  | "final"
  | "leaderboard";

export interface Choice {
  id: string;
  text: string;
  points: number;
  type: ChoiceType;
  feedback: string;
}
export interface TipItem {
  id: string;
  type: "tip";
  icon: string;
  title: string;
  content: string;
}
export interface ChoiceItem {
  id: string;
  type: "choice";
  tag: string;
  question: string;
  choices: Choice[];
}
export type SubItem = TipItem | ChoiceItem;

export interface SubPhase {
  id: string;
  title: string;
  description: string;
  items: SubItem[];
}
export interface Topic {
  id: number;
  number: number;
  title: string;
  icon: string;
  description: string;
  subPhases: SubPhase[];
}
export interface PhaseBreakdownEntry {
  pts: number;
}

export interface GameState {
  screen: Screen;
  playerName: string;
  context: GameContext;
  topicIdx: number;
  subIdx: number;
  itemIdx: number;
  score: number;
  lives: number;
  streak: number;
  maxStreak: number;
  answered: boolean;
  selectedChoice: Choice | null;
  topicScores: number[];
  correct: number;
  partial: number;
  wrong: number;
  breakdown: PhaseBreakdownEntry[][][];
  livesDepletedAt: number | null;
}

export interface ScoreSubmit {
  player_name?: string;
  total_score: number;
  phase_scores: number[];
  correct_count: number;
  partial_count: number;
  wrong_count: number;
}
export interface ScoreResponse {
  id: string;
  player_name: string;
  total_score: number;
  classification: string;
  created_at: string;
}
