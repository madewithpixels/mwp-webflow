// Site-wide scripts: load on every page.
// The order below is the order they run in. It follows the order of the inline scripts in Webflow today (to confirm at switch-over).
import './perf.js'; // first: sets data-perf / data-input before anything else runs
import './menu-contact-text.js';
import './page-transition.js';
