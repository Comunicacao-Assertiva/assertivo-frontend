"use client";
import { useState } from "react";
import { PHASES_DATA } from "@/data/phases";

interface SavedGame {
  playerName: string;
  topicIdx: number;
  subIdx: number;
  score: number;
  lives: number;
  savedAt: string;
}

interface Props {
  onStart: (name: string) => void;
  onContinue: () => void;
  savedGame: SavedGame | null;
}

export function WelcomeScreen({ onStart, onContinue, savedGame }: Props) {
  const [name, setName] = useState("");
  const [showNew, setShowNew] = useState(false);
  const isValid = name.trim().length >= 3;
  const N = PHASES_DATA.length;

  const hasSave = !!savedGame;
  const topic = savedGame ? PHASES_DATA[savedGame.topicIdx] : null;
  const sub = topic?.subPhases[savedGame?.subIdx ?? 0];
  const savedDate = savedGame?.savedAt
    ? new Date(savedGame.savedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  // Se não tem save, mostra direto o formulário de novo jogo
  const showForm = !hasSave || showNew;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      {/* Ícone */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-400 text-4xl shadow-[0_0_0_14px_rgba(196,135,58,0.15),0_0_0_28px_rgba(196,135,58,0.07)] animate-pulse">
        💬
      </div>

      <span className="mb-3 rounded-full border border-amber-500/30 bg-amber-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
        Jogo Educativo
      </span>

      <h1 className="mb-1 text-5xl font-black leading-tight">
        Comunicação
        <br />
        <span className="text-amber-400">Assertiva</span>
      </h1>
      <p className="mb-8 text-lg font-bold text-white/50 tracking-wide">
        O Jogo
      </p>

      {/* Stats */}
      <div className="mb-6 grid w-full max-w-sm grid-cols-3 gap-2">
        {[
          { n: String(N), l: "Tópicos" },
          { n: "❤️❤️❤️", l: "Vidas" },
          { n: "🔥", l: "Streak" },
        ].map(({ n, l }) => (
          <div
            key={l}
            className="rounded-xl border border-white/10 bg-white/5 py-3 text-center"
          >
            <div className="text-lg font-black text-amber-400 leading-tight">
              {n}
            </div>
            <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-white/40">
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* Regras rápidas */}
      <div className="mb-6 w-full max-w-sm rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/50 text-left space-y-1">
        <p>
          🔥 <span className="font-bold text-white/70">Streak:</span> 3 acertos
          seguidos = próxima vale{" "}
          <span className="text-amber-400 font-bold">150 pts!</span>
        </p>
        <p>
          ❤️ <span className="font-bold text-white/70">Vidas:</span> perde uma a
          cada erro. Game over sem vidas!
        </p>
        <p>
          💡 <span className="font-bold text-white/70">Dicas:</span> cada módulo
          começa com uma técnica real.
        </p>
        <p>
          💾 <span className="font-bold text-white/70">Progresso:</span> salvo
          automaticamente. Pode sair e voltar!
        </p>
      </div>

      {/* ── Jogo salvo ── */}
      {hasSave && !showNew && (
        <div className="w-full max-w-sm space-y-3">
          {/* Card do save */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-left">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500">
                💾 Progresso salvo
              </p>
              <p className="text-[10px] text-white/30">{savedDate}</p>
            </div>

            <p className="font-black text-white text-lg mb-3">
              {savedGame!.playerName}
            </p>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-white/10 py-2">
                <p className="text-xs text-white/40 mb-0.5">Tópico</p>
                <p className="font-black text-amber-400 text-sm">
                  {topic?.icon} {savedGame!.topicIdx + 1}
                </p>
                <p className="text-[10px] text-white/40 truncate px-1">
                  {topic?.title}
                </p>
              </div>
              <div className="rounded-xl bg-white/10 py-2">
                <p className="text-xs text-white/40 mb-0.5">Pontos</p>
                <p className="font-black text-amber-400">{savedGame!.score}</p>
              </div>
              <div className="rounded-xl bg-white/10 py-2">
                <p className="text-xs text-white/40 mb-0.5">Vidas</p>
                <p className="font-black">
                  {Array.from({ length: 3 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < savedGame!.lives
                          ? "text-base"
                          : "opacity-20 grayscale text-base"
                      }
                    >
                      ❤️
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {sub && (
              <p className="mt-2 text-xs text-white/40 text-center">
                Módulo {savedGame!.subIdx + 1}: {sub.title}
              </p>
            )}
          </div>

          {/* Botão principal: continuar */}
          <button
            onClick={onContinue}
            className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 py-4 text-lg font-black text-white shadow-[0_8px_32px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95"
          >
            ▶ Continuar de onde parei
          </button>

          {/* Botão secundário: novo jogo */}
          <button
            onClick={() => setShowNew(true)}
            className="w-full rounded-full border border-white/15 py-3 text-sm font-bold text-white/45 transition hover:border-white/30 hover:text-white/80"
          >
            Começar novo jogo
          </button>
        </div>
      )}

      {/* ── Novo jogo ── */}
      {showForm && (
        <div className="w-full max-w-sm">
          {hasSave && (
            <button
              onClick={() => setShowNew(false)}
              className="mb-4 flex items-center gap-1 text-xs text-white/35 hover:text-white/60 transition mx-auto"
            >
              ← Voltar ao jogo salvo
            </button>
          )}

          <p className="text-sm text-white/50 mb-3">
            Digite seu nome para entrar no placar
          </p>

          <input
            type="text"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && isValid && onStart(name.trim())
            }
            className="mb-3 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder-white/30 outline-none focus:border-amber-500 focus:bg-white/15 transition"
          />

          <button
            onClick={() => isValid && onStart(name.trim())}
            disabled={!isValid}
            className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 py-4 text-lg font-black text-white shadow-[0_8px_32px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
          >
            ▶ Jogar Agora
          </button>

          {name.length > 0 && !isValid && (
            <p className="mt-2 text-xs text-amber-400/70 text-center">
              Digite pelo menos 3 caracteres
            </p>
          )}
        </div>
      )}
    </div>
  );
}
