import { useState } from 'react';
import { questions, FREE_SPACE } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

interface PreviewSquare {
  id: number;
  text: string;
  isMarked: boolean;
  isFreeSpace: boolean;
}

// Generate a 3x3 preview board with random questions
function generatePreviewBoard(): PreviewSquare[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 8); // 8 questions + 1 free space
  
  const board: PreviewSquare[] = [];
  let questionIndex = 0;
  
  for (let i = 0; i < 9; i++) {
    if (i === 4) { // Center square (index 4 in 3x3 grid)
      board.push({
        id: i,
        text: FREE_SPACE,
        isMarked: true,
        isFreeSpace: true,
      });
    } else {
      board.push({
        id: i,
        text: selected[questionIndex],
        isMarked: false,
        isFreeSpace: false,
      });
      questionIndex++;
    }
  }
  
  return board;
}

// Check for 3-in-a-row in the preview board
function checkPreviewBingo(board: PreviewSquare[]): number[] | null {
  const lines = [
    [0, 1, 2], // Row 0
    [3, 4, 5], // Row 1
    [6, 7, 8], // Row 2
    [0, 3, 6], // Col 0
    [1, 4, 7], // Col 1
    [2, 5, 8], // Col 2
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Anti-diagonal
  ];
  
  for (const line of lines) {
    if (line.every(idx => board[idx].isMarked)) {
      return line;
    }
  }
  
  return null;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [previewBoard, setPreviewBoard] = useState<PreviewSquare[]>(() => generatePreviewBoard());
  const [celebrationStartTime, setCelebrationStartTime] = useState<number | null>(null);

  // Calculate winning line from current board state
  const winningLine = checkPreviewBingo(previewBoard);
  const showCelebration = celebrationStartTime !== null;

  const handlePreviewSquareClick = (squareId: number) => {
    setPreviewBoard(prev => {
      const newBoard = prev.map(square => 
        square.id === squareId && !square.isFreeSpace
          ? { ...square, isMarked: !square.isMarked }
          : square
      );
      
      // Check if this move creates a bingo
      const line = checkPreviewBingo(newBoard);
      if (line && !celebrationStartTime) {
        setCelebrationStartTime(Date.now());
        
        // Reset after 2 seconds
        setTimeout(() => {
          setPreviewBoard(generatePreviewBoard());
          setCelebrationStartTime(null);
        }, 2000);
      }
      
      return newBoard;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 cozy-bg">
      <div className="text-center max-w-sm w-full">
        {/* Smaller Coffee cup icon with steam */}
        <div className="relative inline-block mb-3">
          <span className="text-4xl">☕</span>
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xl opacity-40 animate-steam">~</span>
        </div>
        
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-espresso mb-1 tracking-tight">
          Café Bingo
        </h1>
        <p className="text-base text-roast/70 mb-6 italic">Social Connections Over Coffee</p>
        
        {/* Brief instruction text */}
        <p className="text-sm text-roast mb-3 px-4">
          Find people matching each prompt. Get 5 in a row!
        </p>

        {/* Interactive Preview Label */}
        <p className="text-sm italic text-cinnamon mb-2 font-semibold">
          Try it! Tap the squares
        </p>

        {/* Mini 3x3 Preview Board */}
        <div className="bg-foam/80 p-2 rounded-2xl shadow-lg border border-latte mb-4 relative">
          {/* Celebration message */}
          {showCelebration && (
            <div className="absolute inset-0 flex items-center justify-center bg-foam/95 rounded-2xl z-10 animate-float">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-bingo">
                That's Bingo! 🎉
              </span>
            </div>
          )}
          
          <div className="grid grid-cols-3 gap-1.5 w-full max-w-[280px] mx-auto">
            {previewBoard.map((square, index) => {
              const isWinning = winningLine?.includes(square.id) ?? false;
              const baseClasses = 
                'relative flex items-center justify-center p-2 text-center rounded-lg transition-all duration-200 select-none min-h-[44px] min-w-[44px] text-xs leading-tight shadow-sm';
              
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
                  key={square.id}
                  onClick={() => handlePreviewSquareClick(square.id)}
                  disabled={square.isFreeSpace}
                  className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
                  aria-pressed={square.isMarked}
                  aria-label={square.isFreeSpace ? 'Free space' : square.text}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="wrap-break-word hyphens-auto leading-tight">
                    {square.text}
                  </span>
                  {square.isMarked && !square.isFreeSpace && (
                    <span className="absolute top-0.5 right-0.5 text-cinnamon text-xs">☕</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-espresso to-roast text-cream font-semibold py-4 px-8 rounded-xl text-lg shadow-lg active:scale-[0.98] active:shadow-md transition-all duration-150 animate-warm-glow"
        >
          Start Your Game
        </button>
        
        {/* Subtle footer text */}
        <p className="mt-4 text-xs text-roast/40">☕ Brewed with warmth ☕</p>
      </div>
    </div>
  );
}
