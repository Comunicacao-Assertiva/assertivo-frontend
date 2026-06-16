"use client";
import { useEffect, useState } from "react";
import type { GameState } from "@/types/game";
import { PHASES_DATA } from "@/data/phases";
import { calcCurrentLives, msToNextLife } from "@/hooks/useGame";

const RECHARGE_MS = 30 * 60 * 1000;
const MAX_LIVES = 3;

interface Props {
  state: GameState;
  maxScore: number;
  onRestart: () => void;
  onContinue: () => void;
}

function formatTime(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export function GameOver({ state, onRestart, onContinue }: Props) {
  const topic = PHASES_DATA[state.topicIdx];
  const sub = topic?.subPhases[state.subIdx];

  // Constrói o savedData a partir do state para calcular vidas
  const savedLike = {
    ...state,
    savedAt: new Date().toISOString(),
    livesDepletedAt: state.livesDepletedAt,
    lives: 0,
  };

  const [currentLives, setCurrentLives] = useState(() =>
    calcCurrentLives(savedLike as any),
  );
  const [msNext, setMsNext] = useState(() => msToNextLife(savedLike as any));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLives(calcCurrentLives(savedLike as any));
      setMsNext(msToNextLife(savedLike as any));
    }, 1000);
    return () => clearInterval(interval);
  }, [state.livesDepletedAt]);

  const canContinue = currentLives > 0;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <div className="mb-4 text-7xl animate-bounce">💔</div>
      <h2 className="text-3xl font-black mb-2">Sem Vidas!</h2>
      <p className="text-white/50 mb-1 text-sm">Você ficou sem vidas</p>
      <p className="text-white/50 mb-6 text-sm">
        {topic?.icon} {topic?.title} · Módulo {state.subIdx + 1}
        {sub ? ` — ${sub.title}` : ""}
      </p>

      {/* Score */}
      <div className="mb-6 w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-4xl font-black text-amber-400 mb-1">{state.score}</p>
        <p className="text-sm text-white/40 mb-4">pontos acumulados</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { n: state.correct, l: "✅", s: "Certas" },
            { n: state.partial, l: "⚠️", s: "Parciais" },
            { n: state.wrong, l: "❌", s: "Erradas" },
          ].map(({ n, l, s }) => (
            <div key={s} className="rounded-xl bg-white/5 py-2.5 text-center">
              <p className="text-base">{l}</p>
              <p className="text-lg font-black text-amber-400">{n}</p>
              <p className="text-[10px] text-white/35 font-bold uppercase">
                {s}
              </p>
            </div>
          ))}
        </div>

        {/* Vidas recarregando */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider">
            Vidas
          </p>
          <div className="flex justify-center gap-2 mb-2">
            {Array.from({ length: MAX_LIVES }, (_, i) => (
              <span
                key={i}
                className={`text-2xl transition-all ${i < currentLives ? "" : "opacity-20 grayscale"}`}
              >
                ❤️
              </span>
            ))}
          </div>

          {currentLives === 0 && (
            <div className="text-center">
              <p className="text-xs text-white/40 mb-1">Próxima vida em</p>
              <p className="text-2xl font-black text-amber-400">
                {formatTime(msNext)}
              </p>
            </div>
          )}

          {currentLives > 0 && currentLives < MAX_LIVES && (
            <div className="text-center">
              <p className="text-xs text-green-400 font-bold mb-1">
                {currentLives} vida{currentLives > 1 ? "s" : ""} recarregada
                {currentLives > 1 ? "s" : ""}!
              </p>
              {currentLives < MAX_LIVES && (
                <p className="text-xs text-white/30">
                  Próxima em {formatTime(msNext)}
                </p>
              )}
            </div>
          )}

          {currentLives === MAX_LIVES && (
            <p className="text-xs text-green-400 font-bold">
              Todas as vidas recarregadas!
            </p>
          )}
        </div>
      </div>

      {/* Botões */}
      <div className="w-full max-w-xs space-y-3">
        {canContinue ? (
          <button
            onClick={onContinue}
            className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-base font-black text-white shadow-[0_8px_28px_rgba(27,94,59,0.45)] transition-all hover:-translate-y-1 active:scale-95"
          >
            ▶ Continuar de onde parei ({currentLives} ❤️)
          </button>
        ) : (
          <div className="w-full rounded-full border border-white/15 py-4 text-base font-black text-white/30 text-center">
            Aguardando vidas recarregarem...
          </div>
        )}

        <button
          onClick={onRestart}
          className="w-full rounded-full border border-white/20 py-3.5 text-base font-black text-white/60 transition-all hover:border-white/40 hover:text-white active:scale-95"
        >
          🔄 Começar do zero
        </button>
      </div>
    </div>
  );
}
