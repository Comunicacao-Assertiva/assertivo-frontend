"use client";
import { useState } from "react";
import { PHASES_DATA } from "@/data/phases";

interface SavedGame {
  playerName: string;
  topicIdx: number;
  subIdx: number;
  score: number;
  lives: number;
}
interface Props {
  onStart: (name: string) => void;
  onContinue: () => void;
  savedGame: SavedGame | null;
}

export function WelcomeScreen({ onStart, onContinue, savedGame }: Props) {
  const [name, setName] = useState("");
  const [showNew, setShowNew] = useState(!savedGame);
  const isValid = name.trim().length >= 3;
  const N = PHASES_DATA.length;
  const savedTopic = savedGame ? PHASES_DATA[savedGame.topicIdx]?.title : "";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
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

      <div className="mb-6 w-full max-w-sm rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/50 text-left">
        🔥 <span className="font-bold text-white/70">Streak:</span> 3 acertos
        seguidos = próxima vale{" "}
        <span className="text-amber-400 font-bold">150 pts!</span>
        <br />
        ❤️ <span className="font-bold text-white/70">Vidas:</span> perde uma a
        cada resposta errada. Game over sem vidas!
        <br />
        💡 <span className="font-bold text-white/70">Dicas:</span> cada módulo
        começa com uma técnica de comunicação.
      </div>

      {savedGame && !showNew && (
        <div className="w-full max-w-sm mb-4">
          <div className="mb-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">
              Jogo salvo
            </p>
            <p className="font-black text-white text-base">
              {savedGame.playerName}
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm text-white/60 flex-wrap">
              <span>
                📍 Tópico {savedGame.topicIdx + 1} — {savedTopic}
              </span>
              <span>·</span>
              <span>⭐ {savedGame.score} pts</span>
              <span>·</span>
              <span>
                {Array.from({ length: 3 }, (_, i) => (
                  <span
                    key={i}
                    className={i < savedGame.lives ? "" : "opacity-25"}
                  >
                    ❤️
                  </span>
                ))}
              </span>
            </div>
          </div>
          <button
            onClick={onContinue}
            className="w-full mb-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 py-4 text-lg font-black text-white shadow-[0_8px_32px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95"
          >
            ▶ Continuar de onde parei
          </button>
          <button
            onClick={() => setShowNew(true)}
            className="w-full rounded-full border border-white/15 py-3 text-sm font-bold text-white/50 transition hover:border-white/30 hover:text-white"
          >
            Começar novo jogo
          </button>
        </div>
      )}

      {(!savedGame || showNew) && (
        <div className="w-full max-w-sm">
          {showNew && savedGame && (
            <button
              onClick={() => setShowNew(false)}
              className="mb-4 text-xs text-white/40 hover:text-white/70 transition"
            >
              ← Voltar para o jogo salvo
            </button>
          )}
          <input
            type="text"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && isValid && onStart(name.trim())
            }
            className="mb-3 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder-white/30 outline-none focus:border-amber-500 transition"
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
