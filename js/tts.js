// Text-to-Speech module using browser SpeechSynthesis API
let voices = [];
let voicesLoaded = false;

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voicesLoaded = voices.length > 0;
}

// Voices may load asynchronously
if (typeof speechSynthesis !== 'undefined') {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function getEnglishVoice() {
  if (!voicesLoaded) loadVoices();
  return voices.find(v => v.lang === 'en-US' && v.name.includes('Google'))
      || voices.find(v => v.lang === 'en-US')
      || voices.find(v => v.lang.startsWith('en'))
      || null;
}

export function speak(text, slow = false) {
  if (typeof speechSynthesis === 'undefined') return;

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = slow ? 0.6 : 0.85;
  utterance.pitch = 1;

  const voice = getEnglishVoice();
  if (voice) utterance.voice = voice;

  speechSynthesis.speak(utterance);
}

export function stop() {
  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.cancel();
  }
}
