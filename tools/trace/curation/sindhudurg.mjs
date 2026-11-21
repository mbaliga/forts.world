// Curation for Sindhudurg (batch 2, plan-traced outline). Evidence and conflicts: docs/research/sindhudurg-pass.md.
// Plan: "View and plan of Sinderdroo or Melundy, on the Malabar coast" (Co. John Watson, survey 1765; engraved P. Begbie; publ. A. Dalrymple, 25 July 1774;
// BnF Gallica btv1b532583381 via Wikimedia Commons, public domain, SIN-02), data/plans/sindhudurg/. It is a hydrographic chart, not a fort plan: the fort is
// about 1 cm across. The fort outline (wall line) was traced from a 2x enlargement of a native crop and registered to the OSM island coastline by a
// similarity fit of the silhouette alone (IoU 0.91, one clear peak over rotation 0-360); see data/plans/sindhudurg/registration.json.
// Everything inside the outline (blocks, cavalier) was NOT in the fit. No height, wall thickness, bastion or gate is on the chart.
import { carryOver } from './_common.mjs';

export const TIER = 'T2';
export const STATUS = 'plan-traced';
export const HEADER = [
  'Sindhudurg, Malvan, Maharashtra. Hand-curated trace: the fort wall line and a few blocks and the cavalier from the 1765 Watson chart (registered to OSM, wall line +-30 m), the rest T1.',
  'Base: data/traces/sindhudurg.trace.json (OSM ODbL island coastline, two short wall fragments, 20 buildings, tracks; Terrarium z15 ~30 m SRTM-derived). OSM has no fort outline.',
  'Plan elements carry src plan:watson-1765#sinderdroo and say how far off they may be. The chart draws no bastions, gates or heights, so none are placed on the documented layer.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written descriptions (Wikipedia: wall 30 ft high, 12 ft thick; a travel page: concealed gate at the north-east corner) with assumed heights, and is shown only in the `<era>~built` eras.',
];

// plan frame: pixels of the 2x enlargement of the native crop (1450,3850)-(2350,4400) of the Gallica scan; x right, y down
const OUTLINE_PX = [[640,105],[655,125],[740,190],[820,255],[960,215],[1030,150],[1195,160],[1205,215],[1330,228],[1365,232],[1370,330],[1330,395],[1250,455],[1090,540],[1075,600],[1085,700],[1140,710],[1140,830],[1045,850],[1030,800],[1000,725],[870,730],[760,700],[700,680],[645,640],[640,540],[630,450],[635,445],[590,430],[525,450],[470,515],[410,548],[350,535],[310,450],[305,380],[390,265],[440,215],[540,150],[600,125]];
// the long list above was edited once (indices 26-30 of the first trace replaced by the cove edge); the vertex order is the wall line traversed clockwise on the plan
const BLOCKS_PX = {
  A1: [[695,420],[752,415],[755,485],[698,490]], A2: [[895,475],[942,472],[942,526],[897,528]], B3: [[978,385],[1015,382],[1017,428],[980,430]], B4: [[1098,347],[1122,346],[1122,390],[1098,391]],
  S1: [[648,182],[668,174],[722,252],[702,264]], S2: [[630,228],[650,218],[698,296],[678,310]],
};
const CAVALIER_PX = [1105, 468], CAVALIER_R_PX = 20;
const FIT = { s: 0.68, th: 269, dx: 2, dy: 2 };                  // m per 2x px, degrees (plan x,-y rotated counter-clockwise), metres
const PLAN = 'plan:watson-1765#sinderdroo';

export default function curate(T, h) {
  const coast = h.byId('coastline-1').path;
  const oc = [coast.reduce((a, p) => a + p[0], 0) / coast.length, coast.reduce((a, p) => a + p[1], 0) / coast.length];
  const pm = [OUTLINE_PX.reduce((a, p) => a + p[0], 0) / OUTLINE_PX.length, OUTLINE_PX.reduce((a, p) => a - p[1], 0) / OUTLINE_PX.length];
  const r = FIT.th * Math.PI / 180, co = Math.cos(r), si = Math.sin(r);
  const toOsm = ([px, py]) => { const vx = (px - pm[0]) * FIT.s, vy = (-py - pm[1]) * FIT.s; return [+(vx * co - vy * si + oc[0] + FIT.dx).toFixed(1), +(vx * si + vy * co + oc[1] + FIT.dy).toFixed(1)]; };
  const distSeg = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); };
  const distPath = (p, path) => Math.min(...path.slice(0, -1).map((a, i) => distSeg(p, a, path[i + 1])));

  const ring = OUTLINE_PX.map(toOsm);
  const wallLine = [...ring, ring[0]];                                    // unclosed on purpose: no gate is known, and a kerb-high line is not a barrier
  // independent check: the OSM fort-wall fragment is not in the fit
  const frag = h.byId('wall-24').path;
  const dFrag = frag.map((p) => distPath(p, wallLine));
  console.error(`sindhudurg: OSM wall fragment ${h.byId('wall-24').id} lies ${Math.min(...dFrag).toFixed(0)}-${Math.max(...dFrag).toFixed(0)} m from the plan wall line`);

  h.rename('wall-24', 'wall-osm-north', 'Fort wall fragment · mapped (OSM)');
  h.rename('wall-3', 'wall-osm-inner', 'Wall fragment inside the fort · mapped (OSM)');
  h.byId('wall-osm-inner').name = 'Wall fragment inside the fort · mapped (OSM)';
  h.remove('coastline-2');                                                 // Padmagad rock reaches past the window
  const planIds = [];
  h.add({ id: 'outline', kind: 'outline', poly: ring, src: PLAN, ev: 'documented', conf: 0.4, name: 'Fort wall outline · traced from the 1765 chart, +-30 m',
    note: 'The hatched wall line of "Sinderdroo, or Fort Augustus" on the Watson chart, registered to the OSM island coastline (IoU 0.91). The traced outline encloses 19.0 ha against 19.2 ha for the mapped island; the written sources give 48 acres (19.4 ha).' });
  h.add({ id: 'plan-wall', kind: 'wall', path: wallLine, closed: false, src: PLAN, ev: 'documented', conf: 0.4, name: 'Fort wall line · traced from the 1765 chart, +-30 m',
    note: 'Wall line from the chart; it follows the island rim. Drawn kerb-high: the chart gives no height or thickness. Left unclosed because no gate or opening is drawn and none is invented. A short OSM fragment of the wall lies within ' + Math.max(...dFrag).toFixed(0) + ' m of this line.' });
  planIds.push('outline', 'plan-wall');
  const cav = toOsm(CAVALIER_PX);
  h.add({ id: 'plan-cavalier', kind: 'bastion', at: cav, r: +(CAVALIER_R_PX * FIT.s).toFixed(1), src: PLAN, ev: 'documented', conf: 0.3, name: 'Cavalier and flag (chart "a") · position +-30 m',
    note: 'Round mark lettered "a, Cavalier & Flag" on the chart. Position and radius read from the engraving; height unknown.' });
  planIds.push('plan-cavalier');
  const bnames = { A1: 'Large block beside "A"', A2: 'Walled block', B3: 'Block', B4: 'Block', S1: 'Long barrack range', S2: 'Long barrack range' };
  for (const [k, p] of Object.entries(BLOCKS_PX)) {
    h.add({ id: `plan-block-${k}`, kind: 'building', poly: p.map(toOsm), use: 'yes', src: PLAN, ev: 'documented', conf: 0.25, name: `${bnames[k]} (chart) · footprint +-40 m, unconfirmed`,
      note: 'Dark block on the 1765 chart. Its position was not confirmed against any OSM building, and many more small blocks and houses are drawn that are not traced.' });
    planIds.push(`plan-block-${k}`);
  }
  // blocks vs OSM buildings (not in the fit): how far is each plan block from the nearest mapped building?
  const osmB = T.elements.filter((e) => e.kind === 'building' && e.src.startsWith('osm:')).map((e) => [e.poly.reduce((a, p) => a + p[0], 0) / e.poly.length, e.poly.reduce((a, p) => a + p[1], 0) / e.poly.length]);
  for (const [k, p] of Object.entries(BLOCKS_PX)) { const c = p.map(toOsm); const m = [c.reduce((a, q) => a + q[0], 0) / c.length, c.reduce((a, q) => a + q[1], 0) / c.length]; console.error(`sindhudurg: plan block ${k} nearest OSM building ${Math.min(...osmB.map((b) => Math.hypot(b[0] - m[0], b[1] - m[1]))).toFixed(0)} m`); }

  h.byId('marker-0').name = 'Sindhudurg Fort · mapped point (OSM node, historic=fort)';
  const mapped = ['coastline-1', 'sea-0', 'wall-osm-north', 'wall-osm-inner', 'marker-0'];
  const keep = [...mapped, ...planIds];
  const restore = Object.fromEntries(planIds.map((id) => { const e = h.byId(id); return [id, { ev: 'documented', conf: e.conf, name: e.name, note: e.note }]; }));
  carryOver(T, '1667', keep, { note: 'the 1765 chart and the present OSM lines are assumed to show the fort as completed in 1667; no earlier plan was found' });
  carryOver(T, '1765', keep, { note: 'present mapped line assumed unchanged since the 1765 chart', modify: { ...restore } });
  { const m = T.diffs['1765'].modify['coastline-1']; if (m) { m.ev = 'mapped'; m.conf = 0.6; m.name = 'Island coastline · mapped, matches the 1765 chart (IoU 0.91)'; } }

  // Constructed (schematic) layer: wall from the written dimensions; the gate from a written description of where it is. Heights are assumptions with their rule.
  const cx = ring.reduce((a, p) => a + p[0], 0) / ring.length, cy = ring.reduce((a, p) => a + p[1], 0) / ring.length;
  let gate = null, gd = 1e9;                                               // wall point nearest the north-east bearing (45 deg) from the centre
  for (let i = 0; i < wallLine.length - 1; i++) for (let t = 0; t < 1; t += 0.05) {
    const q = [wallLine[i][0] + (wallLine[i + 1][0] - wallLine[i][0]) * t, wallLine[i][1] + (wallLine[i + 1][1] - wallLine[i][1]) * t];
    const brg = (Math.atan2(q[0] - cx, q[1] - cy) * 180 / Math.PI + 360) % 360, d = Math.abs(brg - 45) + 0 * Math.hypot(q[0] - cx, q[1] - cy);
    if (d < gd) { gd = d; gate = q; }
  }
  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: ring, closed: true, stands_for: 'plan-wall', replaces: ['plan-wall'], thick: 3.7, src: PLAN, ev: 'schematic', conf: 0.2,
      name: 'Rampart · schematic, 9.1 m high and 3.7 m thick assumed', basis: 'Drawn on the chart wall line. Wikipedia gives a rampart 30 ft (9.1 m) high and 12 ft (3.7 m) thick, about 2 miles (3 km) long, with no survey cited; the same page flags the passage as needing citations. The 42 bastions of the popular accounts are not drawn: no source gives their positions.',
      h: { v: 9.1, src: 'inferred', note: '30 ft from Wikipedia, uncited; applied uniformly round the wall' } },
    { id: 'c-gate', kind: 'gate', wall: 'plan-wall', at: [+gate[0].toFixed(1), +gate[1].toFixed(1)], w: 4, src: 'inferred', ev: 'schematic', conf: 0.1,
      name: 'Concealed main gate · schematic, position assumed',
      basis: `Travel and tourism pages describe a concealed, curved (gomukhi) main gate at the north-east corner of the fort. No plan or survey gives its position, so the opening is put on the wall at the bearing 45 deg from the centre of the outline; it could be 100 m or more from the real gate. A plain 4 m opening is assumed.` },
  ];

  T.eras = [
    { id: '1667', year: '1667', label: 'Completed by Shivaji', short: '1667', lens: 'none',
      summary: 'The island fort at Kurte, built from 1664 and finished in 1667, shown as the later chart and the present coast draw it.',
      basis: 'Wikipedia: foundation 25 November 1664, built 1664-67, Hiroji Indulkar chief architect, 48 acres (SIN-16 for the tourism description). The drawn outline is the 1765 chart carried back 98 years, marked inferred.',
      conjecture: 'No plan of 1667 was found. The island rim and the 1765 wall line are carried back unchanged; any later change to the walls or buildings is not known.',
      sources: ['SIN-02', 'SIN-16'],
      facts: ['Construction started on 25 November 1664 and ran to 1667 (Wikipedia, which flags other claims on the page as needing citations).', 'Hiroji Indulkar is named chief architect; Shivaji reportedly brought 200 Vaddera workers (Wikipedia).'] },
    { id: '1765', year: '1765', label: 'Watson\'s survey', short: 'Fort Augustus', lens: 'engraving',
      summary: 'The fort as surveyed by Co. John Watson in 1765, labelled "Sinderdroo, or Fort Augustus", and published by Dalrymple in 1774.',
      basis: 'The chart "View and plan of Sinderdroo or Melundy, on the Malabar coast", registered to OSM by fitting the island silhouette only (IoU 0.91). The chart\'s printed scale bar agrees with the fitted scale to 8%.',
      conjecture: 'It is a hydrographic chart: the fort is about 1 cm across, the wall is a hatched line, and no bastion, gate, height or thickness can be read. About 30 small blocks and houses are drawn that are not traced.',
      sources: ['SIN-02', 'SIN-16'],
      facts: ['The chart legend: A. "Sinderdroo, or Fort Augustus", a. "Cavalier, & Flag on D°", B. Pudendroo, C. Rajacoote Fort.', 'Imprint: published according to Act of Parliament by A. Dalrymple, 25 July 1774; the survey is dated 1765.'] },
    { id: 'today', year: 'Today', label: 'ASI monument', short: 'Monument', lens: 'none',
      summary: 'A protected monument on Kurte island off Malvan, reached by boat, with a few families still living inside.',
      basis: 'The OSM island coastline, two short wall fragments and about 20 buildings and tracks, plus the wall line, cavalier and blocks traced from the 1765 chart.',
      conjecture: 'The chart elements are 1765 positions with the registration error above; whether each survives is not checked. Heights are unknown (kerb-high) in this evidence layer; see the constructed layer.',
      sources: ['SIN-02', 'SIN-16', 'MMI-06'],
      facts: ['Protected monument under the Archaeological Survey of India; closed to tourists in the rains because of high tides (Wikipedia, both marked as needing citations).', 'Inscribed in 2025 as a component of "Maratha Military Landscapes of India" (Wikipedia; SIN-12..15 are the dossier, not reusable here).'] },
  ];
}
