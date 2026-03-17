import { store } from '../store.js';
import { speak } from '../tts.js';

export function renderWordList(container) {
  const cards = store.getFlashcards();

  if (cards.length === 0) {
    container.innerHTML = `
      <div class="wordlist-screen fade-in">
        <div class="wordlist-empty">
          <p>No saved words yet.</p>
          <p>Read stories and tap words to save them here.</p>
          <br>
          <button class="btn btn-primary" onclick="location.hash='#/'">Read Stories</button>
        </div>
      </div>
    `;
    return;
  }

  // Sort by most recently added
  const sorted = [...cards].sort((a, b) => (b.addedAt || '').localeCompare(a.addedAt || ''));

  container.innerHTML = `
    <div class="wordlist-screen fade-in">
      <div class="wordlist-header">
        <h2>My Words</h2>
        <span class="wordlist-count">${cards.length} words</span>
      </div>
      ${sorted.map(card => `
        <div class="word-card" data-id="${card.id}">
          <div class="word-card-left">
            <button class="word-card-speak" data-word="${card.word}" aria-label="Listen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </button>
            <div class="word-card-info">
              <div class="word-card-english">${card.word} <small style="color: var(--text-muted)">(${card.base})</small></div>
              <div class="word-card-hebrew">${card.translation}</div>
            </div>
          </div>
          <button class="word-card-delete" data-id="${card.id}" aria-label="Delete">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      `).join('')}
    </div>
  `;

  // Speak buttons
  container.querySelectorAll('.word-card-speak').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(btn.dataset.word);
    });
  });

  // Delete buttons
  container.querySelectorAll('.word-card-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      store.removeFlashcard(btn.dataset.id);
      renderWordList(container); // Re-render
    });
  });
}
