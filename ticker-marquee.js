// Ticker: nine-row scroll marquee - drag + scroll-tied highlight sweep (written by Claude).
// The sideways drift is the native "Ticker Drift" scroll interaction (xPercent on each .ticker__track).
// This script: copies each row's sectors SETS times so the rows never run out, lets each row be dragged/flicked
// (it moves the plain wrapper div inside .ticker__row, so it never fights the interaction), and runs the highlight:
// tied to scroll, raspberry works its way along each line, left to right across the screen, one row after another
// top to bottom. Letters that have been reached stay lit; scrolling back up un-lights them in reverse.
(function () {
  'use strict';

  // --- SETTINGS ---
  const SETS = 6; // copies of each row's sectors (the Ticker Drift xPercent values assume 6)
  const FRICTION = 0.94; // how quickly a flick slows down (0-1, higher = longer glide)
  const DRAG_THRESHOLD = 4; // px before a press counts as a drag
  // The sweep runs across this part of the section's scroll (0 = section top reaches the screen top,
  // 1 = section bottom reaches the screen bottom). Desktop: the panel slides in over 0-1/3, holds 1/3-2/3, slides out 2/3-1.
  const SWEEP_DESKTOP = [0.3, 0.7];
  const SWEEP_SMALLER = [0.1, 0.9]; // tablet / phone (no wipe)

  const section = document.querySelector('[data-mwp-sequence]') || document.querySelector('.ticker');
  const rows = Array.from(document.querySelectorAll('.ticker__row'));
  if (!section || !rows.length) return;
  const desktop = window.matchMedia('(min-width: 992px)');

  // The separator's en dash is source text over its gradient bar; hide the glyph but retain the bar and separator for assistive text.
  document.querySelectorAll('.ticker__item .dash').forEach((dash) => {
    dash.style.color = 'transparent';
  });

  // Split each sector's text into letters
  document.querySelectorAll('.ticker__item > div').forEach((word) => {
    word.classList.add('ticker__word');
    Array.from(word.childNodes).forEach((n) => {
      if (n.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      for (const c of n.textContent) {
        const s = document.createElement('span');
        s.className = 'ticker__ch';
        s.textContent = c;
        frag.appendChild(s);
      }
      n.replaceWith(frag);
    });
  });

  const state = rows.map((row) => {
    const drag = row.firstElementChild;
    const track = row.querySelector('.ticker__track');
    const originals = Array.from(track.children);
    for (let k = 1; k < SETS; k++) {
      originals.forEach((el) => {
        const c = el.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        track.appendChild(c);
      });
    }
    drag.style.willChange = 'transform';
    // visible letters only (spaces don't light); x = each letter's centre measured from the track's left edge
    const chars = Array.from(track.querySelectorAll('.ticker__ch'))
      .filter((c) => c.textContent.trim())
      .map((el) => ({ el, x: 0, on: false }));
    return { row, drag, track, chars, x: 0, vel: 0, setW: 0 };
  });

  function measure() {
    state.forEach((s) => {
      s.setW = s.track.scrollWidth / SETS;
      const t = s.track.getBoundingClientRect().left;
      s.chars.forEach((c) => {
        const r = c.el.getBoundingClientRect();
        c.x = r.left + r.width / 2 - t;
      });
    });
  }
  function wrap(s) {
    // keep the drag offset within half a set either way - the copies make the jump invisible
    if (!s.setW) return;
    const h = s.setW / 2;
    s.x = ((((s.x + h) % s.setW) + s.setW) % s.setW) - h;
  }
  function render(s) {
    s.drag.style.transform = 'translate3d(' + s.x + 'px,0,0)';
  }

  // -- Drag --
  state.forEach((s) => {
    let pressed = false,
      dragging = false,
      startX = 0,
      lastX = 0,
      lastT = 0;
    s.row.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      pressed = true;
      startX = lastX = e.clientX;
      lastT = performance.now();
      s.vel = 0;
    });
    window.addEventListener('pointermove', (e) => {
      if (!pressed) return;
      if (!dragging && Math.abs(e.clientX - startX) > DRAG_THRESHOLD) {
        dragging = s.dragging = true;
        s.row.setPointerCapture && s.row.setPointerCapture(e.pointerId);
        s.row.classList.add('is-dragging');
      }
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      s.x += dx;
      s.vel = (dx / Math.max(now - lastT, 1)) * 16.67;
      lastX = e.clientX;
      lastT = now;
      wrap(s);
      render(s);
    });
    const release = () => {
      pressed = false;
      if (!dragging) return;
      dragging = s.dragging = false;
      s.row.classList.remove('is-dragging');
      if (performance.now() - lastT > 80) s.vel = 0; // held still before letting go = no flick
    };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
  });

  // -- Highlight sweep --
  function sweepProgress() {
    // 0 -> rows.length: whole number = rows fully lit, fraction = how far along the current row the sweep is
    const r = section.getBoundingClientRect();
    const range = r.height - window.innerHeight;
    const p = range > 0 ? Math.min(1, Math.max(0, -r.top / range)) : 0;
    const [a, b] = desktop.matches ? SWEEP_DESKTOP : SWEEP_SMALLER;
    return Math.min(1, Math.max(0, (p - a) / (b - a))) * state.length;
  }
  function sweep() {
    const P = sweepProgress(),
      vw = window.innerWidth;
    const middle = (state.length - 1) / 2;
    state.forEach((s, k) => {
      const distance = Math.abs(k - middle);
      const rank = k === middle ? 0 : k < middle ? distance * 2 - 1 : distance * 2 - 2;
      const rowP = Math.min(1, Math.max(0, P - rank));
      // each row lights from the viewport centre out towards both edges
      const reach = rowP * vw / 2;
      const t = s.track.getBoundingClientRect().left;
      s.chars.forEach((c) => {
        const on = Math.abs(t + c.x - vw / 2) <= reach;
        if (on !== c.on) {
          c.on = on;
          c.el.classList.toggle('is-on', on);
        }
      });
    });
  }

  // -- Loop (only while the section is on screen) --
  let visible = false;
  let prev = performance.now();
  function tick(now) {
    const dt = Math.min(now - prev, 50) / 1000;
    prev = now;
    if (visible) {
      state.forEach((s) => {
        if (!s.dragging && s.vel) {
          s.x += s.vel * dt * 60;
          s.vel *= Math.pow(FRICTION, dt * 60);
          if (Math.abs(s.vel) < 0.05) s.vel = 0;
          wrap(s);
          render(s);
        }
      });
      sweep();
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => (visible = entries[0].isIntersecting)).observe(section);
  } else visible = true;

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(measure, 150);
  });
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => {
    measure();
    requestAnimationFrame(tick);
  });
})();
