"use client";
import { useGame } from "@/hooks/useGame";
import { WelcomeScreen } from "./WelcomeScreen";
import { PhaseIntro } from "./PhaseIntro";
import { GameScreen } from "./GameScreen";
import { PhaseResult } from "./PhaseResult";
import { FinalResult } from "./FinalResult";
import { GameOver } from "./GameOver";

export function GameWrapper() {
  const {
    state,
    phases,
    currentPhase,
    currentScenario,
    globalProgress,
    maxScore,
    perPhase,
    savedGame,
    finalClassification,
    startGame,
    continueGame,
    goToGame,
    selectChoice,
    nextScenario,
    nextPhase,
    restart,
    submitScore,
  } = useGame();

  const totalScenarios = phases.length * perPhase;

  return (
    <>
      <style>{`
        @keyframes confettiFall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
        @keyframes flyUp{0%{opacity:1;transform:translate(-50%,-50%) scale(.8)}50%{opacity:1;transform:translate(-50%,-80%) scale(1.3)}100%{opacity:0;transform:translate(-50%,-130%) scale(.9)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes pop{from{opacity:0;transform:translateX(-50%) scale(.85)}to{opacity:1;transform:translateX(-50%) scale(1)}}
      `}</style>

      {state.screen === "welcome" && (
        <WelcomeScreen
          onStart={startGame}
          onContinue={continueGame}
          savedGame={savedGame}
        />
      )}

      {state.screen === "phase-intro" && currentPhase && (
        <PhaseIntro phase={currentPhase} onStart={goToGame} />
      )}

      {state.screen === "game" && currentPhase && currentScenario && (
        <GameScreen
          state={state}
          phase={currentPhase}
          scenario={currentScenario}
          globalProgress={globalProgress}
          totalScenarios={totalScenarios}
          onSelectChoice={selectChoice}
          onNext={nextScenario}
        />
      )}

      {state.screen === "phase-result" && currentPhase && (
        <PhaseResult
          phase={currentPhase}
          state={state}
          onNext={nextPhase}
          isLast={state.phase === phases.length - 1}
        />
      )}

      {state.screen === "game-over" && (
        <GameOver state={state} maxScore={maxScore} onRestart={restart} />
      )}

      {(state.screen === "final" || state.screen === "leaderboard") && (
        <FinalResult
          state={state}
          phases={phases}
          maxScore={maxScore}
          classification={finalClassification}
          onRestart={restart}
          onSubmitScore={submitScore}
        />
      )}
    </>
  );
}
