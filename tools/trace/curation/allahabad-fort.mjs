// Curation for Allahabad Fort (Prayagraj), Uttar Pradesh. Evidence: docs/research/allahabad-fort-pass.md.
// Tier T1 on the documented layer (OSM outline, the mapped Ashoka pillar, terrain); a labelled constructed layer is drawn from written descriptions only.
// The outline is OSM way 903260229 (tagged historic=monument, Q771105, about 782 x 791 m). It is the fort-area boundary, not a surveyed wall: no wall line is mapped.
import { levelInlandWaters, bastionRing, gateTowers } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Allahabad Fort (Prayagraj), Uttar Pradesh. Auto-T1 trace with light curation, tier T1 (outline-only); T2 is blocked on a plan.',
  'Base: data/traces/allahabad-fort.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 903260229 (tagged historic=monument, Q771105, about 782 x 791 m); no wall line is mapped. The OSM way for the Ashoka pillar (1169644585) is kept as a mapped point.',
  'Constructed layer (era 1583 and today, tinted): rampart on the mapped outline, angular landward bastions, gate-tower pairs where named mapped roads end at the outline (two found), the Ashoka pillar. Heights are assumptions with their rule stated.',
];

// where a path crosses the outline ring: first crossing point and the outline segment index
const segHit = (a, b, c, d) => { const r = [b[0] - a[0], b[1] - a[1]], s = [d[0] - c[0], d[1] - c[1]], den = r[0] * s[1] - r[1] * s[0]; if (Math.abs(den) < 1e-9) return null; const t = ((c[0] - a[0]) * s[1] - (c[1] - a[1]) * s[0]) / den, u = ((c[0] - a[0]) * r[1] - (c[1] - a[1]) * r[0]) / den; return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? [a[0] + r[0] * t, a[1] + r[1] * t] : null; };

export default function curate(T, h) {
  const O = h.byId('outline');
  O.name = 'Fort outline · mapped (OSM way 903260229)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('allahabad-fort: levelInlandWaters skipped', e.message); }

  // the Ashoka pillar as OSM maps it (way 1169644585, historic=monument): a mapped point at its first node
  const PILLAR = [-72, -88];
  h.add({ id: 'marker-pillar', kind: 'marker', at: PILLAR, name: 'Allahabad Pillar · mapped point (OSM way 1169644585)', src: 'osm:way/1169644585', ev: 'mapped', conf: 0.8, osmTags: { historic: 'monument' }, text: 'The monument OpenStreetMap maps as "Allahabad Pillar" (the Ashokan pillar with later inscriptions). Only its map position is used; no height is mapped.' });

  // gate candidates: the end of a named mapped road within 20 m of the outline, snapped to the nearest outline point; one per road name, 120 m apart
  const snap = (p) => { let best = [1e9, p]; for (let j = 0; j < O.poly.length; j++) { const a = O.poly[j], b = O.poly[(j + 1) % O.poly.length], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1, u = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2)), q = [a[0] + u * dx, a[1] + u * dy], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q]; } return best; };
  const crossings = [];
  for (const r of T.elements.filter((e) => e.kind === 'road' && e.name && /kila|akshayavat|triveni|jagdish|mahavir/i.test(e.name))) for (const end of [r.path[0], r.path[r.path.length - 1]]) { const [d, q] = snap(end); if (d < 20) crossings.push({ at: [+q[0].toFixed(1), +q[1].toFixed(1)], name: r.name, road: r.id }); }
  const gates = [];
  for (const c of crossings) if (!gates.some((g) => g.name === c.name || Math.hypot(g.at[0] - c.at[0], g.at[1] - c.at[1]) < 120)) gates.push(c);
  const G3 = gates.slice(0, 3);

  const ALL = ['1583', 'today'];
  const SRC = 'Wikipedia "Allahabad Fort" and a heritage guide (secondary)';
  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: O.poly, closed: true, thick: 6, merlon: true, src: 'inferred', ev: 'schematic', conf: 0.1, eras: ALL, h: { v: 21, src: 'inferred', note: 'no height is given for this fort; 21 m is the Agra Fort rampart height (Akbar\'s other great fort, Britannica) used as an analogue' },
      name: 'Rampart on the mapped outline · schematic, 21 m assumed by analogy', basis: `${SRC}: Akbar built the fort in 1583 on the Yamuna bank near the confluence, with three great gallery-gates flanked by high towers. No wall line is mapped, so the rampart is drawn on the OSM outline, which is a site boundary and not a survey.` },
    ...bastionRing({ path: O.poly, spacing: 80, r: 7, h: 22, hNote: 'assumed a little above the 21 m rampart', angular: true, eras: ALL,
      skipIf: (p) => p[1] < -250, // the Yamuna runs along the south side: no landward bastions there
      basis: `${SRC}: the landward side has several angular projections like European-style bastions. Spacing is regular and the side chosen (north and west, away from the Yamuna) is a reading of the map; positions are not evidence.` }),
    ...G3.map((g, i) => ({ id: `c-gate-${i + 1}`, kind: 'gate', wall: 'c-wall', at: g.at, w: 5, src: 'inferred', ev: 'schematic', conf: 0.1, eras: ALL, name: `Gate ${i + 1} (${g.name}) · schematic opening`, basis: `${SRC}: three gate-galleries. A 5 m opening is cut where the mapped ${g.name} (OSM) ends at the outline so that the constructed fort can be entered; its true position is not documented.` })),
    ...G3.flatMap((g, i) => gateTowers({ wallPath: [...O.poly, O.poly[0]], gateAt: g.at, id: `c-gtower-${i + 1}`, r: 5, h: 24, hNote: 'assumed taller than the rampart', top: 'chhatri', gap: 10, eras: ALL,
      basis: `${SRC}: three gallery-gates flanked by high towers. Which road meets which gate is not documented: this pair stands where the mapped ${g.name} (OSM) ends at the outline, a guess at one gate approach, drawn schematically.` })),
    { id: 'c-ashoka-pillar', kind: 'tower', at: PILLAR, r: 0.7, h: { v: 10.6, src: 'inferred', note: 'about 10.60 m high per the written description (secondary); drawn as a plain shaft without its lion capital' }, src: 'osm:way/1169644585', ev: 'schematic', conf: 0.3, eras: ALL,
      name: 'Ashoka pillar · schematic, 10.6 m', basis: `${SRC}: an Ashokan pillar about 10.60 m high stands in the fort (about 230 BC; a Persian-script inscription was added under Jahangir). Its map position is the OSM monument; the shaft is a plain cylinder.`, unreachableOk: true, unreachableNote: 'a solid schematic shaft; look at it from beside.' },
  ];
  // a gate cut is not drawn on the schematic rampart: the passages are left to the tower pairs and the doc layer; no passage is invented
  T.__gateNotes = G3.map((g) => g.name);

  // 1583: the documented layer is only the mapped outline (carried back); everything else is the constructed layer
  { const e = T.elements.find((x) => x.id === 'outline'); T.diffs ||= {};
    T.diffs['1583'] = { remove: T.elements.filter((x) => x.id !== 'outline').map((x) => x.id), add: [], modify: { outline: { ev: 'inferred', conf: 0.3, name: 'Fort outline · carried back, inferred', note: 'the present mapped outline assumed unchanged since 1583; no earlier plan was found' } } }; void e; }

  T.eras = [
    { id: '1583', year: '1583', label: "Akbar's fort", short: 'Akbar 1583', lens: 'none',
      summary: "Akbar's largest fort, founded 1583 where the Yamuna meets the Ganga: a high rampart, angular landward bastions and three great gate-galleries, enclosing the Ashokan pillar and the Akshayavat tree.",
      basis: 'Documented layer: only the mapped site outline, carried back (inferred). Constructed layer: written descriptions only.',
      conjecture: 'No plan, survey or early view was read. Wall line, heights, bastion count and gate positions are assumptions. Not drawn: Patalpuri temple, Saraswati Koop, Akshayavat, the Zenana and Jodha Bai palaces and the river frontage, because none has a source position here.',
      sources: [], facts: [`${SRC}: foundation year 1583; historian William Finch estimated 5,000 to 20,000 workers over about forty years; in 1600 Prince Salim set up his court here.`] },
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain, with the mapped Ashoka pillar. The fort is largely held by the Indian Army; only a small part is open to the public.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM. Constructed view: written descriptions only.',
      conjecture: 'Heights are unknown (kerb-high) on the documented layer. Missing: a plan with the wall circuit, gates, Patalpuri temple and the river frontage; wall heights; which parts are army-held and unmapped.',
      sources: [], facts: [`${SRC}: British East India Company troops garrisoned the fort from 1765; ceded by the Nawab of Awadh in 1798; it became a major military store depot.`] },
  ];
}
