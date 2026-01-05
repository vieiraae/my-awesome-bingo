import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full cozy-bg">
      {/* Warm wood-style header */}
      <header className="flex items-center justify-between p-3 bg-gradient-to-r from-espresso via-roast to-espresso shadow-md">
        <button
          onClick={onReset}
          className="text-cream/80 text-sm px-3 py-1.5 rounded-lg active:bg-cream/10 transition-colors"
        >
          ← Menu
        </button>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-cream tracking-wide flex items-center gap-2">
          <span className="text-lg">☕</span> Café Bingo
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-roast/60 text-sm py-3 px-4 italic">
        Tap a square when you find someone who matches it
      </p>

      {/* Bingo indicator - latte art style */}
      {hasBingo && (
        <div className="bg-gradient-to-r from-caramel/20 via-bingo/30 to-caramel/20 text-espresso text-center py-3 font-semibold text-sm border-y border-caramel/30">
          ☕ BINGO! You got a perfect brew! ☕
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
      
      {/* Cozy footer */}
      <div className="text-center py-2 text-roast/30 text-xs">
        ❧ Brewing connections ❧
      </div>
    </div>
  );
}
