# Simple Solitaire Engine

An **open source** JavaScript game engine for browser game development, providing essential card game utilities and algorithms for building solitaire and other card games in the browser.

## Features

- **Fisher-Yates Shuffle Algorithm**: Efficient and unbiased card shuffling
- Lightweight and dependency-free
- Perfect for browser game development
- Easy integration with any JavaScript project

## Installation

```bash
npm install simple-solitaire-engine
```

Or include directly in your HTML:

```html
<script src="shuffle.js"></script>
```

## Usage

```javascript
// Create a deck of cards
const deck = [
  '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠',
  '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥',
  '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣',
  '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦'
];

// Shuffle the deck
const shuffledDeck = shuffleArray(deck);
console.log(shuffledDeck);
```

## About

This open source JavaScript game engine is designed to simplify browser game development, particularly for card games like solitaire. The engine provides battle-tested algorithms that you can use to build engaging browser-based card games.

Perfect for:
- Solitaire games
- Poker applications
- Educational card game projects
- Any browser game development requiring card mechanics

## Related Projects

Check out [Online Card Games](https://onlinecardgames.io/) for more card game resources and live examples.

## License

MIT License - Free for personal and commercial use

## Contributing

Contributions are welcome! This is an open source project aimed at helping developers build better browser games.# simple-solitaire-engine
