"use client";
import type { Topic, SubPhase, GameState } from "@/types/game";

interface Props {
  topic: Topic;
  sub: SubPhase;
  state: GameState;
  subIdx: number;
  onNext: () => void;
}

export function PhaseResult({ topic, sub, state, subIdx, onNext }: Props) {
  const breakdown = state.breakdown[state.topicIdx]?.[subIdx] ?? [];
  const pts = breakdown.reduce((a, b) => a + b.pts, 0);
  const correct = breakdown.filter((b) => b.pts >= 100).length;
  const partial = breakdown.filter((b) => b.pts > 0 && b.pts < 100).length;
  const wrong = breakdown.filter((b) => b.pts === 0).length;
  const totalQ = 3;
  const maxPts = totalQ * 100;
  const pct = maxPts > 0 ? pts / maxPts : 0;
  const stars =
    pct >= 1 ? "⭐⭐⭐" : pct >= 0.5 ? "⭐⭐" : pts > 0 ? "⭐" : "—";
  const isLastSub = subIdx === 2;
  const isLastTopic = state.topicIdx === 7;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-2 text-3xl">{stars}</div>
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/35">
        {topic.icon} {topic.title}
      </p>
      <h2 className="mb-1 text-xl font-black">{sub.title}</h2>
      <p className="mb-1 text-xs text-white/35">
        Módulo {subIdx + 1} concluído!
      </p>
      <div className="mb-1 text-5xl font-black text-amber-400">{pts}</div>
      <p className="mb-6 text-sm text-white/40">
        / {maxPts} pts neste módulo · Total:{" "}
        <span className="text-white font-bold">{state.score}</span> pts
      </p>

      <div className="mb-6 w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: correct, l: "✅", s: "Certas" },
            { n: partial, l: "⚠️", s: "Parciais" },
            { n: wrong, l: "❌", s: "Erradas" },
          ].map(({ n, l, s }) => (
            <div key={s} className="rounded-xl bg-white/5 py-2.5 text-center">
              <p className="text-base">{l}</p>
              <p className="text-xl font-black text-amber-400">{n}</p>
              <p className="text-[10px] text-white/35 font-bold uppercase">
                {s}
              </p>
            </div>
          ))}
        </div>
        {state.maxStreak >= 3 && (
          <p className="mt-3 text-xs text-orange-400 font-bold text-center">
            🔥 Melhor streak: {state.maxStreak} acertos seguidos
          </p>
        )}
      </div>

      {/* Indicador de módulos */}
      <div className="mb-6 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 w-16 rounded-full transition-all ${i <= subIdx ? "bg-amber-500" : "bg-white/10"}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="rounded-full bg-emerald-700 px-12 py-3.5 text-base font-black text-white shadow-[0_6px_24px_rgba(27,94,59,0.5)] transition-all hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
      >
        {isLastSub && isLastTopic
          ? "Ver Resultado Final →"
          : isLastSub
            ? "Próximo Tópico →"
            : `Módulo ${subIdx + 2} →`}
      </button>
    </div>
  );
}
