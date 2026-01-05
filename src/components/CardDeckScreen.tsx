import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
  onBack: () => void;
}

export function CardDeckScreen({ onBack }: CardDeckScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Shuffle and draw a random question
  const drawCard = useCallback(() => {
    if (isAnimating) return;
    
    if (isFlipped) {
      // If card is showing, flip back and then draw new
      setIsAnimating(true);
      setIsFlipped(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
        setIsFlipped(true);
        setIsAnimating(false);
      }, 400);
    } else {
      // First draw - just flip
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
      setIsFlipped(true);
    }
  }, [isFlipped, isAnimating]);

  return (
    <div className="min-h-dvh cozy-bg flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-roast/70 hover:text-espresso transition-colors flex items-center gap-2"
        >
          <span>←</span>
          <span className="text-sm">Back</span>
        </button>
        <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold text-espresso">
          Card Shuffle
        </h1>
        <div className="w-16" /> {/* Spacer for centering */}
      </header>

      {/* Main Card Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Card Stack Visual */}
        <div className="relative mb-8">
          {/* Background cards for deck effect */}
          <div className="absolute top-2 left-1 w-72 h-96 bg-gradient-to-br from-roast/20 to-espresso/30 rounded-2xl rotate-[-3deg]" />
          <div className="absolute top-1 left-0.5 w-72 h-96 bg-gradient-to-br from-roast/30 to-espresso/40 rounded-2xl rotate-[-1deg]" />
          
          {/* Active Card with 3D Flip */}
          <div
            className="relative w-72 h-96 cursor-pointer [perspective:1000px]"
            onClick={drawCard}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* Card Back */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                <div className="w-full h-full bg-gradient-to-br from-espresso via-roast to-espresso rounded-2xl shadow-xl border-4 border-caramel/30 flex flex-col items-center justify-center p-6">
                  {/* Coffee bean pattern */}
                  <div className="absolute inset-4 border-2 border-caramel/20 rounded-xl" />
                  <div className="absolute inset-8 border border-caramel/10 rounded-lg" />
                  
                  {/* Center logo */}
                  <span className="text-6xl mb-4">☕</span>
                  <span className="font-[family-name:var(--font-display)] text-cream text-2xl font-semibold tracking-wide">
                    Café
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-cream/60 text-sm">
                    tap to draw
                  </span>
                </div>
              </div>

              {/* Card Front (Question) */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="w-full h-full bg-gradient-to-br from-cream via-foam to-latte rounded-2xl shadow-xl border-4 border-caramel/40 flex flex-col items-center justify-center p-6">
                  {/* Decorative corners */}
                  <div className="absolute top-4 left-4 text-caramel/40 text-xl">❧</div>
                  <div className="absolute top-4 right-4 text-caramel/40 text-xl rotate-180">❧</div>
                  <div className="absolute bottom-4 left-4 text-caramel/40 text-xl rotate-180">❧</div>
                  <div className="absolute bottom-4 right-4 text-caramel/40 text-xl">❧</div>
                  
                  {/* Question content */}
                  <div className="text-center">
                    <span className="text-cinnamon text-4xl block mb-6">☕</span>
                    <p className="font-[family-name:var(--font-display)] text-espresso text-xl leading-relaxed">
                      Find someone who...
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-roast text-2xl font-semibold mt-4 leading-snug">
                      {currentQuestion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-roast/60 text-center text-sm max-w-xs">
          {isFlipped 
            ? "Tap the card to draw another question" 
            : "Tap the card to reveal a conversation starter"}
        </p>
      </main>

      {/* Footer with card count */}
      <footer className="p-4 text-center">
        <p className="text-roast/40 text-sm">
          {questions.length} questions in the deck
        </p>
      </footer>
    </div>
  );
}
