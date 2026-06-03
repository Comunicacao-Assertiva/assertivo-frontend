"use client";
import type { GameState } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";

interface Props {
  state: GameState;
  maxScore: number;
  onRestart: () => void;
}

export function GameOver({ state, maxScore, onRestart }: Props) {
  const topic = PHASES_DATA[state.topicIdx];
  const sub = topic?.subPhases[state.subIdx];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <div className="mb-4 text-7xl animate-bounce">💔</div>
      <h2 className="text-3xl font-black mb-2">Game Over</h2>
      <p className="text-white/50 mb-1 text-sm">Você ficou sem vidas</p>
      <p className="text-white/50 mb-6 text-sm">
        {topic?.icon} {topic?.title} · Módulo {state.subIdx + 1}
        {sub && ` — ${sub.title}`}
      </p>

      <div className="mb-8 w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-4xl font-black text-amber-400 mb-1">{state.score}</p>
        <p className="text-sm text-white/40 mb-5">pontos acumulados</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: state.correct, l: "✅", sub: "Certas" },
            { n: state.partial, l: "⚠️", sub: "Parciais" },
            { n: state.wrong, l: "❌", sub: "Erradas" },
          ].map(({ n, l, sub }) => (
            <div key={sub} className="rounded-xl bg-white/5 py-2.5 text-center">
              <p className="text-base">{l}</p>
              <p className="text-lg font-black text-amber-400">{n}</p>
              <p className="text-[10px] text-white/35 font-bold uppercase">
                {sub}
              </p>
            </div>
          ))}
        </div>
        {state.maxStreak > 0 && (
          <p className="mt-4 text-sm text-orange-400 font-bold">
            🔥 Melhor streak: {state.maxStreak} acertos seguidos
          </p>
        )}
      </div>

      <button
        onClick={onRestart}
        className="w-full max-w-xs rounded-full bg-gradient-to-r from-amber-500 to-amber-400 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95"
      >
        🔄 Tentar Novamente
      </button>
    </div>
  );
}
