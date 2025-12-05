# Simple Solitaire Engine

[![NPM Version](https://img.shields.io/npm/v/solitaire-utils.svg)](https://www.npmjs.com/package/solitaire-utils)
[![GitLab Mirror](https://img.shields.io/badge/GitLab-Mirror-orange.svg)](https://gitlab.com/sdye1337/simple-solitaire-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A **Node.js package** providing **card game logic** and **game dev utilities** for building solitaire and card games. This **open source** JavaScript game engine offers essential algorithms for browser game development.

**Also available on GitLab:** [GitLab Mirror](https://gitlab.com/sdye1337/simple-solitaire-engine)

## Features

- **Fisher-Yates Shuffle Algorithm**: Efficient and unbiased card shuffling
- **Card Game Logic**: Ready-to-use deck creation and dealing functions
- **Game Dev Utilities**: Essential tools for card game development
- Lightweight Node.js package with zero dependencies
- Perfect for browser game development
- Works in both Node.js and browser environments

## Installation

### NPM Package

```bash
npm install solitaire-utils
```

### Alternative Installation

```bash
npm install simple-solitaire-engine
```

Or include directly in your HTML:

```html
<script src="shuffle.js"></script>
```

## Usage

### Node.js Package Usage

```javascript
const { shuffleArray, createDeck, dealCards } = require('solitaire-utils');

// Create and shuffle a deck using card game logic
const deck = createDeck();
const shuffledDeck = shuffleArray(deck);

// Deal cards using game dev utilities
const { dealt, remaining } = dealCards(shuffledDeck, 7);
console.log('Dealt cards:', dealt);
console.log('Remaining deck:', remaining.length);
```

### Browser Usage

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

## API Reference

### Game Dev Utilities

#### `shuffleArray(array)`
Shuffles an array using the Fisher-Yates algorithm. Core card game logic utility.

#### `createDeck()`
Creates a standard 52-card deck. Returns an array of card objects with rank, suit, and display properties.

#### `dealCards(deck, count)`
Deals a specified number of cards from a deck. Returns an object with `dealt` and `remaining` arrays.

## About

This Node.js package delivers essential **card game logic** and **game dev utilities** for developers building card games. The package provides battle-tested algorithms and helper functions that simplify game development.

Perfect for:
- Solitaire games and variants
- Poker applications
- Blackjack games
- Educational card game projects
- Any game development requiring card mechanics
- Browser-based and Node.js card games

## Related Projects

Visit [Online Card Games](https://onlinecardgames.io/) for live examples and more card game resources.

## License

MIT License - Free for personal and commercial use

## Contributing

Contributions are welcome! This is an open source Node.js package aimed at helping developers build better card games with reliable game dev utilities.
