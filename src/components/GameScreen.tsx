'use client'

import { useMemo, useEffect, useState } from 'react'
import type { Phase, Scenario, Choice, GameState } from '@/types/game'

interface GameScreenProps {
  state: GameState
  phase: Phase
  scenario: Scenario
  globalProgress: number
  onSelectChoice: (choice: Choice) => void
  onNext: () => void
}

const CHOICE_LETTERS = ['A', 'B', 'C'] as const

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function GameScreen({
  state,
  phase,
  scenario,
  globalProgress,
  onSelectChoice,
  onNext,
}: GameScreenProps) {
  const [shuffled, setShuffled] = useState<Choice[]>([])
  const [showPts, setShowPts] = useState<{ pts: number; type: string } | null>(null)

  // Shuffle choices when scenario changes
  useEffect(() => {
    setShuffled(shuffle(scenario.choices))
  }, [scenario.id])

  // Points animation
  useEffect(() => {
    if (state.selectedChoice) {
      setShowPts({ pts: state.selectedChoice.points, type: state.selectedChoice.type })
      const t = setTimeout(() => setShowPts(null), 1000)
      return () => clearTimeout(t)
    }
  }, [state.selectedChoice])

  const isLastScenario = state.scenario === 2 && state.phase === 4
  const nextLabel = isLastScenario
    ? 'Ver Resultado Final →'
    : state.scenario === 2
    ? `Próxima Fase →`
    : 'Próximo Cenário →'

  const choiceColor = (choice: Choice) => {
    if (!state.answered) return ''
    if (choice.id === state.selectedChoice?.id) {
      if (choice.type === 'correct') return 'border-green-500 bg-green-500/20'
      if (choice.type === 'partial') return 'border-amber-500 bg-amber-500/20'
      return 'border-red-500 bg-red-500/20'
    }
    return 'opacity-40'
  }

  const letterColor = (choice: Choice) => {
    if (!state.answered || choice.id !== state.selectedChoice?.id) return 'bg-white/10 text-white/50'
    if (choice.type === 'correct') return 'bg-green-500 text-white'
    if (choice.type === 'partial') return 'bg-amber-500 text-white'
    return 'bg-red-500 text-white'
  }

  const feedbackStyle = () => {
    if (!state.selectedChoice) return ''
    if (state.selectedChoice.type === 'correct') return 'border-green-500/40 bg-green-500/15 text-green-300'
    if (state.selectedChoice.type === 'partial') return 'border-amber-500/40 bg-amber-500/15 text-amber-300'
    return 'border-red-500/40 bg-red-500/15 text-red-300'
  }

  const feedbackIcon = () => {
    if (!state.selectedChoice) return ''
    if (state.selectedChoice.type === 'correct') return '✅'
    if (state.selectedChoice.type === 'partial') return '⚠️'
    return '❌'
  }

  const feedbackLabel = () => {
    if (!state.selectedChoice) return ''
    if (state.selectedChoice.type === 'correct') return 'Resposta assertiva!'
    if (state.selectedChoice.type === 'partial') return 'Resposta razoável'
    return 'Resposta inadequada'
  }

  return (
    <div className="flex min-h-screen flex-col pb-28">
      {/* HUD */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3 backdrop-blur">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
            Fase {phase.number} — {phase.title}
          </p>
          <p className="text-sm font-black">Cenário {state.scenario + 1}/3</p>
        </div>
        <p className="text-xl font-black text-amber-400">{state.score} pts</p>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`text-lg ${i >= state.lives ? 'opacity-20' : ''}`}>
              ❤
            </span>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 bg-black/20 px-5 py-2">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all ${
              i < globalProgress
                ? 'bg-amber-500'
                : i === globalProgress
                ? 'bg-white'
                : 'bg-white/15'
            }`}
          />
        ))}
      </div>

      {/* Scenario */}
      <div className="mx-auto w-full max-w-xl px-5 pt-5">
        {/* Card */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="mb-3 inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
            {scenario.tag}
          </span>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">
            Questão {state.phase * 3 + state.scenario + 1} de 15
          </p>
          <p className="border-l-[3px] border-emerald-600 pl-4 text-[15px] leading-relaxed text-white/85">
            {scenario.question}
          </p>
        </div>

        {/* Choices */}
        <div className="flex flex-col gap-3">
          {shuffled.map((choice, i) => (
            <button
              key={choice.id}
              disabled={state.answered}
              onClick={() => onSelectChoice(choice)}
              className={`flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 p-4 text-left text-sm font-semibold leading-snug text-white/85 transition-all
                ${!state.answered ? 'hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 active:scale-[0.98]' : ''}
                ${choiceColor(choice)}`}
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all ${letterColor(choice)}`}
              >
                {CHOICE_LETTERS[i]}
              </span>
              <span>{choice.text}</span>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {state.answered && state.selectedChoice && (
          <div
            className={`mt-4 animate-[slideUp_0.3s_ease] rounded-2xl border p-4 text-sm font-semibold leading-relaxed ${feedbackStyle()}`}
          >
            <p className="mb-1 font-black">
              {feedbackIcon()} {feedbackLabel()}
            </p>
            <p className="font-medium opacity-90">{state.selectedChoice.feedback}</p>
          </div>
        )}
      </div>

      {/* Points animation */}
      {showPts && showPts.pts > 0 && (
        <div
          className={`pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[flyUp_0.9s_ease_forwards] text-4xl font-black ${
            showPts.type === 'correct' ? 'text-green-400' : 'text-amber-300'
          }`}
        >
          +{showPts.pts} {showPts.type === 'correct' ? '✨' : ''}
        </div>
      )}

      {/* Next button */}
      {state.answered && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <button
            onClick={onNext}
            className="min-w-[220px] rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(196,135,58,0.6)] active:scale-95 animate-[pop_0.3s_ease]"
          >
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  )
}
