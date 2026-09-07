const journey = document.querySelector('.journey');
const stage = document.querySelector('.stage');
const scenes = [...document.querySelectorAll('.scene')];
const routeButtons = [...document.querySelectorAll('.route-map [data-go]')];
const traveller = document.querySelector('.traveller');
const bubble = document.querySelector('.traveller-bubble');
const count = document.querySelector('#map-count');
const header = document.querySelector('.site-header');
const announcement = document.querySelector('#scene-announcement');
const motionButton = document.querySelector('.motion-button');
const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const dialog = document.querySelector('.detail-dialog');
let reduced = mediaReduced.matches;
let active = 0;
let compactMode = false;
let scheduled = false;
let movementTimeout;
let lastScroll = window.scrollY;
const visited = new Set();
const chapterNames = ['Start of the Mutu journey', 'Find your people: Discover', 'Give and grow: Reciprocal', 'Practise together: Mock interviews', 'Make it real: Groups and events'];
const greetings = ['Oh, hello there!', 'Your kind of people.', 'We grow together.', 'You’ve got this!', 'See you out there!'];

function setMotion(value) {
  reduced = value;
  document.documentElement.classList.toggle('reduce-motion', value);
  motionButton.setAttribute('aria-pressed', String(value));
  motionButton.setAttribute('aria-label', value ? 'Resume ambient animations' : 'Pause ambient animations');
  motionButton.querySelector('.motion-label').textContent = value ? 'Resume motion' : 'Pause motion';
  motionButton.querySelector('.pause-icon').textContent = value ? '▷' : 'Ⅱ';
}
setMotion(reduced);
motionButton.addEventListener('click', () => setMotion(!reduced));
mediaReduced.addEventListener('change', event => setMotion(event.matches));

function updateJourney() {
  const compact = window.innerHeight <= 620;
  if (compact !== compactMode) { compactMode = compact; active = -1; }
  if (compact) {
    scenes.forEach(scene => { scene.inert = false; scene.setAttribute('aria-hidden', 'false'); });
    header.classList.toggle('scrolled', window.scrollY > 40);
    scheduled = false;
    return;
  }
  const distance = Math.max(1, journey.offsetHeight - window.innerHeight);
  const travel = Math.max(0, Math.min(1, (window.scrollY - journey.offsetTop) / distance));
  const next = Math.min(4, Math.max(0, Math.floor(travel * 4.8)));
  stage.style.setProperty('--travel', travel.toFixed(4));
  header.classList.toggle('scrolled', window.scrollY > 40);
  if (next !== active) {
    active = next;
    stage.dataset.scene = String(next);
    scenes.forEach((scene, i) => {
      scene.classList.toggle('active', i === next);
      scene.inert = i !== next;
      scene.setAttribute('aria-hidden', String(i !== next));
    });
    if (next > 0) visited.add(next);
    bubble.textContent = greetings[next];
    count.textContent = String(visited.size).padStart(2, '0');
    announcement.textContent = chapterNames[next] + '.';
    routeButtons.forEach(button => {
      const index = Number(button.dataset.go);
      button.classList.toggle('is-current', index === next);
      button.classList.toggle('is-visited', visited.has(index));
      if (index === next) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
  }
  if (Math.abs(lastScroll - window.scrollY) > 1 && !reduced && window.scrollY < journey.offsetHeight) {
    traveller.classList.add('is-moving');
    clearTimeout(movementTimeout);
    movementTimeout = setTimeout(() => traveller.classList.remove('is-moving'), 130);
  }
  lastScroll = window.scrollY;
  scheduled = false;
}
function requestUpdate() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateJourney); }
}
window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate, { passive: true });
window.addEventListener('pageshow', requestUpdate);
updateJourney();

function goToChapter(index) {
  if (index < 0 || index > 4) return;
  if (window.innerHeight <= 620) {
    scenes[index].scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
    return;
  }
  const progress = index === 0 ? 0 : (index + 0.15) / 4.8;
  const top = journey.offsetTop + progress * (journey.offsetHeight - window.innerHeight);
  window.scrollTo({ top, behavior: reduced ? 'instant' : 'smooth' });
}
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => goToChapter(Number(button.dataset.go))));
document.addEventListener('keydown', event => {
  if (window.innerHeight <= 620) return;
  if (dialog.open || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
  if (window.scrollY > journey.offsetHeight - window.innerHeight + 60) return;
  if (event.key === 'ArrowRight' && active < 4) { event.preventDefault(); goToChapter(active + 1); }
  else if (event.key === 'ArrowLeft' && active > 0) { event.preventDefault(); goToChapter(active - 1); }
});

const details = {
  discover: {
    eyebrow: '01 / DISCOVER',
    title: 'A shared interest is a good place to start.',
    content: '<p>You don’t need to know everyone. You just need a way to find the people whose experience, interests, and goals connect with yours.</p><ol><li>Start with something you need or something you can offer.</li><li>Explore relevant people in your community.</li><li>When you both agree to connect, reveal your identities and start a conversation.</li></ol><div class="demo-pair"><strong>ILLUSTRATIVE CONNECTION</strong>A student exploring VC meets a peer who can share their recruiting experience.</div>'
  },
  reciprocal: {
    eyebrow: '02 / RECIPROCAL',
    title: 'Everyone has something to bring.',
    content: '<p>Reciprocal networking starts with mutual support. Your experience may be exactly what someone else needs, even while you’re learning something new yourself.</p><ol><li>Share where you could use a hand.</li><li>Offer a skill, a perspective, or time to help.</li><li>Agree on a useful exchange and make time for each other.</li></ol><div class="demo-pair"><strong>ILLUSTRATIVE EXCHANGE</strong>One person offers pitch feedback. The other brings a fresh perspective on a financial model.</div>'
  },
  practice: {
    eyebrow: '03 / MOCK INTERVIEWS',
    title: 'Get better on both sides of the table.',
    content: '<p>A practice partner gives you something solo preparation can’t: another person’s questions, reactions, and perspective.</p><ol><li>Find someone preparing for a case, behavioural, or technical interview.</li><li>Arrange a session and take turns interviewing.</li><li>Share specific feedback: what worked, what was unclear, and what to practise next.</li></ol><p>Giving an interview is practice, too. Notice how someone structures an answer, explains their thinking, and responds to a challenge.</p>'
  },
  events: {
    eyebrow: '04 / GROUPS & EVENTS',
    title: 'A first conversation deserves a second.',
    content: '<p>Your community is full of reasons to connect. Shared interests, groups, and events help you find a natural place to begin.</p><ol><li>Explore the people and interests around a group or event.</li><li>Meet in person and find your common ground.</li><li>Keep the connection going with a thoughtful follow-up.</li></ol><p>Being at the same event doesn’t automatically reveal everyone’s identity. Connections grow through mutual participation.</p>'
  }
};
let dialogTrigger;
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => {
    const detail = details[button.dataset.dialog];
    if (!detail) return;
    dialogTrigger = button;
    document.querySelector('#dialog-eyebrow').textContent = detail.eyebrow;
    document.querySelector('#dialog-title').textContent = detail.title;
    document.querySelector('#dialog-content').innerHTML = detail.content;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  if (dialogTrigger && !dialogTrigger.closest('[inert]')) dialogTrigger.focus({ preventScroll: true });
});
