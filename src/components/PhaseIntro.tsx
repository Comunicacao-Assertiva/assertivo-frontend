"use client";
import type { Topic, SubPhase } from "@/types/game";

interface Props {
  topic: Topic;
  sub: SubPhase;
  isNewTopic: boolean; // true quando subIdx===0
  onStart: () => void;
}

export function PhaseIntro({ topic, sub, isNewTopic, onStart }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      {isNewTopic ? (
        <>
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-amber-500/40 bg-amber-500/10 text-5xl">
            {topic.icon}
          </div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[3px] text-white/35">
            Tópico {topic.number} de 8
          </p>
          <h2 className="mb-2 text-3xl font-black">{topic.title}</h2>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/55">
            {topic.description}
          </p>
          <div className="mb-6 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/40"
              >
                Sub {i + 1}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mb-3 flex items-center gap-2 text-white/40 text-sm">
            <span>{topic.icon}</span>
            <span>{topic.title}</span>
          </div>
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-500/40 bg-amber-500/10 text-2xl font-black text-amber-400">
            {topic.subPhases.indexOf(sub) + 1}
          </div>
        </>
      )}

      <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 max-w-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
          {isNewTopic
            ? "Módulo 1"
            : `Módulo ${topic.subPhases.indexOf(sub) + 1}`}
        </p>
        <h3 className="text-lg font-black mb-2">{sub.title}</h3>
        <p className="text-sm text-white/55 leading-relaxed">
          {sub.description}
        </p>
      </div>

      <button
        onClick={onStart}
        className="rounded-full bg-emerald-700 px-12 py-3.5 text-base font-black text-white shadow-[0_6px_24px_rgba(27,94,59,0.5)] transition-all hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
      >
        Começar módulo →
      </button>
    </div>
  );
}
