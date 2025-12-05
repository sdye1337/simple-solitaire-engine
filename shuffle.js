/**
 * Simple Solitaire Engine - Open Source JavaScript Game Engine
 * Perfect for Browser Game Development
 * 
 * Fisher-Yates (Knuth) Shuffle Algorithm
 * Provides an unbiased shuffle for card games and other applications
 * 
 * @license MIT
 */

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * Core card game logic for game dev utilities
 * @param {Array} array - The array to shuffle
 * @returns {Array} - The shuffled array (non-mutating)
 */
function shuffleArray(array) {
  // Create a copy to avoid mutating the original
  const shuffled = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

/**
 * Creates a standard 52-card deck
 * Useful helper for browser game development
 * @returns {Array} - Array of card objects
 */
function createDeck() {
  const suits = ['♠', '♥', '♣', '♦'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];
  
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        rank: rank,
        suit: suit,
        display: rank + suit
      });
    }
  }
  
  return deck;
}

/**
 * Deals cards from a deck
 * @param {Array} deck - The deck to deal from
 * @param {number} count - Number of cards to deal
 * @returns {Object} - Object with dealt cards and remaining deck
 */
function dealCards(deck, count) {
  const dealt = deck.slice(0, count);
  const remaining = deck.slice(count);
  
  return {
    dealt: dealt,
    remaining: remaining
  };
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    shuffleArray,
    createDeck,
    dealCards
  };
}

// Example usage for browser game development
if (typeof window !== 'undefined') {
  console.log('Simple Solitaire Engine loaded - Open Source JavaScript Game Engine for Browser Game Development');
}