export type ChoiceType = "correct" | "partial" | "wrong";
export type Screen =
  | "welcome"
  | "phase-intro"
  | "game"
  | "phase-result"
  | "final"
  | "leaderboard";

export interface Choice {
  id: string;
  text: string;
  points: number;
  type: ChoiceType;
  feedback: string;
}
export interface Scenario {
  id: string;
  tag: string;
  question: string;
  choices: Choice[];
}
export interface Phase {
  id: number;
  number: number;
  title: string;
  description: string;
  tip: string;
  scenarios: Scenario[];
}
export interface PhaseBreakdownEntry {
  pts: number;
  type: ChoiceType;
}
export interface GameState {
  screen: Screen;
  playerName: string;
  phase: number;
  scenario: number;
  score: number;
  lives: number;
  answered: boolean;
  selectedChoice: Choice | null;
  phaseScores: number[];
  correct: number;
  partial: number;
  wrong: number;
  phaseBreakdown: PhaseBreakdownEntry[][];
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
