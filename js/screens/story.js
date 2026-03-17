import { getStoryById, getAllWords, getSentence } from '../data/stories.js';
import { store } from '../store.js';
import { showWordPopup } from '../components/word-popup.js';

export function renderStory(container, router, storyId) {
  const story = getStoryById(storyId);
  if (!story) {
    container.innerHTML = '<p>Story not found.</p>';
    return;
  }

  // Record word encounters for this level
  const allWords = getAllWords(story);
  store.recordStoryEncounters(story.level, allWords);
  store.markStoryRead(story.id, story.level);

  // Get recurring words for highlighting
  const recurringWords = store.getRecurringWords(story.level);

  const html = `
    <div class="story-reader fade-in">
      <div class="story-title">${story.title}</div>
      ${story.paragraphs.map((para, pIdx) => `
        <p class="story-paragraph" data-para="${pIdx}">
          ${para.words.map((w, wIdx) => {
            const isSaved = store.isWordSaved(w.base, story.id);
            const isRecurring = recurringWords.has(w.base);
            const classes = ['word'];
            if (isRecurring) classes.push('word--recurring');
            if (isSaved) classes.push('word--saved');
            return `<span class="${classes.join(' ')}" data-para="${pIdx}" data-word="${wIdx}">${w.word}</span>`;
          }).join(' ')}
        </p>
      `).join('')}
      <div class="story-footer">
        <p class="story-footer-text" id="saved-count"></p>
        <button class="btn btn-primary" onclick="location.hash='#/review'">Review Flashcards</button>
      </div>
    </div>
  `;

  container.innerHTML = html;
  updateSavedCount(story.id);

  // Word click handlers
  container.querySelectorAll('.word').forEach(span => {
    span.addEventListener('click', () => {
      const paraIdx = parseInt(span.dataset.para);
      const wordIdx = parseInt(span.dataset.word);
      const para = story.paragraphs[paraIdx];
      const wordData = para.words[wordIdx];
      const sentence = getSentence(para, wordIdx);

      showWordPopup({
        word: wordData.word.replace(/[.,!?;:'"]/g, ''),
        base: wordData.base,
        translation: wordData.translation,
        pos: wordData.pos,
        sentence: sentence,
        storyId: story.id,
        onSaved: () => {
          // Update UI to reflect saved state
          span.classList.add('word--saved');
          updateSavedCount(story.id);
        }
      });
    });
  });
}

function updateSavedCount(storyId) {
  const el = document.getElementById('saved-count');
  if (!el) return;
  const cards = store.getFlashcards().filter(f => f.storyId === storyId);
  el.textContent = cards.length > 0
    ? `${cards.length} words saved from this story`
    : 'Tap any word to see its translation';
}
