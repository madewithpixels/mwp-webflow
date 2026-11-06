// Performance tier script (R-102, D-024). Its own bundle so it can load on every page ahead of everything else
// without re-running the site scripts that are still inline in Webflow. Folded into the site bundle at switch-over.
import './perf.js';
