"use client";
import { useState, useEffect } from "react";
import type {
  SubItem,
  ChoiceItem,
  TipItem,
  Choice,
  GameState,
  Topic,
  SubPhase,
} from "@/types/game";

// ── TIP CARD ────────────────────────────────────────────────────────────────
function TipCard({
  item,
  onContinue,
}: {
  item: TipItem;
  onContinue: () => void;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="mx-auto w-full max-w-xl px-5 pt-6">
      <div className="mb-4 text-center">
        <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-4 py-1.5 text-xs font-bold text-blue-300 uppercase tracking-widest">
          💡 Dica do Módulo
        </span>
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        {!flipped ? (
          <button
            onClick={() => setFlipped(true)}
            className="w-full p-8 text-center hover:bg-white/5 transition-all group"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-black mb-2">{item.title}</h3>
            <p className="text-sm text-white/40 mb-4">
              Toque para revelar a dica
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white/60 group-hover:border-white/40 group-hover:text-white transition">
              Revelar →
            </div>
          </button>
        ) : (
          <div className="p-6 animate-[slideUp_0.3s_ease]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-lg font-black">{item.title}</h3>
            </div>
            <div className="text-sm text-white/80 leading-relaxed whitespace-pre-line border-l-[3px] border-amber-500 pl-4">
              {item.content}
            </div>
          </div>
        )}
      </div>

      {flipped && (
        <div className="text-center animate-[slideUp_0.3s_ease]">
          <button
            onClick={onContinue}
            className="rounded-full bg-amber-500 px-10 py-3.5 text-base font-black text-white shadow-[0_6px_24px_rgba(196,135,58,0.4)] transition-all hover:-translate-y-1 active:scale-95"
          >
            Entendido — Próximo →
          </button>
        </div>
      )}
    </div>
  );
}

// ── CHOICE QUESTION ──────────────────────────────────────────────────────────
const LETTERS = ["A", "B", "C"] as const;

function ChoiceQuestion({
  item,
  state,
  onSelect,
}: {
  item: ChoiceItem;
  state: GameState;
  onSelect: (c: Choice) => void;
}) {
  // ✅ CORREÇÃO: re-embaralha toda vez que o ID da questão muda
  const [shuffled, setShuffled] = useState<Choice[]>([]);

  useEffect(() => {
    setShuffled([...item.choices].sort(() => Math.random() - 0.5));
  }, [item.id]);

  const sel = state.selectedChoice;
  const onStreak = state.streak >= 2;

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

  if (shuffled.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-xl px-5 pt-4">
      {onStreak && !sel && (
        <div className="mb-3 text-center animate-[slideUp_0.2s_ease]">
          <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-3 py-1 text-xs font-black text-orange-400">
            🔥 STREAK × {state.streak} — próxima correta vale 150 pts!
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2.5 mb-4">
        {shuffled.map((c, i) => (
          <button
            key={c.id}
            disabled={!!sel}
            onClick={() => onSelect(c)}
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

      {sel && (
        <div
          className={`animate-[slideUp_0.25s_ease] rounded-2xl border p-4
          ${
            sel.type === "correct"
              ? "border-green-500/40 bg-green-500/15 text-green-300"
              : sel.type === "partial"
                ? "border-amber-500/40 bg-amber-500/15 text-amber-300"
                : "border-red-500/40 bg-red-500/15 text-red-300"
          }`}
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
  );
}

// ── GAME SCREEN PRINCIPAL ────────────────────────────────────────────────────
interface Props {
  state: GameState;
  topic: Topic;
  sub: SubPhase;
  item: SubItem;
  globalProgress: number;
  totalItems: number;
  onSelectChoice: (c: Choice) => void;
  onNextItem: () => void;
}

export function GameScreen({
  state,
  topic,
  sub,
  item,
  globalProgress,
  totalItems,
  onSelectChoice,
  onNextItem,
}: Props) {
  const [showPts, setShowPts] = useState<{ n: number; streak: boolean } | null>(
    null,
  );
  const [heartAnim, setHeartAnim] = useState(false);

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

  const isQuestion = item.type === "choice";
  const questionIdx =
    sub.items.slice(0, state.itemIdx).filter((i) => i.type === "choice")
      .length + 1;
  const totalQ = sub.items.filter((i) => i.type === "choice").length;
  const isLastItem = state.itemIdx >= 3;
  const nextLabel = isLastItem ? "Ver resultado do módulo →" : "Próxima →";

  return (
    <div className="flex min-h-screen flex-col pb-32">
      {/* HUD */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-2.5">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`text-xl ${i < state.lives ? "" : "opacity-20 grayscale"} ${heartAnim && i === state.lives ? "animate-bounce" : ""}`}
              >
                ❤️
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-amber-400 leading-none">
              {state.score}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              pontos
            </p>
          </div>
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all ${state.streak >= 3 ? "bg-orange-500/20 border border-orange-500/40" : "opacity-0 pointer-events-none"}`}
          >
            <span className="text-base">🔥</span>
            <span className="text-sm font-black text-orange-400">
              {state.streak}x
            </span>
          </div>
        </div>

        {/* Barra de progresso geral */}
        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
            style={{ width: `${(globalProgress / totalItems) * 100}%` }}
          />
        </div>

        {/* Contexto */}
        <div className="flex items-center gap-2 px-5 py-2 border-t border-white/5">
          <span className="text-xs">{topic.icon}</span>
          <span className="text-xs text-white/40 font-bold">{topic.title}</span>
          <span className="text-white/20 text-xs">›</span>
          <span className="text-xs text-white/55 font-bold">{sub.title}</span>
          {isQuestion && (
            <>
              <span className="text-white/20 text-xs">›</span>
              <span className="text-xs text-amber-400/70 font-bold">
                Q {questionIdx}/{totalQ}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      {isQuestion ? (
        <>
          <div className="mx-auto w-full max-w-xl px-5 pt-5">
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="mb-3 inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
                {(item as ChoiceItem).tag}
              </span>
              <p className="border-l-[3px] border-emerald-600 pl-4 text-[15px] leading-relaxed text-white/90">
                {(item as ChoiceItem).question}
              </p>
            </div>
          </div>
          {/* ✅ key={item.id} garante que o componente remonta a cada nova questão */}
          <ChoiceQuestion
            key={item.id}
            item={item as ChoiceItem}
            state={state}
            onSelect={onSelectChoice}
          />
        </>
      ) : (
        <TipCard item={item as TipItem} onContinue={onNextItem} />
      )}

      {/* Animação de pontos */}
      {showPts && showPts.n > 0 && (
        <div
          className={`pointer-events-none fixed left-1/2 top-1/3 animate-[flyUp_0.9s_ease_forwards] font-black -translate-x-1/2 -translate-y-1/2 ${showPts.streak ? "text-5xl text-orange-400" : "text-4xl text-green-400"}`}
        >
          +{showPts.n}
          {showPts.streak ? " 🔥" : ""}
        </div>
      )}

      {/* Botão próximo */}
      {state.answered && isQuestion && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 animate-[pop_0.3s_ease]">
          <button
            onClick={onNextItem}
            className="min-w-[220px] rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95"
          >
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  );
}
