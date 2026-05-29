"use client";

import { useEffect, useState } from "react";
import type { GameState, Phase } from "@/types/game";
import { Leaderboard } from "./Leaderboard";

interface FinalResultProps {
  state: GameState;
  phases: Phase[];
  classification: { title: string; trophy: string };
  onRestart: () => void;
  onSubmitScore: (name?: string) => Promise<unknown>;
}

const MESSAGES: Record<string, string> = {
  "Mestre da Comunicação":
    "Você demonstra domínio pleno da comunicação assertiva. É hora de ensinar, liderar e multiplicar essa prática na sua comunidade!",
  "Comunicador Assertivo":
    "Ótimo resultado! Você já pratica a comunicação assertiva de forma sólida. Continue desenvolvendo as áreas com menor pontuação.",
  "Comunicador em Crescimento":
    "Você está no caminho certo! Sua comunicação tem bases sólidas, mas há espaço importante para crescimento. Continue praticando!",
  "Aprendiz em Comunicação":
    "Todo grande comunicador começa de algum lugar. Identifique suas áreas mais desafiadoras e comece pequeno: uma conversa mais assertiva por dia já transforma sua comunidade.",
};

export function FinalResult({
  state,
  phases,
  classification,
  onRestart,
  onSubmitScore,
}: FinalResultProps) {
  const [submitted, setSubmitted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Confetti on mount
  useEffect(() => {
    const colors = ["#C4873A", "#1B5E3B", "#fff", "#E09B45", "#2E7D55"];
    for (let i = 0; i < 80; i++) {
      const el = document.createElement("div");
      const size = 6 + Math.random() * 6;
      el.style.cssText = `position:fixed;width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:-20px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? "50%" : "2px"};animation:confettiFall ${1 + Math.random() * 2}s linear ${Math.random() * 1.5}s forwards;z-index:999;pointer-events:none;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    await onSubmitScore(playerName || undefined);
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-4 animate-bounce text-6xl">
        {classification.trophy}
      </div>

      <span className="mb-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-white">
        {classification.title}
      </span>

      <h2 className="mb-1 text-3xl font-black">Jogo Concluído!</h2>
      <div className="text-6xl font-black text-amber-400 leading-tight">
        {state.score}
      </div>
      <p className="mb-2 text-base text-white/35">/ 10.000 pontos</p>
      <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
        {MESSAGES[classification.title]}
      </p>

      {/* Stats */}
      <div className="mb-6 grid w-full max-w-sm grid-cols-3 gap-2.5">
        {[
          { n: state.correct, l: "Assertivas" },
          { n: state.partial, l: "Razoáveis" },
          { n: state.wrong, l: "Inadequadas" },
        ].map(({ n, l }) => (
          <div
            key={l}
            className="rounded-xl border border-white/10 bg-white/5 py-3 text-center"
          >
            <div className="text-2xl font-black text-amber-400">{n}</div>
            <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-white/40">
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* Phase breakdown */}
      <div className="mb-6 w-full max-w-sm space-y-2">
        {phases.map((ph, i) => (
          <div
            key={ph.id}
            className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2.5 text-sm"
          >
            <span className="text-left text-white/60">
              Fase {ph.number} — {ph.title}
            </span>
            <span className="font-black text-amber-400">
              {state.phaseScores[i]}/2000
            </span>
          </div>
        ))}
      </div>

      {/* Score submit */}
      {!submitted ? (
        <div className="mb-6 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="mb-3 text-sm font-bold text-white/70">
            Salvar pontuação no placar?
          </p>
          <input
            type="text"
            placeholder="Seu nome (opcional)"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="mb-3 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500"
          />
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full rounded-xl bg-emerald-700 py-2.5 text-sm font-black text-white transition hover:bg-emerald-600 disabled:opacity-50"
          >
            {submitting ? "Salvando..." : "Salvar no Placar"}
          </button>
        </div>
      ) : (
        <p className="mb-6 text-sm font-bold text-green-400">
          ✅ Pontuação salva no placar!
        </p>
      )}

      {/* Leaderboard */}
      <div className="mb-8 w-full max-w-sm">
        <Leaderboard />
      </div>

      {/* Actions */}
      <div className="flex w-full max-w-sm flex-col gap-3">
        <button
          onClick={onRestart}
          className="rounded-full bg-emerald-700 py-4 text-base font-black text-white shadow-[0_6px_24px_rgba(27,94,59,0.5)] transition-all hover:-translate-y-1 hover:bg-emerald-600"
        >
          ▶ Jogar Novamente
        </button>
        <button
          onClick={() => {
            const msg = `🎮 Joguei "Assertivo! – O Jogo" e fiz ${state.score}/10.000 pts!\n🏆 ${classification.title}\n\n"Seguindo a verdade em amor" — Ef 4:15`;
            navigator.clipboard
              ?.writeText(msg)
              .then(() => alert("Resultado copiado!"));
          }}
          className="rounded-full border border-white/15 py-3 text-sm font-bold text-white/55 transition hover:border-white/30 hover:text-white"
        >
          Compartilhar Resultado
        </button>
      </div>
    </div>
  );
}
