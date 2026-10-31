// R-079 (brief #161): copy of the fourth <script> in the Home page footer custom code in Webflow (Pages > Home >
// Custom code > Before </body> tag), the record (R-029). Webflow holds the live copy; keep the two in step.
  // Testimonials -> pixel speech bubble -> MWP heart loop (written by Claude, v2.2 24 Oct; v2.3 1 Nov: scrolling back up
  // from the heart spins back to the speech bubble instead of jumping, R-079). Every screen size.
  // 1. FLY-IN: as the Testimonial Wall starts tilting away, 42 of its bubbles fly into the pixels of the big logo
  //    (.mwp-logo-2) in the Contact section - arranged as a pixel SPEECH BUBBLE - straightening, squaring up and fading
  //    to the logo's opacity on the way, while the rest of the wall fades out (so nothing is seen cut off at the section
  //    edge). Tied to scroll, so it reverses when scrolling back up.
  // 2. LOOP: once it has landed (and whenever the Contact section is on screen), every HOLD_MS the pixels spin a full
  //    turn on their vertical axis while gliding to the other shape - speech bubble -> MWP heart -> speech bubble...
  // The logo in the Designer is still the heart (9 x 7 grid, 42 coloured pixels: 14 raspberry, 12 coral, 16 teal). The
  // speech bubble uses the same 42 pixels in the same colours; this script just moves each pixel into its bubble spot.
  // How the fly-in works: each logo pixel is paired with the nearest bubble of the same colour. A stand-in tile (in a fixed
  // layer inside .contact, so the form still paints above it) is blended from its bubble's live on-screen box to its
  // pixel's live box - both measured every frame, so the hand-off at each end is exact and you can move/resize the logo in
  // the Designer. While it runs, the chosen bubbles and their pixels are hidden; at the end the real logo takes over.
  // PHONES / TABLETS (below 992px) - v2.2: a TIMED fly-in instead. On a phone the page scrolls on its own thread and
  // anything a script moves in step with the scroll arrives a frame late, which reads as judder however fast the phone
  // is. So there it plays once, over FLY_MS, when the Contact section's top passes TRIGGER_AT of the screen: the tiles
  // ride along with the page (not the screen) and the browser animates them itself, so they stay smooth while scrolling.
  // The rest of the wall fades out at the same moment. Scrolling back up above REARM_AT puts the bubbles back for next time.
  (function () {
    'use strict';
    // --- SETTINGS ---
    var ENABLED = true; // kill switch: false = no fly-in and no loop (the heart just sits in the Contact section)
    var START_UNIT = 182; // Testimonial Wall timeline unit (of 192) where the fly-in starts - 182 = the wall starts tilting away
    var END_AT = 0; // the fly-in completes when the Contact section's top is this many screen heights below the screen top
    var SPREAD = 0.35; // fly-in stagger: 0 = every tile moves together; higher = the far-away tiles set off later
    var PICK_MARGIN = 0.25; // bubbles up to this many screen widths/heights off screen are picked first (widened if too few)
    var WALL_FADE = 0.55; // the rest of the wall has faded out by this point of the fly-in (0-1)
    var HOLD_MS = 4000; // loop: how long each shape holds
    var SPIN_MS = 900; // loop: how long each pixel's spin + glide takes
    var RIPPLE_MS = 500; // loop: left-to-right delay across the shape (the first pixel starts this much before the last)
    // Phones / tablets (below 992px): the timed fly-in
    var FLY_MS = 1200; // how long the whole fly-in takes (the stagger is SPREAD of this)
    var TRIGGER_AT = 0.5; // plays when the Contact section's top is this far down the screen (0 = top, 1 = bottom)
    var REARM_AT = 0.9; // scrolling back up until the Contact top is below this resets it, ready to play again
    var WALL_OUT_MS = 400; // the rest of the wall fades out over this
    // The speech bubble, row by row (columns 0-8 of the 9 x 7 grid). r/c/t = raspberry/coral/teal, . = empty.
    // Must keep 14 r, 12 c and 16 t so every pixel has a spot of its own colour.
    var BUBBLE = [
      '.rrrcctt.',
      'rrrcccttt',
      'rr.c.c.tt',
      'rrrcccttt',
      '.rrrcctt.',
      '......tt.',
      '.......tt',
    ];
    // ---
    if (!ENABLED) return;
    var testi = document.querySelector('.testi-wall');
    var contact = document.querySelector('.contact');
    var logo = contact && contact.querySelector('.mwp-logo-2');
    var stage = testi && testi.querySelector('.testi-wall_stage');
    if (!contact || !logo) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var small = window.matchMedia('(max-width: 991px)');

    var wraps = Array.prototype.slice.call(logo.querySelectorAll('.pixel-3d'));
    var cells = wraps.map(function (w) {
      return w.querySelector('.pixel-2');
    });
    if (!cells.length || cells.indexOf(null) > -1) return;

    function colourOf(el) {
      var c = el.classList;
      if (c.contains('is-teal') || c.contains('px-teal')) return 't';
      if (c.contains('is-raspberry') || c.contains('px-raspberry')) return 'r';
      return 'c';
    }
    function clamp(x) {
      return x < 0 ? 0 : x > 1 ? 1 : x;
    }
    function ease(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }
    function rgb(s) {
      // handles rgb(217, 70, 108) AND color(srgb 0.85 0.27 0.42) - the colour-mixed inner rows compute to the second form
      var m = s.match(/[\d.]+/g) || [0, 0, 0];
      var k = /^color\(/.test(s) ? 255 : 1;
      return [m[0] * k, m[1] * k, m[2] * k];
    }
    function radii(cs) {
      return [cs.borderTopLeftRadius, cs.borderTopRightRadius, cs.borderBottomRightRadius, cs.borderBottomLeftRadius].map(function (v) {
        return parseFloat(v) || 0;
      });
    }
    function matrixOf(el) {
      // rotation (deg) and scale of an element's own transform
      var t = getComputedStyle(el).transform;
      if (!t || t === 'none') return { a: 0, s: 1 };
      var m = new DOMMatrixReadOnly(t);
      return { a: (Math.atan2(m.b, m.a) * 180) / Math.PI, s: Math.hypot(m.a, m.b) };
    }

    // ---------- SHAPES: each pixel's heart spot (its place in the Designer grid) and its speech-bubble spot ----------
    var pitch = 18; // grid step in the logo's own px (cell + gap) - measured below
    var px = wraps.map(function (w, i) {
      return { w: w, col: colourOf(cells[i]), hx: 0, hy: 0, bx: 0, by: 0, x: 0, y: 0 };
    });
    function measureGrid() {
      var gap = parseFloat(getComputedStyle(logo).columnGap) || 0;
      pitch = (wraps[0].offsetWidth || 16) + gap;
      var o = logo.children[0]; // the grid's first square (top-left) is the origin
      px.forEach(function (p) {
        p.hx = Math.round((p.w.offsetLeft - o.offsetLeft) / pitch);
        p.hy = Math.round((p.w.offsetTop - o.offsetTop) / pitch);
      });
      // bubble spots by colour, then pair each pixel with the nearest free spot of its colour
      var spots = [];
      BUBBLE.forEach(function (row, y) {
        row.split('').forEach(function (ch, x) {
          if ('rct'.indexOf(ch) > -1) spots.push({ x: x, y: y, col: ch, used: false });
        });
      });
      var pairs = [];
      px.forEach(function (p, i) {
        spots.forEach(function (s, j) {
          if (s.col === p.col) pairs.push({ i: i, j: j, d: Math.hypot(s.x - p.hx, s.y - p.hy) });
        });
      });
      pairs.sort(function (a, b) {
        return a.d - b.d;
      });
      var done = {};
      pairs.forEach(function (q) {
        if (done[q.i] || spots[q.j].used) return;
        done[q.i] = true;
        spots[q.j].used = true;
        px[q.i].bx = spots[q.j].x;
        px[q.i].by = spots[q.j].y;
      });
      px.forEach(function (p, i) {
        if (!done[i]) {
          p.bx = p.hx; // not enough spots of this colour: stays where it is in both shapes
          p.by = p.hy;
        }
      });
    }
    function place(p, gx, gy, spin) {
      // gx/gy = grid position (can be fractional mid-glide); spin = degrees around the vertical axis
      p.x = gx;
      p.y = gy;
      p.spin = spin || 0; // read by the fly-in tiles, so a spin still shows while they stand in for the pixels
      var dx = (gx - p.hx) * pitch,
        dy = (gy - p.hy) * pitch;
      p.w.style.transform = spin ? 'translate(' + dx + 'px,' + dy + 'px) perspective(120px) rotateY(' + spin + 'deg)' : dx || dy ? 'translate(' + dx + 'px,' + dy + 'px)' : '';
    }
    var shape = 'heart'; // what's showing (or being headed to)
    var anim = null; // running spin: { t0, from }
    function setShape(s) {
      anim = null;
      shape = s;
      px.forEach(function (p) {
        if (s === 'bubble') place(p, p.bx, p.by, 0);
        else place(p, p.hx, p.hy, 0);
      });
    }
    function startSpin(to, now) {
      shape = to;
      // v2.3 (R-079): glide from where each pixel is now, so a spin can turn back halfway without a jump
      anim = {
        t0: now,
        from: px.map(function (p) {
          return { x: p.x, y: p.y };
        }),
      };
    }
    function stepSpin(now) {
      if (!anim) return false;
      var allDone = true;
      px.forEach(function (p, i) {
        var fx = anim.from[i].x,
          fy = anim.from[i].y,
          tx = shape === 'heart' ? p.hx : p.bx,
          ty = shape === 'heart' ? p.hy : p.by;
        var delay = (Math.min(fx, tx) / 8) * RIPPLE_MS; // left-to-right ripple
        var t = clamp((now - anim.t0 - delay) / SPIN_MS);
        if (t < 1) allDone = false;
        var e = ease(t);
        place(p, lerp(fx, tx, e), lerp(fy, ty, e), t > 0 && t < 1 ? 360 * e : 0);
      });
      if (allDone) anim = null;
      return true;
    }

    // ---------- FLY-IN (desktop, tied to scroll) ----------
    // Layer of stand-in tiles: fixed, inside .contact (falls back to <body> if a transformed ancestor would trap it)
    var layer = document.createElement('div');
    layer.setAttribute('aria-hidden', 'true');
    layer.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;z-index:0;pointer-events:none;display:none;';
    contact.insertBefore(layer, contact.firstChild);
    var layerChecked = false;
    var pairs = null; // [{cell, chip, el, d, ...}]

    function scrolled(vh) {
      // px scrolled past the fly-in's start (negative before it)
      var tr = testi.getBoundingClientRect();
      var startTop = vh - (START_UNIT / 192) * (tr.height + vh); // the wall's top edge when the fly-in starts
      return startTop - tr.top;
    }
    function progress(vh) {
      if (!testi || !stage) return 1;
      var s = scrolled(vh),
        cr = contact.getBoundingClientRect();
      var total = cr.top + s - END_AT * vh; // px from the start until the Contact top reaches END_AT
      return total > 0 ? s / total : 1;
    }

    function assign(vh, vw, timed) {
      var cr = contact.getBoundingClientRect();
      // Scroll-tied (desktop): pair by where things are at the START of the fly-in (bubbles) and at its END (pixels), not
      // where they are now - so scrolling back up into it from below picks the same bubbles as scrolling down into it.
      // Timed (phones): it starts now, so where they are now.
      var back = timed ? 0 : Math.max(0, scrolled(vh)); // the page has moved up this far since the start
      var shift = timed ? 0 : cr.top - END_AT * vh; // and the Contact section will move up this far by the end
      var chips = Array.prototype.slice.call(testi.querySelectorAll('.testi-wall_chip')).filter(function (c) {
        return !c.closest('.testi-wall_backrow');
      });
      var all = chips.map(function (c) {
        var r = c.getBoundingClientRect();
        return { el: c, x: r.left + r.width / 2, y: r.top + r.height / 2 + back, col: colourOf(c) };
      });
      // bubbles on (or just off) screen first; if there aren't enough for every pixel, widen the net until there are
      var cand = [],
        margin = PICK_MARGIN;
      for (var tries = 0; tries < 6; tries++) {
        var mx = vw * margin,
          my = vh * margin;
        cand = all.filter(function (b) {
          return b.x > -mx && b.x < vw + mx && b.y > -my && b.y < vh + my;
        });
        if (cand.length >= cells.length * 1.5) break; // 1.5x so each colour has some choice
        margin *= 2;
      }
      var ls = matrixOf(logo).s;
      var targets = cells.map(function (c, i) {
        var r = c.getBoundingClientRect();
        // where this pixel will be when the fly-in ends (the Contact section moves up by cr.top - END_AT * vh), in its
        // speech-bubble spot even if it is still on its way back from the heart (so the same bubbles are picked both ways)
        var sx = (px[i].bx - px[i].x) * pitch * ls,
          sy = (px[i].by - px[i].y) * pitch * ls;
        return { el: c, x: r.left + r.width / 2 + sx, y: r.top + r.height / 2 - shift + sy, col: colourOf(c), p: px[i] };
      });
      // every (pixel, bubble) pair, nearest first; same colour first, then any colour for any pixels left over
      var list = [];
      targets.forEach(function (t, i) {
        cand.forEach(function (b, j) {
          list.push({ i: i, j: j, d: Math.hypot(t.x - b.x, t.y - b.y), same: t.col === b.col });
        });
      });
      list.sort(function (a, b) {
        return (a.same === b.same ? 0 : a.same ? -1 : 1) || a.d - b.d;
      });
      var usedT = {},
        usedB = {},
        out = [];
      list.forEach(function (p) {
        if (usedT[p.i] || usedB[p.j]) return;
        usedT[p.i] = usedB[p.j] = true;
        out.push({ cell: targets[p.i].el, px: targets[p.i].p, chip: cand[p.j].el, d: p.d });
      });
      if (!out.length) return null;
      // stagger by distance: the nearest tiles set off first
      out.sort(function (a, b) {
        return a.d - b.d;
      });
      out.forEach(function (p, k) {
        p.delay = out.length > 1 ? (SPREAD * k) / (out.length - 1) : 0;
        var cs = getComputedStyle(p.chip),
          ts = getComputedStyle(p.cell);
        p.c0 = rgb(cs.backgroundColor);
        p.c1 = rgb(ts.backgroundColor);
        p.r0 = radii(cs);
        p.r1 = radii(ts);
        p.el = document.createElement('div');
        p.el.style.cssText = 'position:absolute;left:0;top:0;will-change:transform;';
        if (!timed) {
          layer.appendChild(p.el);
          p.chip.style.visibility = 'hidden';
          p.cell.style.visibility = 'hidden'; // only paired pixels are hidden; any left unpaired stay in place
        }
      });
      return out;
    }

    function reset() {
      resetTimed();
      if (pairs) {
        pairs.forEach(function (p) {
          p.chip.style.visibility = p.cell.style.visibility = '';
        });
        pairs = null;
      }
      layer.innerHTML = '';
      layer.style.display = 'none';
      if (stage) stage.style.opacity = stage.style.visibility = '';
    }

    function flyIn(p, vh, vw) {
      if (!pairs) {
        pairs = assign(vh, vw);
        if (!pairs) return;
      }
      layer.style.display = 'block';
      if (!layerChecked) {
        layerChecked = true;
        var lr = layer.getBoundingClientRect();
        if (Math.abs(lr.top) > 1 || Math.abs(lr.left) > 1) {
          document.body.appendChild(layer);
          layer.style.zIndex = '50';
        }
      }
      // the rest of the wall fades away, so no bubble is seen sliced off at the section edge
      stage.style.opacity = String(1 - ease(clamp(p / WALL_FADE)));
      // reads first (both ends, live), then writes
      var sm = matrixOf(stage),
        lm = matrixOf(logo),
        lo = parseFloat(getComputedStyle(logo).opacity);
      if (isNaN(lo)) lo = 1;
      var boxes = pairs.map(function (q) {
        var a = q.chip.getBoundingClientRect(),
          b = q.cell.getBoundingClientRect();
        return {
          ax: a.left + a.width / 2,
          ay: a.top + a.height / 2,
          aw: q.chip.offsetWidth * sm.s,
          ah: q.chip.offsetHeight * sm.s,
          bx: b.left + b.width / 2,
          by: b.top + b.height / 2,
          bw: q.cell.offsetWidth * lm.s,
          bh: q.cell.offsetHeight * lm.s,
        };
      });
      pairs.forEach(function (q, i) {
        var t = ease(clamp((p - q.delay) / (1 - SPREAD))),
          k = boxes[i];
        var w = lerp(k.aw, k.bw, t),
          h = lerp(k.ah, k.bh, t);
        var x = lerp(k.ax, k.bx, t) - w / 2,
          y = lerp(k.ay, k.by, t) - h / 2;
        var ang = lerp(sm.a, lm.a, t);
        var s = q.el.style;
        s.width = w + 'px';
        s.height = h + 'px';
        // a pixel still spinning back from the heart (R-079) passes its spin on to its tile
        var spin = q.px && q.px.spin ? ' perspective(' + 120 * lm.s + 'px) rotateY(' + q.px.spin + 'deg)' : '';
        s.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + ang + 'deg)' + spin;
        s.borderRadius = [0, 1, 2, 3]
          .map(function (n) {
            return lerp(q.r0[n] * sm.s, q.r1[n] * lm.s, t) + 'px';
          })
          .join(' ');
        s.backgroundColor =
          'rgb(' +
          [0, 1, 2]
            .map(function (n) {
              return Math.round(lerp(q.c0[n], q.c1[n], t));
            })
            .join(',') +
          ')';
        s.opacity = lerp(1, lo, t);
      });
    }

    // ---------- TIMED FLY-IN (phones / tablets) ----------
    // Tiles live in a layer that scrolls WITH the page, and the browser runs their animation itself (Web Animations),
    // so neither the page's scrolling nor a busy moment in a script can make them judder.
    var mob = { state: 'armed', pairs: null, layer: null, timer: 0, wallTimer: 0 };
    function css(c) {
      return 'rgb(' + c.map(Math.round).join(',') + ')';
    }
    function playTimed(vh, vw) {
      var list = assign(vh, vw, true);
      if (!list || !document.body.animate) return false;
      var sm = stage ? matrixOf(stage) : { a: 0, s: 1 },
        lm = matrixOf(logo),
        lo = parseFloat(getComputedStyle(logo).opacity);
      if (isNaN(lo)) lo = 1;
      var lay = document.createElement('div');
      lay.setAttribute('aria-hidden', 'true');
      lay.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;z-index:50;pointer-events:none;';
      document.body.appendChild(lay);
      var o = lay.getBoundingClientRect(); // the layer's own origin on screen (it moves with the page)
      var dur = FLY_MS * (1 - SPREAD);
      // all the measuring first, then all the writing
      var boxes = list.map(function (q) {
        var a = q.chip.getBoundingClientRect(),
          b = q.cell.getBoundingClientRect();
        return {
          ax: a.left + a.width / 2 - o.left,
          ay: a.top + a.height / 2 - o.top,
          aw: q.chip.offsetWidth * sm.s,
          ah: q.chip.offsetHeight * sm.s,
          bx: b.left + b.width / 2 - o.left,
          by: b.top + b.height / 2 - o.top,
          bw: q.cell.offsetWidth * lm.s,
          bh: q.cell.offsetHeight * lm.s,
        };
      });
      list.forEach(function (q, i) {
        var k = boxes[i],
          sx = k.aw / k.bw,
          sy = k.ah / k.bh,
          sAvg = (sx + sy) / 2 || 1;
        // the tile is the pixel's size and is scaled up/down to the bubble's size at the start
        q.el.style.width = k.bw + 'px';
        q.el.style.height = k.bh + 'px';
        lay.appendChild(q.el);
        q.chip.style.visibility = 'hidden';
        q.cell.style.visibility = 'hidden';
        q.el.animate(
          [
            {
              transform: 'translate(' + (k.ax - k.bw / 2) + 'px,' + (k.ay - k.bh / 2) + 'px) rotate(' + sm.a + 'deg) scale(' + sx + ',' + sy + ')',
              backgroundColor: css(q.c0),
              borderRadius: q.r0.map(function (r) { return (r * sm.s) / sAvg + 'px'; }).join(' '),
              opacity: 1,
            },
            {
              transform: 'translate(' + (k.bx - k.bw / 2) + 'px,' + (k.by - k.bh / 2) + 'px) rotate(' + lm.a + 'deg) scale(1,1)',
              backgroundColor: css(q.c1),
              borderRadius: q.r1.map(function (r) { return r * lm.s + 'px'; }).join(' '),
              opacity: lo,
            },
          ],
          { duration: dur, delay: FLY_MS * q.delay, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'both' }
        );
      });
      mob.pairs = list;
      mob.layer = lay;
      // the rest of the wall fades out, then stops being drawn
      if (stage) {
        stage.style.transition = 'opacity ' + WALL_OUT_MS + 'ms ease';
        stage.style.opacity = '0';
        clearTimeout(mob.wallTimer);
        mob.wallTimer = setTimeout(function () {
          stage.style.visibility = 'hidden';
        }, WALL_OUT_MS + 20);
      }
      clearTimeout(mob.timer);
      mob.timer = setTimeout(landTimed, FLY_MS + 60);
      return true;
    }
    function landTimed() {
      // the real logo takes over
      if (mob.pairs)
        mob.pairs.forEach(function (q) {
          q.cell.style.visibility = '';
        });
      if (mob.layer) mob.layer.remove();
      mob.layer = null;
      if (mob.state === 'flying') {
        mob.state = 'done';
        lastChange = performance.now();
      }
    }
    function resetTimed() {
      clearTimeout(mob.timer);
      clearTimeout(mob.wallTimer);
      if (mob.pairs)
        mob.pairs.forEach(function (q) {
          q.chip.style.visibility = q.cell.style.visibility = '';
        });
      mob.pairs = null;
      if (mob.layer) mob.layer.remove();
      mob.layer = null;
      if (stage && (stage.style.opacity || stage.style.visibility)) {
        stage.style.visibility = '';
        stage.style.opacity = ''; // fades back in (the transition is still set)
      }
      mob.state = 'armed';
    }

    // ---------- MAIN LOOP ----------
    var onScreen = false;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) {
        onScreen = e[0].isIntersecting;
      }).observe(contact);
    } else onScreen = true;
    var lastChange = 0;

    function frame(now) {
      requestAnimationFrame(frame);
      if (reduce.matches) {
        if (pairs || layer.style.display !== 'none' || mob.state !== 'armed') reset();
        if (shape !== 'heart' || anim) setShape('heart'); // reduced motion: the plain heart, no movement
        return;
      }
      var vh = window.innerHeight,
        vw = window.innerWidth;
      var cr = contact.getBoundingClientRect();
      if (small.matches) {
        // phones / tablets: the timed fly-in (only the Contact section's position is read each frame)
        if (pairs || layer.style.display !== 'none') {
          pairs && pairs.forEach(function (p) {
            p.chip.style.visibility = p.cell.style.visibility = '';
          });
          pairs = null;
          layer.innerHTML = '';
          layer.style.display = 'none';
        }
        var ct = cr.top / vh;
        if (mob.state !== 'armed' && ct > REARM_AT) resetTimed(); // back above it: ready to play again
        if (mob.state === 'armed') {
          if (shape !== 'bubble' || anim) setShape('bubble');
          lastChange = now;
          if (ct <= TRIGGER_AT) {
            // arriving from above plays it; landing here some other way (from below, a menu jump) just shows the bubble
            mob.state = ct > -0.25 && playTimed(vh, vw) ? 'flying' : 'done';
          }
          return;
        }
        if (mob.state === 'flying') {
          lastChange = now;
          return;
        }
      } else {
        if (mob.state !== 'armed') {
          resetTimed(); // e.g. rotated to landscape on a tablet
          if (stage) stage.style.transition = '';
        }
        var p = cr.top > vh * 4 ? 0 : progress(vh);
      }
      if (small.matches) {
        // landed: fall through to the loop
      } else if (p > 0 && p < 1) {
        // flying in: the logo holds still as the speech bubble so the tiles have somewhere exact to land.
        // R-079: scrolling back up while it shows the heart (or is spinning to it), it spins back to the speech bubble as
        // the tiles set off - the tiles follow the pixels live - instead of jumping to the speech bubble in one frame.
        if (shape !== 'bubble') startSpin('bubble', now);
        stepSpin(now);
        flyIn(p, vh, vw);
        lastChange = now;
        return;
      }
      if (!small.matches && (pairs || layer.style.display !== 'none')) reset();
      if (!small.matches && p <= 0) {
        // above the fly-in: be the speech bubble, ready for it
        if (shape !== 'bubble' || anim) setShape('bubble');
        lastChange = now;
        return;
      }
      // landed: loop while the Contact section is on screen
      if (stepSpin(now)) {
        lastChange = now;
        return;
      }
      if (onScreen && now - lastChange > HOLD_MS) startSpin(shape === 'bubble' ? 'heart' : 'bubble', now);
    }

    function init() {
      wraps.forEach(function (w) {
        w.style.transition = 'none'; // the Designer gives these a CSS transition, which would lag every frame
        w.style.willChange = 'transform';
      });
      measureGrid();
      setShape(reduce.matches ? 'heart' : 'bubble');
      requestAnimationFrame(frame);
    }

    var rt,
      lastW = window.innerWidth;
    window.addEventListener('resize', function () {
      // phones fire resize whenever the address bar slides in or out - only a real width change counts
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(rt);
      rt = setTimeout(function () {
        reset();
        var s = shape;
        measureGrid();
        setShape(s);
      }, 150);
    });
    init();
  })();
