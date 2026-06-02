"use client";
import { useState } from "react";
import { PHASES_DATA } from "@/data/phases";

interface Props {
  onStart: (name: string) => void;
}

const N = PHASES_DATA.length;

export function WelcomeScreen({ onStart }: Props) {
  const [name, setName] = useState("");
  const isValid = name.trim().length >= 3;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-400 text-4xl animate-pulse">
        💬
      </div>

      <span className="mb-3 rounded-full border border-amber-500/30 bg-amber-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
        Jogo Educativo
      </span>

      <h1 className="mb-2 text-5xl font-black leading-tight">
        Assertivo!
        <br />
        <span className="text-amber-400">O Jogo</span>
      </h1>
      <p className="mb-8 max-w-xs text-base text-white/50">
        Pratique a comunicação assertiva em situações reais do dia a dia
      </p>

      <div className="mb-8 grid w-full max-w-sm grid-cols-4 gap-2.5">
        {[
          { n: String(N), l: "Fases" },
          { n: String(N * 3), l: "Cenários" },
          { n: "♥♥♥", l: "Vidas" },
          { n: String(N * 300), l: "Pts máx." },
        ].map(({ n, l }) => (
          <div
            key={l}
            className="rounded-xl border border-white/10 bg-white/5 py-3 text-center"
          >
            <div className="text-xl font-black text-amber-400">{n}</div>
            <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-white/40">
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* Cadastro */}
      <div className="w-full max-w-sm mb-6">
        <p className="text-sm font-bold text-white/60 mb-3">
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
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder-white/30 outline-none focus:border-amber-500 focus:bg-white/15 transition mb-4"
        />
        <button
          onClick={() => isValid && onStart(name.trim())}
          disabled={!isValid}
          className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-12 py-4 text-lg font-black text-white shadow-[0_8px_32px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(196,135,58,0.6)] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          ▶ Jogar Agora
        </button>
        {name.length > 0 && !isValid && (
          <p className="mt-2 text-xs text-amber-400/70">
            Digite pelo menos 3 caracteres
          </p>
        )}
      </div>
    </div>
  );
}
