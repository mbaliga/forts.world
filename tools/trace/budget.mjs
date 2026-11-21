// Per-scene budgets (PIPELINE-DESIGN.md §5). Enforced by check_sources.mjs and the CI smoke sample.
export const BUDGET = {
  traceKB: 250,        // one trace file on disk (uncompressed JSON); ~60-80 KB gzipped
  gridCells: 60000,    // heights grid cells (e.g. 240x240 at 5 m = 1.2 km square)
  elements: 400,       // trace elements after classification
  buildMs: 1500,       // World build+finish in Node (smoke.mjs numbers)
  solidTrisK: 600,     // solid triangle count, thousands
  instances: 40000,    // instanced props
};

// Time-budget multipliers for scenes whose whole-site extent is several times the usual 1 km window (nav grid and terrain scale with area).
// Triangle and instance limits are NOT relaxed. Gwalior: 2.9 km extent, ~8.4M nav nodes, measured 14.5 s on a CI runner against the 6 s default.
export const TIME_SCALE = { gwalior: 3, chittorgarh: 6, gandikota: 3 };
