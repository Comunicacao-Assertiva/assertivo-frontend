"use client";
import { useEffect, useState } from "react";
import type { GameState, Phase, ScoreResponse } from "@/types/game";
import { getLeaderboard } from "@/lib/supabase";

interface Props {
  state: GameState;
  phases: Phase[];
  maxScore: number;
  classification: { title: string; trophy: string };
  onRestart: () => void;
  onSubmitScore: () => Promise<ScoreResponse | null>;
}

const MESSAGES: Record<string, string> = {
  "Mestre da Comunicação":
    "Domínio pleno da comunicação assertiva. É hora de multiplicar essa prática!",
  "Comunicador Assertivo":
    "Resultado sólido! Continue desenvolvendo as áreas com menor pontuação.",
  "Comunicador em Crescimento":
    "Bom caminho! Há espaço importante para crescimento. Continue praticando!",
  "Aprendiz em Comunicação":
    "Todo grande comunicador começa assim. Uma conversa assertiva por dia já transforma tudo.",
};

export function FinalResult({
  state,
  phases,
  maxScore,
  classification,
  onRestart,
  onSubmitScore,
}: Props) {
  const [ranking, setRanking] = useState<ScoreResponse[]>([]);
  const [showRank, setShowRank] = useState(false);
  const [saved, setSaved] = useState(false);

  // Auto-salva o score ao chegar na tela final
  useEffect(() => {
    onSubmitScore().then(() => setSaved(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Confetti
  useEffect(() => {
    const colors = ["#C4873A", "#1B5E3B", "#fff", "#E09B45", "#2E7D55"];
    for (let i = 0; i < 80; i++) {
      const el = document.createElement("div");
      const sz = 6 + Math.random() * 6;
      el.style.cssText = `position:fixed;width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:-20px;background:${colors[~~(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? "50%" : "2px"};animation:confettiFall ${1 + Math.random() * 2}s linear ${Math.random() * 1.5}s forwards;z-index:999;pointer-events:none;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  }, []);

  const handleShowRanking = async () => {
    const data = await getLeaderboard(10);
    setRanking(data);
    setShowRank(true);
  };

  const myPosition =
    ranking.findIndex(
      (r) =>
        r.player_name === state.playerName && r.total_score === state.score,
    ) + 1;

  if (showRank) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10">
        <h2 className="text-3xl font-black mb-2 text-center">
          🏆 Placar Geral
        </h2>
        <p className="text-sm text-white/40 mb-6 text-center">
          Top 10 pontuações
        </p>

        <div className="w-full max-w-sm space-y-2 mb-6">
          {ranking.map((entry, i) => {
            const isMe =
              entry.player_name === state.playerName &&
              entry.total_score === state.score;
            return (
              <div
                key={entry.id}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${isMe ? "bg-amber-500/20 border border-amber-500/40" : "bg-white/5 border border-white/10"}`}
              >
                <span
                  className={`text-lg font-black w-7 text-center ${i === 0 ? "text-amber-400" : i === 1 ? "text-white/60" : i === 2 ? "text-amber-700" : "text-white/30"}`}
                >
                  {i === 0
                    ? "🥇"
                    : i === 1
                      ? "🥈"
                      : i === 2
                        ? "🥉"
                        : `${i + 1}º`}
                </span>
                <div className="flex-1">
                  <p
                    className={`text-sm font-bold ${isMe ? "text-amber-400" : "text-white"}`}
                  >
                    {entry.player_name} {isMe && "← você"}
                  </p>
                  <p className="text-xs text-white/40">
                    {entry.classification}
                  </p>
                </div>
                <span className="text-sm font-black text-amber-400">
                  {entry.total_score}
                </span>
              </div>
            );
          })}
          {ranking.length === 0 && (
            <p className="text-center text-white/40 text-sm py-8">
              Nenhuma pontuação ainda
            </p>
          )}
        </div>

        {myPosition > 0 && (
          <p className="text-sm text-amber-400 font-bold mb-4">
            Você ficou em {myPosition}º lugar!
          </p>
        )}

        <div className="flex w-full max-w-sm flex-col gap-3">
          <button
            onClick={onRestart}
            className="rounded-full bg-emerald-700 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-emerald-600"
          >
            ▶ Jogar Novamente
          </button>
          <button
            onClick={() => setShowRank(false)}
            className="rounded-full border border-white/15 py-3 text-sm font-bold text-white/55 transition hover:border-white/30 hover:text-white"
          >
            ← Voltar ao Resultado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-4 animate-bounce text-6xl">
        {classification.trophy}
      </div>

      <span className="mb-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-white">
        {classification.title}
      </span>

      <h2 className="mb-1 text-3xl font-black">
        Parabéns, {state.playerName.split(" ")[0]}!
      </h2>
      <div className="text-6xl font-black text-amber-400 leading-tight">
        {state.score}
      </div>
      <p className="mb-2 text-base text-white/35">/ {maxScore} pontos</p>
      <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
        {MESSAGES[classification.title]}
      </p>

      {/* Stats */}
      <div className="mb-4 grid w-full max-w-sm grid-cols-3 gap-2.5">
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

      {/* Por fase */}
      <div className="mb-6 w-full max-w-sm space-y-1.5">
        {phases.map((ph, i) => (
          <div
            key={ph.id}
            className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2 text-sm"
          >
            <span className="text-left text-white/55">
              Fase {ph.number} — {ph.title}
            </span>
            <span className="font-black text-amber-400">
              {state.phaseScores[i]}/300
            </span>
          </div>
        ))}
      </div>

      {saved && (
        <p className="mb-4 text-xs text-green-400/70">
          ✅ Pontuação salva automaticamente
        </p>
      )}

      <div className="flex w-full max-w-sm flex-col gap-3">
        <button
          onClick={handleShowRanking}
          className="rounded-full bg-amber-500 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1"
        >
          🏆 Ver Placar Geral
        </button>
        <button
          onClick={onRestart}
          className="rounded-full bg-emerald-700 py-3.5 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-emerald-600"
        >
          ▶ Jogar Novamente
        </button>
        <button
          onClick={() => {
            const msg = `🎮 Joguei "Assertivo!" e fiz ${state.score}/${maxScore} pts!\n🏆 ${classification.title}\n"Comunicação assertiva transforma relações."`;
            navigator.clipboard
              ?.writeText(msg)
              .then(() => alert("Resultado copiado!"));
          }}
          className="rounded-full border border-white/15 py-3 text-sm font-bold text-white/50 transition hover:border-white/30 hover:text-white"
        >
          Compartilhar Resultado
        </button>
      </div>
    </div>
  );
}
