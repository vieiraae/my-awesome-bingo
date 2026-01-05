import type { BingoSquareData } from '../types';
import type { CSSProperties } from 'react';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
  style?: CSSProperties;
}

export function BingoSquare({ square, isWinning, onClick, style }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1.5 text-center rounded-lg transition-all duration-200 select-none min-h-[60px] text-xs leading-tight shadow-sm';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-bingo/40 to-caramel/50 border-2 border-bingo text-espresso shadow-md'
      : 'bg-gradient-to-br from-marked to-latte border-2 border-marked-border text-espresso shadow-md'
    : 'bg-cream border border-latte text-roast active:bg-latte active:scale-[0.97]';

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-bold text-sm bg-gradient-to-br from-espresso to-roast text-cream border-espresso' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={style}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-cinnamon text-xs">☕</span>
      )}
    </button>
  );
}
