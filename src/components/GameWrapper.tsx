'use client'

import { useGame } from '@/hooks/useGame'
import { WelcomeScreen } from './WelcomeScreen'
import { PhaseIntro } from './PhaseIntro'
import { GameScreen } from './GameScreen'
import { PhaseResult } from './PhaseResult'
import { FinalResult } from './FinalResult'

export function GameWrapper() {
  const {
    state,
    phases,
    loading,
    error,
    currentPhase,
    currentScenario,
    globalProgress,
    finalClassification,
    startGame,
    selectChoice,
    nextScenario,
    nextPhase,
    restart,
    submitScore,
  } = useGame()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent mx-auto" />
          <p className="text-white/50">Carregando o jogo...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5 text-center">
        <div>
          <p className="mb-2 text-xl font-black text-red-400">Erro ao carregar</p>
          <p className="mb-4 text-sm text-white/50">{error}</p>
          <p className="text-xs text-white/30">Verifique se o servidor FastAPI está rodando em localhost:8000</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Global confetti keyframes */}
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes flyUp {
          0%   { opacity: 1; transform: translate(-50%, -50%) scale(0.8); }
          50%  { opacity: 1; transform: translate(-50%, -80%) scale(1.2); }
          100% { opacity: 0; transform: translate(-50%, -120%) scale(0.9); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop {
          from { opacity: 0; transform: translateX(-50%) scale(0.9); }
          to   { opacity: 1; transform: translateX(-50%) scale(1); }
        }
      `}</style>

      {state.screen === 'welcome' && (
        <WelcomeScreen onStart={startGame} />
      )}

      {state.screen === 'phase-intro' && currentPhase && (
        <PhaseIntro phase={currentPhase} onStart={() => nextScenario()} />
      )}

      {state.screen === 'game' && currentPhase && currentScenario && (
        <GameScreen
          state={state}
          phase={currentPhase}
          scenario={currentScenario}
          globalProgress={globalProgress}
          onSelectChoice={selectChoice}
          onNext={nextScenario}
        />
      )}

      {state.screen === 'phase-result' && currentPhase && (
        <PhaseResult
          phase={currentPhase}
          state={state}
          onNext={nextPhase}
          isLast={state.phase === 4}
        />
      )}

      {state.screen === 'final' && (
        <FinalResult
          state={state}
          phases={phases}
          classification={finalClassification}
          onRestart={restart}
          onSubmitScore={submitScore}
        />
      )}
    </>
  )
}
