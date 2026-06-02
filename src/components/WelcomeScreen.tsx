"use client";
import { PHASES_DATA } from "@/data/phases";

export function WelcomeScreen({ onStart }: { onStart: () => void }) {
  const N = PHASES_DATA.length;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-400 text-4xl animate-pulse">
        ✝
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
        Pratique a comunicação assertiva em situações reais da vida na igreja
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
      <div className="mb-8 max-w-sm rounded-r-xl border-l-[3px] border-amber-500 bg-amber-500/10 px-4 py-3 text-left">
        <p className="mb-1 text-sm italic text-white/75">
          "Antes, seguindo a verdade em amor, cresçamos em tudo naquele que é a
          cabeça, Cristo."
        </p>
        <span className="text-xs font-bold text-amber-500">Efésios 4:15</span>
      </div>
      <button
        onClick={onStart}
        className="rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-12 py-4 text-lg font-black text-white shadow-[0_8px_32px_rgba(196,135,58,0.45)] transition-all hover:-translate-y-1 active:scale-95"
      >
        ▶ Jogar Agora
      </button>
    </div>
  );
}
