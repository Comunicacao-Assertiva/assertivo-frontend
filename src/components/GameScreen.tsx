"use client";
import { useState, useEffect } from "react";
import type { Phase, Scenario, Choice, GameState } from "@/types/game";

const LETTERS = ["A", "B", "C"] as const;

interface Props {
  state: GameState;
  phase: Phase;
  scenario: Scenario;
  globalProgress: number;
  totalScenarios: number;
  onSelectChoice: (c: Choice) => void;
  onNext: () => void;
}

export function GameScreen({
  state,
  phase,
  scenario,
  globalProgress,
  totalScenarios,
  onSelectChoice,
  onNext,
}: Props) {
  const [shuffled, setShuffled] = useState<Choice[]>([]);
  const [showPts, setShowPts] = useState<{ n: number; streak: boolean } | null>(
    null,
  );
  const [heartAnim, setHeartAnim] = useState(false);

  useEffect(() => {
    setShuffled([...scenario.choices].sort(() => Math.random() - 0.5));
  }, [scenario.id]);

  useEffect(() => {
    if (!state.answered || !state.selectedChoice) return;
    const pts =
      state.selectedChoice.type === "correct"
        ? state.streak >= 3
          ? 150
          : 100
        : state.selectedChoice.points;
    if (state.selectedChoice.type === "wrong") setHeartAnim(true);
    setShowPts({
      n: pts,
      streak: state.streak >= 3 && state.selectedChoice.type === "correct",
    });
    const t = setTimeout(() => {
      setShowPts(null);
      setHeartAnim(false);
    }, 1200);
    return () => clearTimeout(t);
  }, [state.answered]);

  const sel = state.selectedChoice;

  const btnStyle = (c: Choice) => {
    if (!sel)
      return "border-white/12 bg-white/6 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10";
    if (c.id !== sel.id) return "opacity-35 border-white/8 bg-white/4";
    return c.type === "correct"
      ? "border-green-500 bg-green-500/20"
      : c.type === "partial"
        ? "border-amber-500 bg-amber-500/20"
        : "border-red-500 bg-red-500/20";
  };

  const badgeStyle = (c: Choice) => {
    if (!sel || c.id !== sel.id) return "bg-white/10 text-white/40";
    return c.type === "correct"
      ? "bg-green-500 text-white"
      : c.type === "partial"
        ? "bg-amber-500 text-white"
        : "bg-red-500 text-white";
  };

  const fbStyle = !sel
    ? ""
    : sel.type === "correct"
      ? "border-green-500/40 bg-green-500/15 text-green-300"
      : sel.type === "partial"
        ? "border-amber-500/40 bg-amber-500/15 text-amber-300"
        : "border-red-500/40 bg-red-500/15 text-red-300";

  const isLastScenario = state.scenario === 4;
  const isLastPhase = state.phase === 7;
  const nextLabel =
    isLastScenario && isLastPhase
      ? "Ver Resultado Final →"
      : isLastScenario
        ? "Próxima Fase →"
        : "Próximo →";

  // Streak display
  const showStreak = state.streak >= 3;

  return (
    <div className="flex min-h-screen flex-col pb-28">
      {/* ── HUD ── */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-2.5">
          {/* Vidas */}
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`text-xl transition-all ${i < state.lives ? "opacity-100" : "opacity-20 grayscale"}
                  ${heartAnim && i === state.lives ? "animate-bounce" : ""}`}
              >
                ❤️
              </span>
            ))}
          </div>

          {/* Score */}
          <div className="text-center">
            <p className="text-xl font-black text-amber-400 leading-none">
              {state.score}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              pontos
            </p>
          </div>

          {/* Streak */}
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all
            ${showStreak ? "bg-orange-500/20 border border-orange-500/40" : "opacity-0"}`}
          >
            <span className="text-base">🔥</span>
            <span className="text-sm font-black text-orange-400">
              {state.streak}x
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-0.5 px-4 pb-2">
          {Array.from({ length: totalScenarios }, (_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300
              ${
                i < globalProgress
                  ? "bg-amber-500"
                  : i === globalProgress
                    ? "bg-amber-300 animate-pulse"
                    : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── SCENARIO ── */}
      <div className="mx-auto w-full max-w-xl px-5 pt-5">
        {/* Card */}
        <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
              {scenario.tag}
            </span>
            <span className="text-xs text-white/30 font-bold">
              {globalProgress + 1}/{totalScenarios}
            </span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
            Fase {phase.number} · {phase.title}
          </p>
          <p className="border-l-[3px] border-emerald-600 pl-4 text-[15px] leading-relaxed text-white/90">
            {scenario.question}
          </p>
        </div>

        {/* Choices */}
        <div className="flex flex-col gap-2.5">
          {shuffled.map((c, i) => (
            <button
              key={c.id}
              disabled={!!sel}
              onClick={() => onSelectChoice(c)}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left text-sm font-semibold text-white/85 transition-all active:scale-[0.98] ${btnStyle(c)}`}
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-all ${badgeStyle(c)}`}
              >
                {LETTERS[i]}
              </span>
              <span className="leading-snug">{c.text}</span>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {sel && (
          <div
            className={`mt-4 animate-[slideUp_0.25s_ease] rounded-2xl border p-4 ${fbStyle}`}
          >
            <p className="mb-1 font-black text-sm">
              {sel.type === "correct"
                ? state.streak >= 3
                  ? "🔥 COMBO! +150 pts"
                  : "✅ Resposta assertiva!"
                : sel.type === "partial"
                  ? "⚠️ Parcialmente correto"
                  : "❌ Resposta inadequada"}
            </p>
            <p className="text-sm opacity-90 leading-relaxed">{sel.feedback}</p>
          </div>
        )}
      </div>

      {/* Points pop */}
      {showPts && showPts.n > 0 && (
        <div
          className={`pointer-events-none fixed left-1/2 top-1/3 animate-[flyUp_0.9s_ease_forwards]
          font-black ${showPts.streak ? "text-5xl text-orange-400" : "text-4xl text-green-400"}
          -translate-x-1/2 -translate-y-1/2`}
        >
          +{showPts.n}
          {showPts.streak ? " 🔥" : ""}
        </div>
      )}

      {/* Next button */}
      {sel && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 animate-[pop_0.3s_ease]">
          <button
            onClick={onNext}
            className="min-w-[220px] rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(196,135,58,0.6)] active:scale-95"
          >
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  );
}
