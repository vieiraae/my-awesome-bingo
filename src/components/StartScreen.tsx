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
    <div className="min-h-full overflow-y-auto cozy-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Coffee cup logo with steam animation */}
          <div className="relative inline-block mb-6">
            <span className="text-7xl animate-float">☕</span>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-2xl opacity-40 animate-steam">~</span>
          </div>
          
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-espresso mb-4 tracking-tight">
            Café Bingo
          </h1>
          
          <p className="text-xl md:text-2xl text-roast/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Break the ice. Make connections. One square at a time.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 text-caramel/60 text-lg mb-8">
            <span>❧</span>
            <div className="w-20 h-px bg-caramel/30"></div>
            <span>❧</span>
          </div>
        </div>

        {/* Illustrated Step Cards */}
        <div className="mb-16 animate-fade-in-delay-1">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-espresso text-center mb-8">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Mingle */}
            <div className="bg-gradient-to-br from-foam to-cream rounded-xl shadow-md border-2 border-latte p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">👋</div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-espresso mb-2">
                Mingle
              </h3>
              <p className="text-roast/70">
                Walk around and meet new people
              </p>
            </div>
            
            {/* Card 2 - Match */}
            <div className="bg-gradient-to-br from-foam to-cream rounded-xl shadow-md border-2 border-latte p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-espresso mb-2">
                Match
              </h3>
              <p className="text-roast/70">
                Find someone who matches a square's prompt
              </p>
            </div>
            
            {/* Card 3 - Mark */}
            <div className="bg-gradient-to-br from-foam to-cream rounded-xl shadow-md border-2 border-latte p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-espresso mb-2">
                Mark
              </h3>
              <p className="text-roast/70">
                Tap to mark it and aim for 5 in a row!
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Quote Section */}
        <div className="mb-16 animate-fade-in-delay-2">
          <div className="bg-latte/40 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl text-caramel/20 font-[family-name:var(--font-display)]">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-caramel/20 font-[family-name:var(--font-display)]">"</div>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl italic text-espresso/90 relative z-10">
              The best conversations start with a simple question
            </p>
          </div>
        </div>

        {/* Sample Prompts Showcase */}
        <div className="mb-16 animate-fade-in-delay-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-espresso text-center mb-8">
            Discover New Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="bg-foam rounded-lg p-4 border border-latte shadow-sm">
              <span className="text-cinnamon mr-2">☕</span>
              <span className="text-roast">Has lived in another country</span>
            </div>
            <div className="bg-foam rounded-lg p-4 border border-latte shadow-sm">
              <span className="text-cinnamon mr-2">☕</span>
              <span className="text-roast">Plays an instrument</span>
            </div>
            <div className="bg-foam rounded-lg p-4 border border-latte shadow-sm">
              <span className="text-cinnamon mr-2">☕</span>
              <span className="text-roast">Loves cooking</span>
            </div>
            <div className="bg-foam rounded-lg p-4 border border-latte shadow-sm">
              <span className="text-cinnamon mr-2">☕</span>
              <span className="text-roast">Speaks more than 2 languages</span>
            </div>
            <div className="bg-foam rounded-lg p-4 border border-latte shadow-sm">
              <span className="text-cinnamon mr-2">☕</span>
              <span className="text-roast">Has a hidden talent</span>
            </div>
            <div className="bg-foam rounded-lg p-4 border border-latte shadow-sm">
              <span className="text-cinnamon mr-2">☕</span>
              <span className="text-roast">Has been skydiving</span>
            </div>
          </div>
        </div>

        {/* CTA button with staggered animation and pulse */}
        <div className="text-center animate-fade-in-delay-4">
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-espresso to-roast text-cream font-semibold py-4 px-8 rounded-xl text-lg shadow-lg active:scale-[0.98] active:shadow-md transition-all duration-150 animate-warm-glow animate-pulse-scale animate-fade-slide-up opacity-0"
          style={{ animationDelay: '0.6s', willChange: 'transform, opacity' }}
        >
          Start Game
        </button>
          
          <p className="text-sm text-roast/60 mb-8">
            No account needed • Takes 5 minutes • Perfect for groups
          </p>
          
          {/* Footer */}
          <p className="text-sm text-roast/50 flex items-center justify-center gap-2">
            <span>☕</span>
            <span>Brewed with warmth for meaningful connections</span>
            <span>☕</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}
