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
    currentTopic,
    currentSub,
    currentItem,
    loadingQ,
    savedGame,
    globalProgress,
    totalItems,
    maxScore,
    finalClassification,
    startGame,
    continueGame,
    goHome,
    goToGame,
    selectChoice,
    nextItem,
    nextSub,
    restart,
    submitScore,
  } = useGame();

  return (
    <>
      <style>{`
        @keyframes confettiFall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
        @keyframes flyUp{0%{opacity:1;transform:translate(-50%,-50%) scale(.8)}50%{opacity:1;transform:translate(-50%,-80%) scale(1.3)}100%{opacity:0;transform:translate(-50%,-130%) scale(.9)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes pop{from{opacity:0;transform:translateX(-50%) scale(.85)}to{opacity:1;transform:translateX(-50%) scale(1)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulse2{0%,100%{opacity:1}50%{opacity:.4}}
      `}</style>

      {state.screen === "welcome" && (
        <WelcomeScreen
          onStart={startGame}
          onContinue={continueGame}
          savedGame={savedGame}
        />
      )}

      {(state.screen === "phase-intro" || state.screen === "game") &&
        loadingQ && (
          <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
            <div
              className="mb-6 text-6xl"
              style={{
                animation: "spin 2s linear infinite",
                display: "inline-block",
              }}
            >
              {currentTopic?.icon ?? "💬"}
            </div>
            <h3 className="text-xl font-black mb-2">{currentTopic?.title}</h3>
            <p className="text-sm text-white/50 mb-6">{currentSub?.title}</p>
            <div
              className="flex items-center gap-3 text-amber-400 font-bold text-sm"
              style={{ animation: "pulse2 1.5s ease-in-out infinite" }}
            >
              <div
                className="h-4 w-4 rounded-full border-2 border-amber-400 border-t-transparent"
                style={{ animation: "spin 0.8s linear infinite" }}
              />
              Gerando questões com IA...
            </div>
          </div>
        )}

      {state.screen === "phase-intro" &&
        !loadingQ &&
        currentTopic &&
        currentSub && (
          <PhaseIntro
            topic={currentTopic}
            sub={currentSub}
            isNewTopic={state.subIdx === 0}
            onStart={goToGame}
          />
        )}

      {state.screen === "game" &&
        !loadingQ &&
        currentTopic &&
        currentSub &&
        currentItem && (
          <GameScreen
            state={state}
            topic={currentTopic}
            sub={currentSub}
            item={currentItem}
            globalProgress={globalProgress}
            totalItems={totalItems}
            onSelectChoice={selectChoice}
            onNextItem={nextItem}
          />
        )}

      {state.screen === "sub-result" && currentTopic && currentSub && (
        <PhaseResult
          topic={currentTopic}
          sub={currentSub}
          state={state}
          subIdx={state.subIdx}
          onNext={nextSub}
        />
      )}

      {state.screen === "game-over" && (
        <GameOver
          state={state}
          maxScore={maxScore}
          onContinue={continueGame}
          onGoHome={goHome}
        />
      )}

      {(state.screen === "final" || state.screen === "leaderboard") && (
        <FinalResult
          state={state}
          maxScore={maxScore}
          classification={finalClassification}
          onRestart={restart}
          onSubmitScore={submitScore}
        />
      )}
    </>
  );
}
