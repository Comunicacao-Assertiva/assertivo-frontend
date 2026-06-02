import type { ScoreSubmit, ScoreResponse } from "@/types/game";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

export function getClassification(score: number, maxScore: number): string {
  const pct = score / maxScore;
  if (pct >= 0.93) return "Mestre da Comunicação";
  if (pct >= 0.73) return "Comunicador Assertivo";
  if (pct >= 0.47) return "Comunicador em Crescimento";
  return "Aprendiz em Comunicação";
}

export async function saveScore(
  data: ScoreSubmit,
  maxScore: number,
): Promise<ScoreResponse | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/scores`, {
      method: "POST",
      headers: { ...HEADERS, Prefer: "return=representation" },
      body: JSON.stringify({
        player_name: data.player_name ?? "Anônimo",
        total_score: data.total_score,
        classification: getClassification(data.total_score, maxScore),
        phase_scores: data.phase_scores,
        correct_count: data.correct_count,
        partial_count: data.partial_count,
        wrong_count: data.wrong_count,
      }),
    });
    const result = await res.json();
    return Array.isArray(result) ? result[0] : result;
  } catch {
    return null;
  }
}

export async function getLeaderboard(limit = 10): Promise<ScoreResponse[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/scores?order=total_score.desc&limit=${limit}`,
      { headers: HEADERS },
    );
    return res.json();
  } catch {
    return [];
  }
}
