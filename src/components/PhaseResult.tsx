"use client";
import type { Phase, GameState } from "@/types/game";

export function PhaseResult({
  phase,
  state,
  onNext,
  isLast,
}: {
  phase: Phase;
  state: GameState;
  onNext: () => void;
  isLast: boolean;
}) {
  const ps = state.phaseScores[state.phase];
  const breakdown = state.phaseBreakdown[state.phase];

  // Calcula por pontos — sem depender do campo 'type' removido
  const correct = breakdown.filter((b) => b.pts === 100).length;
  const partial = breakdown.filter((b) => b.pts > 0 && b.pts < 100).length;
  const wrong = breakdown.filter((b) => b.pts === 0).length;

  const stars =
    ps === 300 ? "⭐⭐⭐" : ps >= 150 ? "⭐⭐" : ps > 0 ? "⭐" : "—";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-3 text-4xl tracking-widest">{stars}</div>
      <h2 className="mb-1 text-2xl font-black">{phase.title}</h2>
      <p className="mb-1 text-sm text-white/40">
        Fase {phase.number} concluída!
      </p>
      <div className="mb-1 text-5xl font-black text-amber-400">{ps}</div>
      <p className="mb-1 text-sm text-white/40">pontos nesta fase</p>
      <p className="mb-6 text-sm text-white/50">
        Total acumulado:{" "}
        <span className="font-bold text-white">{state.score} pts</span>
      </p>

      <div className="mb-8 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5">
        {[
          { label: "✅ Assertivas (100 pts)", n: correct, pts: correct * 100 },
          {
            label: "⚠️ Parciais (25–75 pts)",
            n: partial,
            pts: ps - correct * 100 - 0,
          },
          { label: "❌ Inadequadas (0 pts)", n: wrong, pts: 0 },
        ].map((row) => (
          <div
            key={row.label}
            className="flex justify-between border-b border-white/10 py-2 text-sm text-white/60 last:border-0"
          >
            <span>
              {row.label} <span className="text-white/35">×{row.n}</span>
            </span>
            <span className="font-bold text-amber-400">{row.pts} pts</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 text-sm font-black">
          <span>Total desta fase</span>
          <span className="text-amber-400">{ps}/300 pts</span>
        </div>
      </div>

      <button
        onClick={onNext}
        className="rounded-full bg-emerald-700 px-12 py-3.5 text-base font-black text-white shadow-[0_6px_24px_rgba(27,94,59,0.5)] transition-all hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
      >
        {isLast ? "Ver Resultado Final →" : "Próxima Fase →"}
      </button>
    </div>
  );
}
