"use client";
import { useState, useEffect } from "react";
import type {
  Phase,
  Scenario,
  GameState,
  ChoiceScenario,
  SpotScenario,
  SortScenario,
  SortItem,
} from "@/types/game";

// ── CHOICE ──────────────────────────────────────────────────────────────────

function ChoiceView({
  sc,
  onScore,
}: {
  sc: ChoiceScenario;
  onScore: (pts: number, fb: string) => void;
}) {
  const [shuffled] = useState(() =>
    [...sc.choices].sort(() => Math.random() - 0.5),
  );
  const [selected, setSelected] = useState<string | null>(null);

  const pick = (id: string, pts: number, fb: string) => {
    if (selected) return;
    setSelected(id);
    onScore(pts, fb);
  };

  const color = (id: string) => {
    if (!selected || id !== selected) return selected ? "opacity-40" : "";
    const c = shuffled.find((x) => x.id === id)!;
    return c.type === "correct"
      ? "border-green-500 bg-green-500/20"
      : c.type === "partial"
        ? "border-amber-500 bg-amber-500/20"
        : "border-red-500 bg-red-500/20";
  };

  return (
    <div className="flex flex-col gap-3">
      {shuffled.map((c, i) => (
        <button
          key={c.id}
          disabled={!!selected}
          onClick={() => pick(c.id, c.points, c.feedback)}
          className={`flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 p-4 text-left text-sm font-semibold text-white/85 transition-all
            ${!selected ? "hover:-translate-y-0.5 hover:bg-white/10" : ""} ${color(c.id)}`}
        >
          <span
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black
            ${
              !selected || c.id !== selected
                ? "bg-white/10 text-white/50"
                : c.type === "correct"
                  ? "bg-green-500 text-white"
                  : c.type === "partial"
                    ? "bg-amber-500 text-white"
                    : "bg-red-500 text-white"
            }`}
          >
            {["A", "B", "C"][i]}
          </span>
          <span>{c.text}</span>
        </button>
      ))}
    </div>
  );
}

// ── SPOT ────────────────────────────────────────────────────────────────────

function SpotView({
  sc,
  onScore,
}: {
  sc: SpotScenario;
  onScore: (pts: number, fb: string) => void;
}) {
  const [clicked, setClicked] = useState<string | null>(null);

  const pick = (msg: (typeof sc.messages)[0]) => {
    if (clicked) return;
    setClicked(msg.id);
    onScore(msg.isTarget ? 100 : 0, msg.explanation);
  };

  return (
    <div>
      <div className="mb-3 rounded-xl bg-white/5 px-4 py-2.5 text-xs text-white/50 border border-white/10">
        📍 {sc.context}
      </div>
      <div className="flex flex-col gap-2">
        {sc.messages.map((msg) => {
          const isClicked = clicked === msg.id;
          const revealed = !!clicked;
          const isTarget = msg.isTarget;

          let border = "border-white/10 bg-white/5";
          if (revealed && isTarget) border = "border-red-500 bg-red-500/15";
          else if (isClicked && !isTarget)
            border = "border-red-500/60 bg-red-500/10";
          else if (revealed && !isTarget) border = "opacity-40";

          return (
            <button
              key={msg.id}
              disabled={!!clicked}
              onClick={() => pick(msg)}
              className={`w-full rounded-xl border p-3 text-left transition-all ${border}
                ${!clicked ? "hover:border-white/25 hover:bg-white/10" : ""}`}
            >
              <p className="text-[11px] font-bold text-white/40 mb-0.5">
                {msg.author}
              </p>
              <p className="text-sm text-white/85">{msg.text}</p>
              {revealed && isTarget && (
                <p className="mt-2 text-xs text-red-300 font-semibold">
                  ⚠️ {msg.explanation}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── SORT ────────────────────────────────────────────────────────────────────

function SortView({
  sc,
  onScore,
}: {
  sc: SortScenario;
  onScore: (pts: number, fb: string) => void;
}) {
  const [shuffled] = useState<SortItem[]>(() =>
    [...sc.items].sort(() => Math.random() - 0.5),
  );
  const [order, setOrder] = useState<string[]>([]);
  const done = order.length === sc.items.length;

  const pick = (id: string) => {
    if (order.includes(id) || done) return;
    const newOrder = [...order, id];
    setOrder(newOrder);
    if (newOrder.length === sc.items.length) {
      // Score: 25pts for each item in correct rank position
      // order[0] = worst (rank 1), order[3] = best (rank 4)
      let pts = 0;
      newOrder.forEach((itemId, idx) => {
        const item = sc.items.find((x) => x.id === itemId)!;
        if (item.rank === idx + 1) pts += 25;
      });
      const fb = sc.items
        .sort((a, b) => a.rank - b.rank)
        .map((item, i) => `${i + 1}º: ${item.text} — ${item.explanation}`)
        .join("\n");
      onScore(pts, fb);
    }
  };

  const rankLabel = (id: string) => {
    const idx = order.indexOf(id);
    if (idx === -1) return null;
    const labels = ["Pior", "2º", "3º", "Melhor"];
    return labels[idx];
  };

  const correctRank = (id: string) => {
    if (!done) return null;
    const item = sc.items.find((x) => x.id === id)!;
    const myIdx = order.indexOf(id);
    return item.rank === myIdx + 1;
  };

  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/35 text-center">
        {done
          ? "Resultado"
          : `Clique em ordem: Pior → Melhor (${order.length}/4)`}
      </p>
      <div className="mb-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all"
          style={{ width: `${(order.length / sc.items.length) * 100}%` }}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        {shuffled.map((item) => {
          const label = rankLabel(item.id);
          const picked = order.includes(item.id);
          const correct = correctRank(item.id);

          let cardStyle = "border-white/12 bg-white/6";
          if (done) {
            cardStyle = correct
              ? "border-green-500 bg-green-500/15"
              : "border-red-500/50 bg-red-500/10";
          } else if (picked) {
            cardStyle = "border-amber-500/60 bg-amber-500/10";
          }

          return (
            <button
              key={item.id}
              disabled={picked || done}
              onClick={() => pick(item.id)}
              className={`flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all
                ${!picked && !done ? "hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10" : ""} ${cardStyle}`}
            >
              <div
                className={`flex-shrink-0 w-14 h-8 rounded-lg flex items-center justify-center text-xs font-black
                ${
                  label
                    ? done && !correct
                      ? "bg-red-500/30 text-red-300"
                      : "bg-amber-500/30 text-amber-300"
                    : "bg-white/8 text-white/25"
                }`}
              >
                {label ?? "···"}
              </div>
              <span className="text-sm font-semibold text-white/85">
                {item.text}
              </span>
              {done && (
                <span className="ml-auto text-lg">{correct ? "✅" : "❌"}</span>
              )}
            </button>
          );
        })}
      </div>
      {done && (
        <div className="mt-3 rounded-xl bg-white/5 border border-white/10 p-3">
          <p className="text-[11px] font-bold text-white/40 mb-1.5 uppercase tracking-wider">
            Ordem correta
          </p>
          {sc.items
            .sort((a, b) => a.rank - b.rank)
            .map((item, i) => (
              <p key={item.id} className="text-xs text-white/65 mb-1">
                <span className="font-bold text-amber-400">{i + 1}º</span>{" "}
                {item.text}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}

// ── GAME SCREEN ─────────────────────────────────────────────────────────────

interface Props {
  state: GameState;
  phase: Phase;
  scenario: Scenario;
  globalProgress: number;
  totalScenarios: number;
  onScoreScenario: (pts: number) => void;
  onNext: () => void;
}

export function GameScreen({
  state,
  phase,
  scenario,
  globalProgress,
  totalScenarios,
  onScoreScenario,
  onNext,
}: Props) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showPts, setShowPts] = useState<number | null>(null);

  useEffect(() => {
    setFeedback(null);
    setShowPts(null);
  }, [scenario.id]);

  const handleScore = (pts: number, fb: string) => {
    setFeedback(fb);
    setShowPts(pts);
    onScoreScenario(pts);
    setTimeout(() => setShowPts(null), 1000);
  };

  const isLast = state.scenario === 2 && state.phase === phase.id - 1;
  const nextLabel = isLast
    ? "Ver Resultado Final →"
    : state.scenario === 2
      ? "Próxima Fase →"
      : "Próximo →";

  const typeLabel =
    scenario.type === "spot"
      ? "🔍 Identifique o problema"
      : scenario.type === "sort"
        ? "📊 Ordene da pior para a melhor"
        : "🎯 Escolha a melhor resposta";

  const typeBadge =
    scenario.type === "spot"
      ? "bg-blue-500/15 text-blue-300 border-blue-500/30"
      : scenario.type === "sort"
        ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
        : "bg-amber-500/15 text-amber-300 border-amber-500/30";

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
      </div>

      {/* Progress */}
      <div className="flex gap-1 bg-black/20 px-5 py-2">
        {Array.from({ length: totalScenarios }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all ${
              i < globalProgress
                ? "bg-amber-500"
                : i === globalProgress
                  ? "bg-white"
                  : "bg-white/15"
            }`}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-xl px-5 pt-5">
        {/* Scenario Card */}
        <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
              {scenario.tag}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold ${typeBadge}`}
            >
              {typeLabel}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">
            Questão {globalProgress + 1} de {totalScenarios}
          </p>
          <p className="border-l-[3px] border-emerald-600 pl-4 text-[15px] leading-relaxed text-white/85">
            {scenario.type === "sort" ? scenario.situation : scenario.question}
          </p>
          {scenario.type === "sort" && (
            <p className="mt-2 text-sm font-bold text-purple-300">
              {scenario.question}
            </p>
          )}
        </div>

        {/* Scenario Type Renderer */}
        {scenario.type === "choice" && (
          <ChoiceView sc={scenario} onScore={handleScore} />
        )}
        {scenario.type === "spot" && (
          <SpotView sc={scenario} onScore={handleScore} />
        )}
        {scenario.type === "sort" && (
          <SortView sc={scenario} onScore={handleScore} />
        )}

        {/* Feedback (choice + spot) */}
        {state.answered && feedback && scenario.type !== "sort" && (
          <div
            className={`mt-4 animate-[slideUp_0.3s_ease] rounded-2xl border p-4 text-sm font-semibold leading-relaxed
            ${
              state.scenarioScore === 100
                ? "border-green-500/40 bg-green-500/15 text-green-300"
                : state.scenarioScore! > 0
                  ? "border-amber-500/40 bg-amber-500/15 text-amber-300"
                  : "border-red-500/40 bg-red-500/15 text-red-300"
            }`}
          >
            <p className="mb-1 font-black">
              {state.scenarioScore === 100
                ? "✅ Resposta assertiva!"
                : state.scenarioScore! > 0
                  ? "⚠️ Parcialmente correto"
                  : "❌ Resposta inadequada"}
            </p>
            <p className="opacity-90">{feedback}</p>
          </div>
        )}

        {/* Points animation */}
        {showPts !== null && showPts > 0 && (
          <div
            className={`pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            animate-[flyUp_0.9s_ease_forwards] text-4xl font-black
            ${showPts === 100 ? "text-green-400" : "text-amber-300"}`}
          >
            +{showPts}
            {showPts === 100 ? " ✨" : ""}
          </div>
        )}
      </div>

      {/* Next Button */}
      {state.answered && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <button
            onClick={onNext}
            className="min-w-[220px] rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95 animate-[pop_0.3s_ease]"
          >
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  );
}
