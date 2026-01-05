interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-espresso/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-b from-foam to-cream rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl border-2 border-latte animate-[bounce_0.6s_ease-out]">
        {/* Decorative steam lines */}
        <div className="relative inline-block mb-2">
          <div className="text-6xl animate-float">☕</div>
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl text-roast/20 animate-steam">~</span>
          <span className="absolute -top-3 left-1/3 text-2xl text-roast/15 animate-steam" style={{ animationDelay: '0.3s' }}>~</span>
          <span className="absolute -top-3 right-1/3 text-2xl text-roast/15 animate-steam" style={{ animationDelay: '0.6s' }}>~</span>
        </div>
        
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-espresso mb-2">
          BINGO!
        </h2>
        <p className="text-roast/70 mb-6 italic">A perfect brew! ☕</p>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mb-6 text-caramel/40">
          <span>❧</span>
          <span className="w-16 h-px bg-caramel/30"></span>
          <span className="rotate-180">❧</span>
        </div>
        
        <button
          onClick={onDismiss}
          className="w-full bg-gradient-to-r from-espresso to-roast text-cream font-semibold py-3 px-6 rounded-xl shadow-lg active:scale-[0.98] active:shadow-md transition-all duration-150"
        >
          Keep Brewing
        </button>
      </div>
    </div>
  );
}
