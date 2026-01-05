import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  // Select 4 sample prompts for floating effect
  const samplePrompts = [
    questions[2], // "has a pet"
    questions[5], // "speaks more than 2 languages"
    questions[12], // "loves cooking"
    questions[18], // "has a hidden talent"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 cozy-bg relative overflow-hidden">
      {/* Floating sample prompts */}
      <div className="absolute top-8 left-4 text-roast/50 text-xs rotate-[-3deg] animate-float max-w-[120px]" style={{ animationDelay: '0s', willChange: 'transform' }}>
        {samplePrompts[0]}
      </div>
      <div className="absolute top-24 right-6 text-roast/50 text-xs rotate-[2deg] animate-float max-w-[120px]" style={{ animationDelay: '1s', willChange: 'transform' }}>
        {samplePrompts[1]}
      </div>
      <div className="absolute bottom-32 left-8 text-roast/50 text-xs rotate-[3deg] animate-float max-w-[120px]" style={{ animationDelay: '0.5s', willChange: 'transform' }}>
        {samplePrompts[2]}
      </div>
      <div className="absolute bottom-48 right-4 text-roast/50 text-xs rotate-[-2deg] animate-float max-w-[120px]" style={{ animationDelay: '1.5s', willChange: 'transform' }}>
        {samplePrompts[3]}
      </div>

      <div className="text-center max-w-sm relative z-10">
        {/* Enhanced coffee cup logo with 3 steam elements */}
        <div className="relative inline-block mb-6 animate-fade-slide-up opacity-0" style={{ animationDelay: '0s', willChange: 'transform, opacity' }}>
          <span className="text-7xl md:text-8xl">☕</span>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl text-roast/20 animate-steam">~</span>
          <span className="absolute -top-5 left-1/3 text-2xl text-roast/15 animate-steam" style={{ animationDelay: '0.3s' }}>~</span>
          <span className="absolute -top-5 right-1/3 text-2xl text-roast/15 animate-steam" style={{ animationDelay: '0.6s' }}>~</span>
        </div>
        
        {/* Title with staggered animation */}
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-espresso mb-3 tracking-tight animate-fade-slide-up opacity-0" style={{ animationDelay: '0.15s', willChange: 'transform, opacity' }}>
          Café Bingo
        </h1>
        
        {/* Subtitle with fleurons and staggered animation */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-slide-up opacity-0" style={{ animationDelay: '0.3s', willChange: 'transform, opacity' }}>
          <span className="text-caramel/60 text-sm">❧</span>
          <p className="text-lg text-roast/70 italic">Social Connections Over Coffee</p>
          <span className="text-caramel/60 text-sm rotate-180">❧</span>
        </div>
        
        {/* Menu board style card with staggered animation */}
        <div className="bg-foam rounded-2xl p-6 shadow-lg border-2 border-latte mb-8 relative overflow-hidden animate-fade-slide-up opacity-0" style={{ animationDelay: '0.45s', willChange: 'transform, opacity' }}>
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

        {/* CTA button with staggered animation and pulse */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-espresso to-roast text-cream font-semibold py-4 px-8 rounded-xl text-lg shadow-lg active:scale-[0.98] active:shadow-md transition-all duration-150 animate-warm-glow animate-pulse-scale animate-fade-slide-up opacity-0"
          style={{ animationDelay: '0.6s', willChange: 'transform, opacity' }}
        >
          Start Game
        </button>
        
        {/* Subtle footer text */}
        <p className="mt-6 text-xs text-roast/40">☕ Brewed with warmth ☕</p>
      </div>
    </div>
  );
}
