import { GameWrapper } from '@/components/GameWrapper'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Stars decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-amber-500/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: 'twinkle',
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 1; }
        }
      `}</style>

      <GameWrapper />
    </main>
  )
}
