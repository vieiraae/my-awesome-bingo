import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen, type GameMode } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { CardDeckScreen } from './components/CardDeckScreen';

function App() {
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);
  
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const handleModeSelect = (mode: GameMode) => {
    setSelectedMode(mode);
    if (mode === 'bingo') {
      startGame();
    }
  };

  const handleReset = () => {
    setSelectedMode(null);
    resetGame();
  };

  // Show start screen if no mode selected
  if (!selectedMode) {
    return <StartScreen onStart={handleModeSelect} />;
  }

  // Card Deck mode
  if (selectedMode === 'cards') {
    return <CardDeckScreen onBack={handleReset} />;
  }

  // Bingo mode
  if (gameState === 'start') {
    return <StartScreen onStart={handleModeSelect} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={handleReset}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
