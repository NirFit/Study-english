import { store } from '../store.js';
import { speak } from '../tts.js';

export function renderFlashcards(container) {
  const dueCards = store.getFlashcardsDueForReview();

  if (dueCards.length === 0) {
    renderEmpty(container);
    return;
  }

  // Shuffle cards
  const shuffled = [...dueCards].sort(() => Math.random() - 0.5);
  let currentIndex = 0;
  let answerShown = false;

  function renderCard() {
    if (currentIndex >= shuffled.length) {
      renderComplete(container, shuffled.length);
      return;
    }

    const card = shuffled[currentIndex];
    const progress = ((currentIndex) / shuffled.length) * 100;

    container.innerHTML = `
      <div class="review-screen fade-in">
        <div class="review-header">
          <div class="review-count">Card ${currentIndex + 1} of ${shuffled.length}</div>
          <div class="review-progress">
            <div class="review-progress-bar" style="width: ${progress}%"></div>
          </div>
        </div>
        <div class="flashcard">
          <div class="flashcard-word">${card.word}</div>
          <button class="flashcard-speak" id="speak-btn" aria-label="Listen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
          <div class="flashcard-context">"${highlightWord(card.contextSentence, card.word)}"</div>
          ${answerShown ? `
            <div class="flashcard-answer">
              <div class="flashcard-translation">${card.translation}</div>
              <div class="flashcard-base">${card.pos} — base: "${card.base}"</div>
            </div>
          ` : ''}
        </div>
        ${!answerShown ? `
          <button class="btn btn-primary show-answer-btn" id="show-answer">Show Answer</button>
        ` : `
          <div class="grade-buttons">
            <button class="grade-btn grade-btn--again" data-grade="0">Again</button>
            <button class="grade-btn grade-btn--hard" data-grade="1">Hard</button>
            <button class="grade-btn grade-btn--good" data-grade="2">Good</button>
            <button class="grade-btn grade-btn--easy" data-grade="3">Easy</button>
          </div>
        `}
      </div>
    `;

    // Auto-play TTS
    speak(card.word);

    // Speak button
    document.getElementById('speak-btn')?.addEventListener('click', () => {
      speak(card.word);
    });

    // Show answer button
    document.getElementById('show-answer')?.addEventListener('click', () => {
      answerShown = true;
      renderCard();
    });

    // Grade buttons
    container.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const grade = parseInt(btn.dataset.grade);
        store.gradeFlashcard(card.id, grade);
        currentIndex++;
        answerShown = false;
        renderCard();
      });
    });
  }

  renderCard();
}

function renderEmpty(container) {
  const allCards = store.getFlashcards();
  container.innerHTML = `
    <div class="review-screen fade-in">
      <div class="review-empty">
        <div class="review-empty-icon">📚</div>
        <h2>${allCards.length === 0 ? 'No Words Yet' : 'All Done!'}</h2>
        <p>${allCards.length === 0
          ? 'Start reading stories and tap on words to add them to your flashcards.'
          : 'You have reviewed all your words for today. Come back tomorrow!'
        }</p>
        <br>
        <button class="btn btn-primary" onclick="location.hash='#/'">Read Stories</button>
      </div>
    </div>
  `;
}

function renderComplete(container, count) {
  container.innerHTML = `
    <div class="review-screen fade-in">
      <div class="review-complete">
        <div class="review-complete-icon">🎉</div>
        <h2>Great Job!</h2>
        <p>You reviewed ${count} word${count > 1 ? 's' : ''}. Keep reading to discover more words!</p>
        <button class="btn btn-primary" onclick="location.hash='#/'">Back to Stories</button>
      </div>
    </div>
  `;
}

function highlightWord(sentence, word) {
  const cleanWord = word.replace(/[.,!?;:'"]/g, '');
  const regex = new RegExp(`\\b${escapeRegex(cleanWord)}\\b`, 'gi');
  return sentence.replace(regex, `<strong>${cleanWord}</strong>`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
