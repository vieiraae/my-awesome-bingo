# Design Spec: Card Deck Shuffle Mode

## Overview
A new game mode where players tap to draw random cards with icebreaker questions from a shuffled deck.

## UX Flow
1. **Start Screen** → User chooses between "Bingo Board" or "Card Deck"
2. **Card Deck Screen** → Shows a stylized card back
3. **Tap/Click** → Card flips to reveal a random question
4. **Continue** → Tap again to shuffle and draw next card

## Visual Design

### Card Aesthetic (Cozy Coffee Shop Theme)
- **Card back**: Espresso/roast gradient with subtle coffee bean pattern
- **Card front**: Cream/foam background with question text
- **Border**: Rounded corners with caramel accent trim
- **Size**: Large, prominent card (~300-350px wide) centered on screen

### Animations
- **Flip**: 3D card flip using CSS `rotateY` transform
- **Draw**: Subtle lift/float animation when new card appears
- **Deck**: Stacked cards behind to suggest more questions

### States
| State | Visual |
|-------|--------|
| Ready | Card back visible, inviting tap gesture |
| Flipping | 3D rotation animation (0.4s) |
| Revealed | Question text visible, coffee cup icon |
| Shuffling | Brief shake/shuffle animation |

## Component Structure
```
CardDeckScreen
├── DeckStack (visual background cards)
├── ActiveCard (flippable card)
│   ├── CardBack
│   └── CardFront (question + styling)
└── Controls (Draw / Back buttons)
```

## Design Decisions

### 2026-01-05
- Mode selection will be added to existing StartScreen as two distinct CTA paths
- Card deck mode shares questions data from `questions.ts`
- No persistence needed for card mode (stateless shuffle)
