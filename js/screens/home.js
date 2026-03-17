import { levels } from '../data/levels.js';
import { getStoriesByLevel } from '../data/stories.js';
import { store } from '../store.js';

export function renderHome(container, router) {
  const html = `
    <div class="fade-in">
      <p class="home-subtitle">למד אנגלית דרך קריאת סיפורים</p>
      <div class="levels-grid">
        ${levels.map(l => {
          const stories = getStoriesByLevel(l.level);
          const unread = stories.filter(s => !store.isStoryRead(s.id)).length;
          return `
            <div class="level-card" data-level="${l.level}">
              ${unread > 0 ? `<div class="level-badge">${unread}</div>` : ''}
              <div class="level-number">${l.level}</div>
              <div class="level-label">${l.label}</div>
              <div class="level-stories-count">${stories.length} stories</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Click handlers for level cards
  container.querySelectorAll('.level-card').forEach(card => {
    card.addEventListener('click', () => {
      const level = parseInt(card.dataset.level);
      router.navigate(`/level/${level}`);
    });
  });
}

export function renderStoryList(container, router, level) {
  const levelInfo = levels.find(l => l.level === level);
  const stories = getStoriesByLevel(level);

  if (stories.length === 0) {
    container.innerHTML = `
      <div class="fade-in story-list">
        <h2 class="story-list-title">Level ${level} - ${levelInfo?.label || ''}</h2>
        <div class="review-empty">
          <div class="review-empty-icon">📖</div>
          <h2>Coming Soon</h2>
          <p>Stories for this level are being prepared.</p>
        </div>
      </div>
    `;
    return;
  }

  const html = `
    <div class="fade-in story-list">
      <h2 class="story-list-title">Level ${level} - ${levelInfo?.label || ''}</h2>
      ${stories.map(s => {
        const firstWords = s.paragraphs[0].words.slice(0, 10).map(w => w.word).join(' ');
        const isRead = store.isStoryRead(s.id);
        return `
          <div class="story-item" data-id="${s.id}">
            <div class="story-item-title">${s.title}</div>
            <div class="story-item-preview">${firstWords}...</div>
            ${isRead ? '<span class="story-item-read">Read</span>' : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;

  container.querySelectorAll('.story-item').forEach(item => {
    item.addEventListener('click', () => {
      router.navigate(`/story/${item.dataset.id}`);
    });
  });
}
