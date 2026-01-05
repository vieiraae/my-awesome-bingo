interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 cozy-bg">
      <div className="text-center max-w-sm">
        {/* Coffee cup icon with steam */}
        <div className="relative inline-block mb-4">
          <span className="text-6xl">☕</span>
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-2xl opacity-40 animate-steam">~</span>
        </div>
        
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-espresso mb-2 tracking-tight">
          Café Bingo
        </h1>
        <p className="text-lg text-roast/70 mb-8 italic">Social Connections Over Coffee</p>
        
        {/* Menu board style card */}
        <div className="bg-foam rounded-2xl p-6 shadow-lg border-2 border-latte mb-8 relative overflow-hidden">
          {/* Decorative corner flourish */}
          <div className="absolute top-2 left-2 text-caramel/30 text-xl">❧</div>
          <div className="absolute bottom-2 right-2 text-caramel/30 text-xl rotate-180">❧</div>
          
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-espresso mb-4 text-lg">
            How to Play
          </h2>
          <ul className="text-left text-roast space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cinnamon">☕</span>
              <span>Find people who match the prompts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cinnamon">✦</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cinnamon">★</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-espresso to-roast text-cream font-semibold py-4 px-8 rounded-xl text-lg shadow-lg active:scale-[0.98] active:shadow-md transition-all duration-150 animate-warm-glow"
        >
          Start Game
        </button>
        
        {/* Subtle footer text */}
        <p className="mt-6 text-xs text-roast/40">☕ Brewed with warmth ☕</p>
      </div>
    </div>
  );
}
