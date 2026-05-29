"use client";

import { useEffect, useState } from "react";
import { getLeaderboard } from "@/lib/supabase";
import type { ScoreResponse } from "@/types/game";

export function Leaderboard() {
  const [scores, setScores] = useState<ScoreResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getLeaderboard(10);
      setScores(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center text-white/40">
        Carregando ranking...
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="bg-white/5 px-5 py-3 text-left">
        <h3 className="text-xs font-black uppercase tracking-widest text-amber-400">
          🏆 Top 10 Placar
        </h3>
      </div>
      <div className="divide-y divide-white/5">
        {scores.length === 0 ? (
          <div className="py-10 text-center text-xs text-white/30">
            Nenhuma pontuação ainda.
          </div>
        ) : (
          scores.map((s, i) => (
            <div
              key={s.id || i}
              className="flex items-center justify-between px-5 py-3 text-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-4 text-center font-black ${i === 0 ? "text-amber-400" : i === 1 ? "text-slate-300" : i === 2 ? "text-amber-700" : "text-white/20"}`}
                >
                  {i + 1}
                </span>
                <div className="text-left">
                  <p className="font-bold text-white/90 truncate max-w-[120px]">
                    {s.player_name}
                  </p>
                  <p className="text-[10px] text-white/40">
                    {s.classification}
                  </p>
                </div>
              </div>
              <span className="font-black text-amber-400">
                {s.total_score} pts
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
