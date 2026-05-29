import type { ScoreSubmit, ScoreResponse } from '@/types/game'

// Same pattern as Roesel Transportes
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!

function getClassification(score: number): string {
  const pct = score / 1500
  if (pct >= 0.93) return 'Mestre da Comunicação'
  if (pct >= 0.73) return 'Comunicador Assertivo'
  if (pct >= 0.47) return 'Comunicador em Crescimento'
  return 'Aprendiz em Comunicação'
}

export async function saveScore(data: ScoreSubmit): Promise<ScoreResponse | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/scores`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        player_name:    data.player_name ?? 'Anônimo',
        total_score:    data.total_score,
        classification: getClassification(data.total_score),
        phase_scores:   data.phase_scores,
        correct_count:  data.correct_count,
        partial_count:  data.partial_count,
        wrong_count:    data.wrong_count,
      }),
    })
    const result = await res.json()
    return Array.isArray(result) ? result[0] : result
  } catch {
    return null
  }
}

export async function getLeaderboard(limit = 10): Promise<ScoreResponse[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/scores?order=total_score.desc&limit=${limit}`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    )
    return res.json()
  } catch {
    return []
  }
}
