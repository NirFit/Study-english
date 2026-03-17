import { Router } from './router.js';
import { renderHome, renderStoryList } from './screens/home.js';
import { renderStory } from './screens/story.js';
import { renderFlashcards } from './screens/flashcards.js';
import { renderWordList } from './screens/wordlist.js';

const mainContent = document.getElementById('main-content');
const headerTitle = document.getElementById('header-title');
const backBtn = document.getElementById('back-btn');
const navBtns = document.querySelectorAll('.nav-btn');

const router = new Router();

function setHeader(title, showBack = false, backRoute = null) {
  headerTitle.textContent = title;
  if (showBack) {
    backBtn.classList.remove('hidden');
    backBtn.onclick = () => {
      if (backRoute) {
        router.navigate(backRoute);
      } else {
        history.back();
      }
    };
  } else {
    backBtn.classList.add('hidden');
  }
}

function setActiveNav(route) {
  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.route === route);
  });
}

// Routes
router.on('/', () => {
  setHeader('Study English');
  setActiveNav('/');
  renderHome(mainContent, router);
});

router.on('/level/:level', ({ level }) => {
  setHeader(`Level ${level}`, true, '/');
  setActiveNav('/');
  renderStoryList(mainContent, router, parseInt(level));
});

router.on('/story/:id', ({ id }) => {
  setHeader('Reading', true);
  setActiveNav('/');
  renderStory(mainContent, router, id);
});

router.on('/review', () => {
  setHeader('Review');
  setActiveNav('/review');
  renderFlashcards(mainContent);
});

router.on('/words', () => {
  setHeader('My Words');
  setActiveNav('/words');
  renderWordList(mainContent);
});

// Bottom nav handlers
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    router.navigate(btn.dataset.route);
  });
});

// Start
router.start();
