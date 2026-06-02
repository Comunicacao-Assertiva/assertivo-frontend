export type Screen =
  | "welcome"
  | "phase-intro"
  | "game"
  | "phase-result"
  | "final"
  | "leaderboard";
export type ChoiceType = "correct" | "partial" | "wrong";

// ── CHOICE ──────────────────────────────
export interface Choice {
  id: string;
  text: string;
  points: number;
  type: ChoiceType;
  feedback: string;
}
export interface ChoiceScenario {
  id: string;
  type: "choice";
  tag: string;
  question: string;
  choices: Choice[];
}

// ── SPOT ────────────────────────────────
// Mostrar uma thread de conversa — identificar a mensagem problemática
export interface SpotMessage {
  id: string;
  author: string;
  text: string;
  isTarget: boolean;
  explanation: string;
}
export interface SpotScenario {
  id: string;
  type: "spot";
  tag: string;
  question: string;
  context: string;
  messages: SpotMessage[];
}

// ── SORT ────────────────────────────────
// Ordenar 4 respostas da pior para a melhor
export interface SortItem {
  id: string;
  text: string;
  rank: number;
  explanation: string;
}
export interface SortScenario {
  id: string;
  type: "sort";
  tag: string;
  situation: string;
  question: string;
  items: SortItem[];
}

export type Scenario = ChoiceScenario | SpotScenario | SortScenario;

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
}
export interface GameState {
  screen: Screen;
  playerName: string;
  phase: number;
  scenario: number;
  score: number;
  answered: boolean;
  scenarioScore: number | null;
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
