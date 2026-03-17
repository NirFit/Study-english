// localStorage persistence layer
const STORAGE_KEY = 'studyEnglish_userData';

function getDefaultData() {
  return {
    currentLevel: 1,
    storiesRead: {},
    flashcards: [],
    wordEncounters: {}
  };
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return { ...getDefaultData(), ...JSON.parse(raw) };
    }
  } catch (e) {
    console.warn('Failed to load data from localStorage:', e);
  }
  return getDefaultData();
}

function save(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to save data to localStorage:', e);
  }
}

export const store = {
  load,
  save,

  addFlashcard(card) {
    const data = load();
    // Check if already exists
    const exists = data.flashcards.some(f =>
      f.base === card.base && f.translation === card.translation && f.storyId === card.storyId
    );
    if (exists) return false;

    data.flashcards.push({
      id: `${card.base}_${card.storyId}_${Date.now()}`,
      word: card.word,
      base: card.base,
      translation: card.translation,
      pos: card.pos,
      contextSentence: card.contextSentence,
      storyId: card.storyId,
      addedAt: new Date().toISOString().split('T')[0],
      nextReview: new Date().toISOString().split('T')[0],
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0
    });
    save(data);
    return true;
  },

  removeFlashcard(id) {
    const data = load();
    data.flashcards = data.flashcards.filter(f => f.id !== id);
    save(data);
  },

  getFlashcards() {
    return load().flashcards;
  },

  getFlashcardsDueForReview() {
    const data = load();
    const today = new Date().toISOString().split('T')[0];
    return data.flashcards.filter(f => f.nextReview <= today);
  },

  isWordSaved(base, storyId) {
    const data = load();
    return data.flashcards.some(f => f.base === base && f.storyId === storyId);
  },

  gradeFlashcard(id, quality) {
    // SM-2 algorithm
    // quality: 0=Again, 1=Hard, 2=Good, 3=Easy
    const qMap = [1, 2, 4, 5];
    const q = qMap[quality];

    const data = load();
    const card = data.flashcards.find(f => f.id === id);
    if (!card) return;

    if (q < 3) {
      card.repetitions = 0;
      card.interval = 1;
    } else {
      card.repetitions += 1;
      if (card.repetitions === 1) card.interval = 1;
      else if (card.repetitions === 2) card.interval = 6;
      else card.interval = Math.round(card.interval * card.easeFactor);
    }

    card.easeFactor = Math.max(1.3,
      card.easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    );

    const next = new Date();
    next.setDate(next.getDate() + card.interval);
    card.nextReview = next.toISOString().split('T')[0];

    save(data);
  },

  recordWordEncounter(level, base) {
    const data = load();
    if (!data.wordEncounters[level]) {
      data.wordEncounters[level] = {};
    }
    data.wordEncounters[level][base] = (data.wordEncounters[level][base] || 0) + 1;
    save(data);
  },

  recordStoryEncounters(level, words) {
    const data = load();
    if (!data.wordEncounters[level]) {
      data.wordEncounters[level] = {};
    }
    const seenBases = new Set();
    for (const w of words) {
      if (!seenBases.has(w.base)) {
        seenBases.add(w.base);
        data.wordEncounters[level][w.base] = (data.wordEncounters[level][w.base] || 0) + 1;
      }
    }
    save(data);
  },

  getRecurringWords(level) {
    const data = load();
    const encounters = data.wordEncounters[level] || {};
    const recurring = new Set();
    for (const [base, count] of Object.entries(encounters)) {
      if (count >= 2) recurring.add(base);
    }
    return recurring;
  },

  markStoryRead(storyId, level) {
    const data = load();
    data.storiesRead[storyId] = {
      completedAt: new Date().toISOString().split('T')[0],
      level
    };
    save(data);
  },

  isStoryRead(storyId) {
    return !!load().storiesRead[storyId];
  }
};
