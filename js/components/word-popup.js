import { speak } from '../tts.js';
import { store } from '../store.js';

const overlay = () => document.getElementById('word-popup-overlay');
const content = () => document.getElementById('popup-content');
const closeBtn = () => document.getElementById('popup-close');

// Setup close handlers (once)
let initialized = false;
function init() {
  if (initialized) return;
  initialized = true;

  closeBtn().addEventListener('click', hidePopup);
  overlay().addEventListener('click', (e) => {
    if (e.target === overlay()) {
      hidePopup();
    }
  });
}

export function showWordPopup({ word, base, translation, pos, sentence, storyId, onSaved }) {
  init();

  const isSaved = store.isWordSaved(base, storyId);

  // Highlight the word in the sentence
  const highlightedSentence = sentence.replace(
    new RegExp(`\\b${escapeRegex(word)}\\b`, 'gi'),
    `<strong>$&</strong>`
  );

  const posLabels = {
    noun: 'Noun (שם עצם)',
    verb: 'Verb (פועל)',
    adjective: 'Adjective (שם תואר)',
    adverb: 'Adverb (תואר הפועל)',
    preposition: 'Preposition (מילת יחס)',
    conjunction: 'Conjunction (מילת חיבור)',
    pronoun: 'Pronoun (כינוי)',
    article: 'Article (תווית)'
  };

  content().innerHTML = `
    <div class="popup-word">
      <span class="popup-word-text">${word}</span>
      <button class="popup-speak-btn" id="popup-speak" aria-label="Listen">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      </button>
    </div>
    <div class="popup-pos">${posLabels[pos] || pos}</div>
    ${translation ? `<div class="popup-translation">${translation}</div>` : ''}
    <div class="popup-context">${highlightedSentence}</div>
    <div class="popup-actions">
      <button class="btn ${isSaved ? 'btn-secondary' : 'btn-success'} btn-small" id="popup-save">
        ${isSaved ? 'Saved' : '+ Add to Flashcards'}
      </button>
      <button class="btn btn-secondary btn-small" id="popup-slow">Slow 🐢</button>
    </div>
  `;

  // Show overlay
  overlay().classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay().classList.add('visible');
  });

  // Play pronunciation
  speak(word);

  // Speak button
  document.getElementById('popup-speak').addEventListener('click', () => {
    speak(word);
  });

  // Slow speak button
  document.getElementById('popup-slow').addEventListener('click', () => {
    speak(word, true);
  });

  // Save button
  const saveBtn = document.getElementById('popup-save');
  if (!isSaved) {
    saveBtn.addEventListener('click', () => {
      const added = store.addFlashcard({
        word, base, translation, pos,
        contextSentence: sentence,
        storyId
      });
      if (added) {
        saveBtn.textContent = 'Saved';
        saveBtn.classList.remove('btn-success');
        saveBtn.classList.add('btn-secondary');
        if (onSaved) onSaved();
      }
    });
  }
}

function hidePopup() {
  const el = overlay();
  el.classList.remove('visible');
  setTimeout(() => {
    el.classList.add('hidden');
  }, 300);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
