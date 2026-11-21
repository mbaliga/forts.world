// Trace schema `in-rts.trace/1`: the single site format every builder emits and every scene consumes.
// See docs/fort-fidelity/PIPELINE-DESIGN.md §1. This module validates a trace and wraps the two
// hand-made legacy traces (kumbhalgarh.trace.js, janjira.trace.js) so the same checks run on them.
export const SCHEMA = 'in-rts.trace/1';
export const KINDS = new Set(['outline', 'ditch', 'wall', 'retaining-wall', 'bastion', 'gate', 'tower', 'building', 'ruin', 'temple', 'stupa', 'cell-block', 'tank', 'well', 'water', 'waterway', 'coastline', 'cliff', 'road', 'stair', 'zone', 'marker', 'plan-raster', 'pit']);
export const EVIDENCE = new Set(['documented', 'mapped', 'inferred']);
// Constructed (schematic) layer, DUAL-LAYER.md: T.constructed[] holds elements drawn from text descriptions and typology, never from a plan or
// survey. They are validated here, kept out of the documented evidence counts, and rendered only in the `<era>~built` eras.
export const SCHEMATIC = 'schematic';
export const BUILT_SUFFIX = '~built';
export const SITE_TYPES = new Set(['fort', 'palace', 'ancient-city', 'monastery', 'university', 'temple', 'stepwell', 'tomb', 'port', 'other']);
// src tag grammar (STANDARD.md rule 1): osm:<type>/<id> · plan:<doc>#<fig> · photo:<ref> · dem:<set> · derived:<method> · inferred
export const SRC_RE = /^(osm:(node|way|relation)\/\d+|plan:[^#\s]+#[^\s]+|photo:\S+|dem:\S+|derived:\S+|inferred|legacy:\S+)$/;

export function validateTrace(T) {
  const err = [], warn = [];
  if (T.schema !== SCHEMA) err.push(`schema must be ${SCHEMA}, got ${T.schema}`);
  for (const k of ['id', 'name', 'type', 'coords', 'bounds', 'elements', 'eras']) if (T[k] == null) err.push(`missing ${k}`);
  if (T.type && !SITE_TYPES.has(T.type)) err.push(`unknown site type ${T.type}`);
  if (!T.heights) warn.push('no heights grid: terrain will be flat');
  else for (const k of ['x0', 'y0', 'stride', 'nx', 'ny', 'data', 'src']) if (T.heights[k] == null) err.push(`heights.${k} missing`);
  const ids = new Set();
  for (const e of T.elements || []) {
    const tag = `${e.kind}:${e.id}`;
    if (!e.id) err.push(`element without id (${e.kind})`); else if (ids.has(e.id)) err.push(`duplicate element id ${e.id}`); ids.add(e.id);
    if (!KINDS.has(e.kind)) err.push(`${tag}: unknown kind`);
    if (!e.src) err.push(`${tag}: no src`); else if (!SRC_RE.test(e.src)) err.push(`${tag}: bad src "${e.src}"`);
    if (!EVIDENCE.has(e.ev)) err.push(`${tag}: ev must be one of ${[...EVIDENCE]}`);
    if (typeof e.conf !== 'number' || e.conf < 0 || e.conf > 1) err.push(`${tag}: conf must be 0..1`);
    const geo = e.poly || e.path || e.at; if (!geo) err.push(`${tag}: no geometry (poly/path/at)`);
    if (e.poly && e.poly.length < 3) err.push(`${tag}: poly needs 3+ points`);
    if (e.h && (typeof e.h.v !== 'number' || !e.h.src)) err.push(`${tag}: h must be {v, src}`);
    if (e.h?.src === 'inferred' && !/inferred|approx|assumed/i.test(e.note || e.h.note || '')) warn.push(`${tag}: inferred height without a note`);
    if (e.ev === 'inferred' && !/inferred|approx|assumed/i.test(e.name || e.note || '')) err.push(`${tag}: inferred element must say so in name or note`);
  }
  for (const e of T.constructed || []) {
    const tag = `constructed ${e.kind}:${e.id}`;
    if (!e.id) err.push(`constructed element without id (${e.kind})`); else if (ids.has(e.id)) err.push(`duplicate element id ${e.id}`); ids.add(e.id);
    if (!KINDS.has(e.kind)) err.push(`${tag}: unknown kind`);
    if (e.ev !== SCHEMATIC) err.push(`${tag}: ev must be "${SCHEMATIC}"`);
    if (!e.src || !(e.src === 'inferred' || SRC_RE.test(e.src))) err.push(`${tag}: src must be "inferred" or follow the src grammar`);
    if (!e.basis || e.basis.length < 20) err.push(`${tag}: basis must name the description it is drawn from`);
    if (!/schematic/i.test(e.name || '')) err.push(`${tag}: name must say "schematic"`);
    if (!(e.poly || e.path || e.at)) err.push(`${tag}: no geometry (poly/path/at)`);
    if (e.h && (typeof e.h.v !== 'number' || e.h.src !== 'inferred' || !e.h.note)) err.push(`${tag}: height must be {v, src:"inferred", note: the assumption rule}`);
    if (!e.h && ['wall', 'bastion', 'tower', 'building', 'gate'].includes(e.kind) && e.kind !== 'gate') err.push(`${tag}: schematic ${e.kind} needs an assumed height with its rule`);
    for (const x of e.eras || []) if (!(T.eras || []).some((r) => r.id === x)) err.push(`${tag}: unknown era ${x}`);
    for (const x of [...(e.replaces || []), ...(e.stands_for ? [e.stands_for] : [])]) if (!(T.elements || []).some((r) => r.id === x)) err.push(`${tag}: replaces/stands_for unknown documented element ${x}`);
  }
  for (const e of T.eras || []) { if (!e.id) err.push('era without id'); if (!Array.isArray(e.sources)) err.push(`era ${e.id}: sources must be an array`); }
  for (const [era, d] of Object.entries(T.diffs || {})) {
    if (!(T.eras || []).some((e) => e.id === era)) err.push(`diff for unknown era ${era}`);
    for (const r of d.remove || []) if (!ids.has(r)) err.push(`diff ${era} removes unknown element ${r}`);
    for (const a of d.add || []) if (!a.src) err.push(`diff ${era} adds element without src`);
  }
  return { ok: !err.length, errors: err, warnings: warn };
}

export function constructedSummary(T) { const c = T.constructed || []; return { count: c.length, kinds: [...new Set(c.map((e) => e.kind))], bases: [...new Set(c.map((e) => e.basis))].length }; }

export function evidenceSummary(T) {
  const s = { documented: 0, mapped: 0, inferred: 0, derived: 0, inferredHeights: 0, unknownHeights: 0, documentedHeights: 0 };
  for (const e of T.elements) {
    s[e.ev]++; if (e.src.startsWith('derived:')) s.derived++;
    if (['wall', 'retaining-wall', 'building', 'bastion', 'tower', 'gate', 'temple', 'stupa', 'ruin'].includes(e.kind)) { if (!e.h) s.unknownHeights++; else if (e.h.src === 'inferred') s.inferredHeights++; else s.documentedHeights++; }
  }
  return s;
}

// Legacy adapters: hand-made traces keep their own files; this presents them in the schema for the checks.
export function wrapKumbhalgarh(M) {
  const pts = M.OSM_WALL_TRACE.map(([x, y, h]) => [x * 3, y * 3, h]); // 3 m per plan unit (file header)
  const bb = pts.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [1e9, 1e9, -1e9, -1e9]);
  return {
    schema: SCHEMA, id: 'kumbhalgarh', name: 'Kumbhalgarh', type: 'fort', tier: 'T2', coords: M.RAMPOL_GEO, bounds: bb, legacy: 'src/levels/kumbhalgarh.trace.js',
    elements: [{ id: 'wall', kind: 'wall', path: pts, closed: true, src: 'osm:way/254041054', ev: 'mapped', conf: 0.8, h: { v: 0, src: 'dem:srtm90', note: 'vertex heights are SRTM 90 m samples' } }],
    eras: [{ id: 'today', sources: [] }],
  };
}
export function wrapJanjira(T) {
  const src = 'photo:janjira-drone-trace';
  const el = [{ id: 'wall', kind: 'wall', path: T.wall, closed: true, src, ev: 'documented', conf: 0.7 }];
  (T.bastions || []).forEach((b, i) => el.push({ id: `bastion-${i}`, kind: 'bastion', at: [b.x, b.y], r: b.r, src, ev: 'documented', conf: 0.7 }));
  (T.tanks || []).forEach((t, i) => el.push({ id: `tank-${i}`, kind: 'tank', poly: t.ring || t.pts, src, ev: 'documented', conf: 0.7 }));
  (T.rects || []).forEach((r, i) => el.push({ id: `rect-${i}`, kind: 'ruin', at: [r.x, r.y], w: r.w, d: r.d, rot: r.rot, src, ev: 'documented', conf: 0.6 }));
  const bb = T.wall.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [1e9, 1e9, -1e9, -1e9]);
  return { schema: SCHEMA, id: 'murud-janjira', name: 'Murud-Janjira', type: 'fort', tier: 'T3', coords: [18.2998, 72.9644], bounds: bb, legacy: 'src/levels/janjira.trace.js', heights: T.grid ? { ...T.grid, src: src } : null, elements: el, eras: [{ id: 'today', sources: [] }] };
}
