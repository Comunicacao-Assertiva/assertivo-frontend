"use client";

import type { Phase, GameState } from "@/types/game";

interface PhaseResultProps {
  phase: Phase;
  state: GameState;
  onNext: () => void;
  isLast: boolean;
}

export function PhaseResult({
  phase,
  state,
  onNext,
  isLast,
}: PhaseResultProps) {
  const phaseScore = state.phaseScores[state.phase];
  const breakdown = state.phaseBreakdown[state.phase];
  const correct = breakdown.filter((b) => b.type === "correct").length;
  const partial = breakdown.filter((b) => b.type === "partial").length;
  const wrong = breakdown.filter((b) => b.type === "wrong").length;
  const stars =
    phaseScore >= 2000
      ? "⭐⭐⭐"
      : phaseScore >= 1000
        ? "⭐⭐"
        : phaseScore > 0
          ? "⭐"
          : "—";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-3 text-4xl tracking-widest">{stars}</div>
      <h2 className="mb-1 text-2xl font-black">{phase.title}</h2>
      <p className="mb-1 text-sm text-white/40">
        Fase {phase.number} concluída!
      </p>

      <div className="mb-1 text-5xl font-black text-amber-400">
        {phaseScore}
      </div>
      <p className="mb-1 text-sm text-white/40">pontos nesta fase</p>
      <p className="mb-6 text-sm text-white/50">
        Total acumulado:{" "}
        <span className="font-bold text-white">{state.score} pts</span>
      </p>

      {/* Breakdown */}
      <div className="mb-8 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5">
        {[
          {
            label: "Respostas assertivas (667 pts)",
            count: correct,
            pts: correct * 667,
          },
          {
            label: "Respostas razoáveis (333 pts)",
            count: partial,
            pts: partial * 333,
          },
          { label: "Respostas inadequadas (0 pts)", count: wrong, pts: 0 },
        ].map((row) => (
          <div
            key={row.label}
            className="flex justify-between border-b border-white/10 py-2 text-sm text-white/60 last:border-0"
          >
            <span>{row.label}</span>
            <span className="font-bold text-amber-400">{row.pts} pts</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 text-sm font-black">
          <span>Total desta fase</span>
          <span className="text-amber-400">{phaseScore}/2000 pts</span>
        </div>
      </div>

      <button
        onClick={onNext}
        className="rounded-full bg-emerald-700 px-12 py-3.5 text-base font-black text-white shadow-[0_6px_24px_rgba(27,94,59,0.5)] transition-all hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
      >
        {isLast ? "Ver Resultado Final →" : `Próxima Fase →`}
      </button>
    </div>
  );
}
