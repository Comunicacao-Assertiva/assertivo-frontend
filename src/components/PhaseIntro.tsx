'use client'

import type { Phase } from '@/types/game'

interface PhaseIntroProps {
  phase: Phase
  onStart: () => void
}

export function PhaseIntro({ phase, onStart }: PhaseIntroProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      {/* Number circle */}
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-amber-500 bg-amber-500/10 text-3xl font-black text-amber-400">
        {phase.number}
      </div>

      <p className="mb-1 text-xs font-bold uppercase tracking-[3px] text-white/40">Fase</p>
      <h2 className="mb-3 text-2xl font-black leading-snug">{phase.title}</h2>
      <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/55">{phase.description}</p>

      {/* Tip */}
      <div
        className="mb-8 max-w-sm rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-relaxed text-white/70"
        dangerouslySetInnerHTML={{ __html: phase.tip }}
      />

      <button
        onClick={onStart}
        className="rounded-full bg-emerald-700 px-12 py-3.5 text-base font-black text-white shadow-[0_6px_24px_rgba(27,94,59,0.5)] transition-all hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
      >
        Pronto! Vamos lá →
      </button>
    </div>
  )
}
