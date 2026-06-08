import type { ScoreSubmit, ScoreResponse } from "@/types/game";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

function getClassification(score: number, maxScore: number): string {
  const pct = score / maxScore;
  if (pct >= 0.9) return "Mestre da Comunicação";
  if (pct >= 0.7) return "Comunicador Assertivo";
  if (pct >= 0.45) return "Comunicador em Crescimento";
  return "Aprendiz em Comunicação";
}

export async function saveScore(
  data: ScoreSubmit,
  maxScore: number,
): Promise<ScoreResponse | null> {
  if (!URL || !KEY) return null;
  try {
    const res = await fetch(`${URL}/rest/v1/scores`, {
      method: "POST",
      headers: {
        apikey: KEY,
        Authorization: `Bearer ${KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
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
    const json = await res.json();
    return Array.isArray(json) ? json[0] : json;
  } catch {
    return null;
  }
}

export async function getLeaderboard(limit = 10): Promise<ScoreResponse[]> {
  if (!URL || !KEY) return [];
  try {
    const res = await fetch(
      `${URL}/rest/v1/scores?order=total_score.desc&limit=${limit}`,
      { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } },
    );
    return res.json();
  } catch {
    return [];
  }
}
