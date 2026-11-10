  // Project page transition (R-083): on a project page, the left / right arrow slides the title, copy and screenshots
  // off sideways one after another, towards the arrow pressed; the next project's content then slides in from the opposite side.
  // The arrows themselves stay put (R-103). Replaces the old pixel cover (R-036). Everything else navigates normally. The head script (site head, "Project page
  // transition") hides the page's content until this runs, using the html classes mwp-pt-enter / mwp-pt-restore.
  (function () {
    'use strict';

    // ─── SETTINGS ──────────────────────────────────────────────────────────────
    const DURATION = 420; // ms each element takes to slide
    const STAGGER = 70; // ms between one element starting and the next
    const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
    const GAP = 8; // px past the edge of the box an element is clipped by
    const IMAGE_WAIT_MS = 1200; // longest the entrance waits for the first screenshots to decode
    const TARGETS = '.project-title-wrapper, .folio-rte-wrapper, .project-page-image';
    const KEY = 'mwp-pt'; // direction of the last arrow press (-1 left, 1 right), read by the next page
    const HOME_Y = 'mwp-home-y'; // last scroll position on the home page
    const HOME_RESTORE = 'mwp-home-restore'; // set by the project back button

    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isHome = location.pathname === '/';
    const isFolio = (path) => path.startsWith('/portfolio/');
    let busy = false;
    let running = [];

    // While the slide plays (and while the next page waits to slide in) the copy and screenshot columns' own scrollbars would stay
    // fixed in place: make them invisible. Their 8px width is kept, so nothing shifts. (Scrollbar look: site head, "R-081" block.)
    const hideBars = document.createElement('style');
    hideBars.textContent = ['html.mwp-pt-run', 'html.mwp-pt-enter'].map((h) => ['.project-image-wrapper', '.folio-rte-wrapper'].map((c) => `${h} ${c}::-webkit-scrollbar-track,${h} ${c}::-webkit-scrollbar-thumb`).join(',')).join(',') + '{background:transparent !important;border-color:transparent !important}';
    document.head.appendChild(hideBars);

    const nextPaint = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    // Elements moving sideways are clipped by their scrolling box (the screenshot column), else by the window
    function clipBox(el) {
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        if (/(auto|scroll|hidden|clip)/.test(getComputedStyle(p).overflowX)) return p.getBoundingClientRect();
      }
      return { left: 0, right: window.innerWidth };
    }

    // The elements on screen now, with how far each must move to be fully out of sight towards `side` (1 right, -1 left)
    function targets() {
      const vh = window.innerHeight;
      return Array.from(document.querySelectorAll(TARGETS))
        .map((el) => ({ el, r: el.getBoundingClientRect(), box: clipBox(el) }))
        .filter((t) => t.r.width > 0 && t.r.height > 0 && t.r.bottom > 0 && t.r.top < vh)
        .map((t) => ({
          el: t.el,
          key: t.r.left * 10000 + t.r.top,
          away: (side) => (side > 0 ? t.box.right - t.r.left + GAP : -(t.r.right - t.box.left + GAP)),
        }));
    }

    // Leaving: slide off towards `dir`, the elements nearest that edge first
    function exit(dir) {
      const list = targets().sort((a, b) => (dir > 0 ? b.key - a.key : a.key - b.key));
      root.classList.add('mwp-pt-run');
      running = list.map((t, i) =>
        t.el.animate([{ transform: 'translateX(0)', opacity: 1 }, { transform: `translateX(${t.away(dir)}px)`, opacity: 0 }], { duration: DURATION, delay: i * STAGGER, easing: EASE, fill: 'forwards' }),
      );
      return Promise.all(running.map((a) => a.finished)).catch(() => {});
    }

    // Arriving: slide in from the side opposite to `dir`, the elements nearest that edge first
    function enter(dir) {
      const list = targets().sort((a, b) => (dir > 0 ? a.key - b.key : b.key - a.key));
      const images = Array.from(document.querySelectorAll('.project-page-image'))
        .filter((img) => img.complete === false || !img.naturalWidth)
        .slice(0, 2)
        .map((img) => new Promise((resolve) => (img.addEventListener('load', resolve, { once: true }), img.addEventListener('error', resolve, { once: true }))));
      return Promise.race([Promise.all(images), new Promise((r) => setTimeout(r, IMAGE_WAIT_MS))]).then(() => {
        root.classList.add('mwp-pt-run');
        const anims = list.map((t, i) =>
          t.el.animate([{ transform: `translateX(${t.away(-dir)}px)`, opacity: 0 }, { opacity: 1, offset: 0.3 }, { transform: 'translateX(0)', opacity: 1 }], { duration: DURATION, delay: i * STAGGER, easing: EASE, fill: 'both' }),
        );
        root.classList.remove('mwp-pt-enter'); // the animations now hold everything hidden until its turn
        return Promise.all(anims.map((a) => a.finished)).then(() => {
          anims.forEach((a) => a.cancel());
          root.classList.remove('mwp-pt-run');
        });
      });
    }

    // Left arrow = the one further left (the first in the page if they are stacked)
    function directionOf(link) {
      const arrows = Array.from(document.querySelectorAll('.project-nav_arrow'));
      if (arrows.length < 2) return 1;
      const a = arrows[0].getBoundingClientRect().left;
      const b = arrows[1].getBoundingClientRect().left;
      const i = arrows.indexOf(link);
      if (Math.abs(a - b) < 4) return i === 0 ? -1 : 1;
      return (a < b ? i === 0 : i === 1) ? -1 : 1;
    }

    // Home page: remember where the visitor was when they leave
    if (isHome) {
      window.addEventListener('pagehide', () => {
        try {
          sessionStorage.setItem(HOME_Y, String(Math.round(window.scrollY)));
        } catch (e) {}
      });
    }

    // Home page reached via the project back button: jump to the remembered spot (hidden by the head rule) once the layout has settled
    function restoreHome() {
      let y = null;
      try {
        if (sessionStorage.getItem(HOME_RESTORE)) {
          sessionStorage.removeItem(HOME_RESTORE);
          y = sessionStorage.getItem(HOME_Y);
        }
      } catch (e) {}
      if (!isHome || y === null) return Promise.resolve();
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      const target = parseFloat(y) || 0;
      return new Promise((resolve) => {
        const jump = () => {
          if (window.lenis) window.lenis.scrollTo(target, { immediate: true, force: true });
          else window.scrollTo(0, target);
          if ('scrollRestoration' in history) history.scrollRestoration = 'auto'; // browser back/forward restores normally again
          nextPaint().then(resolve);
        };
        if (document.readyState === 'complete') setTimeout(jump, 50);
        else window.addEventListener('load', () => setTimeout(jump, 50), { once: true });
        setTimeout(resolve, 2500);
      });
    }

    // The project arrows (project to project only)
    document.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest('a.project-nav_arrow[href]');
      if (!a || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (!isFolio(url.pathname) || !isFolio(location.pathname) || reduceMotion || busy) return;
      e.preventDefault();
      busy = true;
      const dir = parseInt(a.getAttribute('data-mwp-swipe'), 10) || directionOf(a); // a swipe (MWPSwipeNav) names its own direction: the content follows the finger (R-135)
      try {
        sessionStorage.setItem(KEY, String(dir));
      } catch (err) {}
      exit(dir).then(() => {
        location.href = url.href;
      });
      // Safety net: if navigation never happens, put everything back
      setTimeout(() => {
        if (busy && document.visibilityState === 'visible') settle();
      }, 4000);
    });

    function settle() {
      busy = false;
      running.forEach((a) => a.cancel());
      running = [];
      root.classList.remove('mwp-pt-run');
      try {
        sessionStorage.removeItem(KEY);
      } catch (e) {}
    }

    // Arriving: read (and clear) the direction, then slide in, or just show the page
    let dir = 0;
    try {
      dir = parseInt(sessionStorage.getItem(KEY), 10) || 0;
      sessionStorage.removeItem(KEY);
    } catch (e) {}
    const reveal = () => {
      if (root.classList.contains('mwp-pt-restore')) {
        root.classList.remove('mwp-pt-restore');
        if (!reduceMotion) document.body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, easing: 'ease-out' });
      }
      if (root.classList.contains('mwp-pt-enter')) {
        if (dir && !reduceMotion && isFolio(location.pathname)) enter(dir);
        else root.classList.remove('mwp-pt-enter');
      }
    };
    if (root.classList.contains('mwp-pt-enter') || root.classList.contains('mwp-pt-restore')) {
      restoreHome().then(() => requestAnimationFrame(reveal));
    } else {
      restoreHome();
    }

    // Returning via browser back/forward from the bfcache with the content slid away
    window.addEventListener('pageshow', (e) => {
      if (e.persisted && busy) settle();
    });
  })();

  // Back button: returns to the home page at the last scroll position (portfolio section if there isn't one)
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-back]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // Came straight from the home page: step back in history so the browser restores the scroll and the title morphs back
        const vt = window.MWPViewTransition;
        const nav = window.navigation;
        const prev = nav && nav.currentEntry && nav.entries()[nav.currentEntry.index - 1];
        if (vt && prev && new URL(prev.url).pathname === '/') {
          history.back();
          return;
        }

        // Otherwise (e.g. after browsing several projects): fresh load of the home page, restored at the saved spot
        let saved = false;
        try {
          saved = sessionStorage.getItem('mwp-home-y') !== null;
          sessionStorage.setItem('mwp-home-restore', '1');
        } catch (err) {}
        location.href = saved ? '/' : '/#portfolio';
      });
    });
  });
