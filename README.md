# Simple Solitaire Engine

**Software Repository** for HTML5 games development • **Version Control** for card game projects • Open Source Game Engine........

[![NPM Version](https://img.shields.io/npm/v/solitaire-utils.svg)](https://www.npmjs.com/package/solitaire-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitLab Mirror](https://img.shields.io/badge/GitLab-Mirror-orange.svg)](https://gitlab.com/sdye1337/simple-solitaire-engine)

A **Node.js package** providing **card game logic** and **game dev utilities** for building **HTML5 games**, solitaire, and card games. This **software repository** uses **version control** to maintain a reliable open source JavaScript game engine for browser-based HTML5 game development.

## 🎮 About This Software Repository

This **version control** system hosts production-ready code for **HTML5 games** development. The repository provides:

- **Software Repository** best practices for game development
- **Version Control** for tracking game engine updates
- **HTML5 Games** compatible APIs and utilities
- Cross-platform card game logic for web browsers

## ✨ Features

- **Fisher-Yates Shuffle Algorithm**: Efficient and unbiased card shuffling for HTML5 games
- **Card Game Logic**: Ready-to-use deck creation and dealing functions
- **Game Dev Utilities**: Essential tools for HTML5 card game development
- **Version Control**: All changes tracked via Git
- Lightweight Node.js package with zero dependencies
- Perfect for browser-based HTML5 games development
- Works in both Node.js and browser environments

## 📦 Installation

### NPM Package

```bash
npm install solitaire-utils
```

### Alternative Installation

```bash
npm install simple-solitaire-engine
```

Or include directly in your HTML5 games:

```html
<script src="shuffle.js"></script>
```

## 🚀 Usage

### Node.js Package Usage

```javascript
const { shuffleArray, createDeck, dealCards } = require('solitaire-utils');

// Create and shuffle a deck using card game logic
const deck = createDeck();
const shuffledDeck = shuffleArray(deck);

// Deal cards using game dev utilities for HTML5 games
const { dealt, remaining } = dealCards(shuffledDeck, 7);
console.log('Dealt cards:', dealt);
console.log('Remaining deck:', remaining.length);
```

### HTML5 Games Browser Usage

```javascript
// Perfect for HTML5 games - Create a deck of cards
const deck = [
  '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠',
  '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥',
  '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣',
  '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦'
];

// Shuffle the deck for your HTML5 game
const shuffledDeck = shuffleArray(deck);
console.log(shuffledDeck);
```

## 📚 API Reference

### Game Dev Utilities for HTML5 Games

#### `shuffleArray(array)`
Shuffles an array using the Fisher-Yates algorithm. Core card game logic utility for HTML5 games.

**Parameters:**
- `array` (Array): The array to shuffle

**Returns:**
- (Array): The shuffled array (non-mutating)

#### `createDeck()`
Creates a standard 52-card deck for HTML5 games. Returns an array of card objects with rank, suit, and display properties.

**Returns:**
- (Array): Array of 52 card objects

#### `dealCards(deck, count)`
Deals a specified number of cards from a deck. Essential for HTML5 card games.

**Parameters:**
- `deck` (Array): The deck to deal from
- `count` (Number): Number of cards to deal

**Returns:**
- (Object): Object with `dealt` and `remaining` arrays

## 🎯 Use Cases

This **software repository** is perfect for:

- **HTML5 Games**: Solitaire, Poker, Blackjack, and more
- Browser-based card game development
- Mobile-responsive HTML5 card games
- Progressive Web Apps (PWAs) with card game mechanics
- Educational game projects
- Canvas-based HTML5 games
- WebGL card game projects
- Any **version control** project requiring card mechanics

## 🔄 Version Control & Repository Management

This **software repository** follows semantic versioning and maintains:

- Clear commit history via **version control**
- Tagged releases for stable versions
- Contribution guidelines for open source collaboration
- Issue tracking for bug reports and features
- Continuous integration for code quality

## 🌐 Related Projects & Resources

**Play Live HTML5 Games:** [Online Card Games](https://onlinecardgames.io/)

Visit our main site for:
- Live playable HTML5 card games
- Game development tutorials
- More open source game engines
- HTML5 games best practices

## 📄 License

MIT License - Free for personal and commercial use in your **HTML5 games** projects.

## 🤝 Contributing

Contributions are welcome! This **software repository** uses **version control** best practices:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Merge Request

## 📊 Repository Stats

- **Language:** JavaScript
- **Package Manager:** NPM
- **Version Control:** Git
- **Platform:** Cross-platform (Node.js, Browser, HTML5)
- **Dependencies:** Zero
- **License:** MIT

## 🔗 Repository Links

- **GitLab (Mirror):** https://gitlab.com/sdye1337/simple-solitaire-engine
- **GitHub (Primary):** https://github.com/sdye1337/simple-solitaire-engine
- **NPM Package:** https://www.npmjs.com/package/solitaire-utils
- **Website:** https://onlinecardgames.io/

---

**Software Repository** maintained with **Version Control** best practices • Built for **HTML5 Games** development
