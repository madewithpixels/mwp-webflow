/* Contents device (R-099, brief #273, extended with the About parts in brief #292, tuned in briefs #295 and #298, then to Michael's spec of 4 November 2026, Claude night shift, 4 November 2026). Home page head, appended after the R-093 block. Desktop only (992px and up). */
  // Contents device (R-099, written by Claude). Lists the home page's main sections, and under About its four parts (intro, our
  // promise, we work with, built to last). Marks the one you are in, and jumps on click.
  // Every jump goes through the primary nav's own handler (the nav jump above: blur, instant jump, animations redrawn in page order,
  // D-017), so a jump from here lands exactly where the menu would. Main entries click the menu's own link. The About parts have no
  // menu link, so a zero-height marker is placed at the part's start and a hidden nav-style link points at it.
  // Scrolling only READS positions (nothing is written to the page's layout or the scroll animations).
  // Desktop only: below 992px the CSS keeps it hidden and this does not run.
  document.addEventListener('DOMContentLoaded', function () {
    if (!window.matchMedia('(min-width: 992px)').matches) return;
    function docTop(el) {
      return el.getBoundingClientRect().top + window.scrollY;
    }
    function topOf(target) {
      if (target === 0) return 0;
      var base = target.closest('.pin-spacer') || target; // a pinned section is measured from its spacer, as the nav jump does
      return docTop(base);
    }
    function sel(s) {
      return document.querySelector(s);
    }
    // Starts are read live (the pinned stretches change length when the page is re-measured).
    var ENTRIES = [
      { label: 'Home', href: '/', start: function () { return 0; } },
      { label: 'About', href: '#about', start: function () { return topOf(sel('#about')); }, ok: '#about' },
      { label: 'Intro', sub: true, start: function () { return topOf(sel('#about')); }, ok: '#about' },
      { label: 'Our promise', sub: true, start: function () { return docTop(sel('section.about')); }, ok: 'section.about', land: 0.1 },
      { label: 'We work with', sub: true, start: function () { return docTop(sel('[data-sequence-phase="mask"]')); }, ok: '[data-sequence-phase="mask"]', land: 1 },
      {
        label: 'Built to last',
        sub: true,
        start: function () {
          var m = sel('[data-sequence-phase="mask"]');
          return docTop(m) + m.offsetHeight; // where the We work with stretch ends and the closing block takes over
        },
        ok: '[data-sequence-phase="mask"]',
        land: 1.2, // lands once the closing block has finished fading in
      },
      { label: 'Pricing', href: '#pricing', start: function () { return topOf(sel('#pricing')); }, ok: '#pricing' },
      { label: 'Work', href: '#portfolio', start: function () { return topOf(sel('#portfolio')); }, ok: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials', start: function () { return topOf(sel('#testimonials')); }, ok: '#testimonials' },
      { label: 'Contact', href: '#contact', start: function () { return topOf(sel('#contact')); }, ok: '#contact' },
    ];
    var READ_LINE = 0.5; // a section counts as "current" once its start is above this fraction of the screen height
    var items = [];
    var nav = document.createElement('nav');
    nav.className = 'mwp-contents';
    nav.setAttribute('aria-label', 'Page contents');
    var list = document.createElement('ul');
    list.className = 'mwp-contents__list';
    var parent = null;
    ENTRIES.forEach(function (entry) {
      if (entry.ok && !sel(entry.ok)) return; // a section that isn't on the page gets no dash
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'mwp-contents__link' + (entry.sub ? ' is-sub' : '');
      a.href = entry.href && entry.href !== '/' ? entry.href : '#';
      var label = document.createElement('span');
      label.className = 'mwp-contents__label';
      label.textContent = entry.label;
      var tick = document.createElement('span');
      tick.className = 'mwp-contents__tick';
      tick.setAttribute('aria-hidden', 'true');
      a.appendChild(label);
      a.appendChild(tick);
      if (entry.sub) li.className = 'is-sub';
      li.appendChild(a);
      list.appendChild(li);
      var it = { a: a, entry: entry, parent: entry.sub ? parent : null };
      if (!entry.sub) parent = it;
      items.push(it);
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var navLink = entry.href ? document.querySelector('.mwp-css-nav_link[href="' + entry.href + '"]') : null;
        if (navLink) {
          navLink.click(); // the nav's own jump handler takes it from here
          return;
        }
        var y = entry.start() + (entry.land || 0) * window.innerHeight;
        if (entry.href === undefined && document.querySelector('[data-mwp-menu]')) {
          // no menu link for this part: point a hidden nav-style link at a marker placed at the right height
          var marker = document.createElement('div');
          marker.id = 'mwp-contents-jump';
          marker.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:0;pointer-events:none;';
          document.body.appendChild(marker);
          marker.style.top = y - docTop(marker) + 'px';
          var go = document.createElement('a');
          go.className = 'mwp-css-nav_link';
          go.setAttribute('href', '#mwp-contents-jump');
          go.hidden = true;
          document.body.appendChild(go);
          go.click();
          setTimeout(function () {
            go.remove();
            marker.remove();
            if (location.hash === '#mwp-contents-jump' && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
          }, 1000);
        } else if (window.lenis) {
          window.lenis.scrollTo(y, { immediate: true, force: true });
        } else {
          window.scrollTo(0, y);
        }
      });
    });
    if (items.length < 2) return;
    nav.appendChild(list);
    // The dotted rail the About parts hang from (Michael's spec): one element, from 8px above the first part's line to 8px below the last,
    // placed from the rows' real positions so it follows any change in row height.
    var RAIL_OVERHANG = 8;
    var rail = document.createElement('div');
    rail.className = 'mwp-contents__rail';
    rail.setAttribute('aria-hidden', 'true');
    nav.insertBefore(rail, list);
    document.body.appendChild(nav);
    function placeRail() {
      var subs = list.querySelectorAll('li.is-sub');
      if (!subs.length) {
        rail.style.display = 'none';
        return;
      }
      var navRect = nav.getBoundingClientRect();
      var k = navRect.height / nav.offsetHeight || 1; // the device is drawn smaller at rest (brief #313): measure in its own, unscaled pixels
      var navTop = navRect.top;
      var a = subs[0].getBoundingClientRect();
      var b = subs[subs.length - 1].getBoundingClientRect();
      var top = Math.round((a.top - navTop + a.height / 2) / k - RAIL_OVERHANG);
      var bottom = Math.round((b.top - navTop + b.height / 2) / k + RAIL_OVERHANG);
      rail.style.display = '';
      rail.style.top = top + 'px';
      rail.style.height = bottom - top + 'px';
    }
    placeRail();
    window.addEventListener('resize', placeRail, { passive: true });
    window.addEventListener('load', placeRail);

    var current = -1;
    var queued = false;
    function update() {
      queued = false;
      var line = window.scrollY + window.innerHeight * READ_LINE;
      var now = 0;
      items.forEach(function (it, i) {
        if (it.entry.start() <= line) now = i; // later entries win a tie, so Intro wins over About
      });
      if (now === current) return;
      current = now;
      items.forEach(function (it, i) {
        var on = i === now;
        var group = items[now].parent === it; // About stays marked while one of its parts is current
        it.a.classList.toggle('is-current', on);
        it.a.classList.toggle('is-group-current', group);
        if (on) it.a.setAttribute('aria-current', 'true');
        else it.a.removeAttribute('aria-current');
      });
    }
    function queue() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue, { passive: true });
    window.addEventListener('load', queue);
    if (window.lenis && window.lenis.on) window.lenis.on('scroll', queue);
    update();
  });
