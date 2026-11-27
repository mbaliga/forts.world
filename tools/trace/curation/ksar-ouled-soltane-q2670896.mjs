// Curation for Ksar Ouled Soltane, Tataouine, Tunisia (world batch, T1 + schematic constructed layer).
// Evidence and conflicts: docs/research/ksar-ouled-soltane-q2670896-pass.md.
// No plan, survey drawing or dated image was read (two search passes, tertiary sources only), so there is no T2: the documented layer is the OSM outline,
// carried back and marked inferred. The constructed layer draws the written description (two courtyards ringed by barrel-vaulted ghorfas stacked four
// storeys high) as bays of vaulted cells placed on the envelope of the OSM outline; the row layout is assumed.
import { carryOver, rectAt } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Ksar Ouled Soltane, Tataouine governorate, Tunisia. Hand-curated trace, tier T1 (OSM outline of the ksar, DEM terrain) plus a schematic constructed layer; T2 is blocked until a plan or survey is found.',
  'Base: data/traces/ksar-ouled-soltane-q2670896.trace.json (OSM ODbL relation 2516832; Terrarium z15, ~30 m SRTM-derived: the DEM cannot show the ghorfa terraces).',
  'Eras: 15c (first courtyard only), 19c (second courtyard added), today (mapped surroundings). The outline is one polygon covering both courtyards; it is carried back to both historic eras as a plan line, marked inferred.',
  'Constructed layer: ghorfas as vaulted bays (two cells per bay) in a ring round each courtyard. Heights, bay width and row depth are assumptions with their rule; no gate, stair, mosque or oil press is placed (no position found).',
];

// A courtyard ring of ghorfa bays. Local frame: centre c, outer size W x D, rotation rot (deg). Row depth `dep`, cell width `cw`, two cells per bay.
// `gap` = [side, centre offset, width]: an entrance opening left in a side (assumed; position unknown).
function ring({ key, c, W, D, rot, dep, cw, storeys, sh, eras, label, basis, gaps = {} }) {
  const out = [], a = rot * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
  const toW = ([x, y]) => [+(c[0] + x * ca - y * sa).toFixed(1), +(c[1] + x * sa + y * ca).toFixed(1)];
  const bay = 2 * cw, H = +(storeys * sh).toFixed(1);
  let n = 0;
  const row = (side, len, off, fixed, along, skipAt) => { // along: 'x' for rows running in local x
    const k = Math.floor(len / bay), start = off - (k * bay) / 2 + bay / 2;
    for (let i = 0; i < k; i++) {
      const s = start + i * bay;
      if (skipAt && Math.abs(s - skipAt[0]) < skipAt[1] / 2 + bay / 2 - 0.01) continue;
      const lc = along === 'x' ? [s, fixed] : [fixed, s];
      const poly = [[-bay / 2 + 0.1, -dep / 2], [bay / 2 - 0.1, -dep / 2], [bay / 2 - 0.1, dep / 2], [-bay / 2 + 0.1, dep / 2]]
        .map(([x, y]) => (along === 'x' ? [lc[0] + x, lc[1] + y] : [lc[0] + y, lc[1] + x])).map(toW);
      out.push({ id: `c-${key}-${side}-${++n}`, kind: 'building', poly, roof: 'vault', roofH: 1.1, unreachableOk: true, unreachableNote: 'a solid schematic block of vaulted cells with no stair or door drawn (the external stairs are not modelled); look at it from the courtyard.',
        src: 'inferred', ev: 'schematic', conf: 0.12, eras, name: `Ghorfa bay ${side}${n} (${label}) · schematic, ${H} m assumed`, basis,
        h: { v: H, src: 'inferred', note: `${storeys} storeys x ${sh} m: sources say up to four storeys and a room about 2 m high (socks-studio); ${sh} m per storey adds the vault crown and slab, an assumption` } });
    }
  };
  // south and north rows span the full width, west and east rows fill between them
  row('S', W, 0, -D / 2 + dep / 2, 'x', gaps.S);
  row('N', W, 0, D / 2 - dep / 2, 'x', gaps.N);
  row('W', D - 2 * dep, 0, -W / 2 + dep / 2, 'y', gaps.W);
  row('E', D - 2 * dep, 0, W / 2 - dep / 2, 'y', gaps.E);
  return out;
}

export default function curate(T, h) {
  h.byId('outline').name = 'Ksar Ouled Soltane outline · mapped (OSM relation 2516832, historic=ruins), plan line only';
  h.byId('outline').note = 'One polygon, about 100 x 45 m, round both courtyards; the courtyards, rows and stairs are not mapped separately.';
  const bnames = { 'building-6': 'beside the south edge', 'building-9': 'NE compound', 'building-10': 'NE compound', 'building-11': 'east block', 'building-12': 'NE compound', 'building-15': 'north-west', 'building-16': 'north', 'building-17': 'north', 'building-18': 'north-east row', 'building-20': 'far east' };
  for (const [id, where] of Object.entries(bnames)) { const e = h.byId(id); e.name = `Mapped building (${where}) · ${e.src.replace('osm:way/', 'OSM way ')}, use not stated`; e.note = 'OSM footprint with no tags: whether it is a house, shop, cafe or later addition is not stated. The ksar is reported to have a new cafe (looklex).'; }
  carryOver(T, '15c', ['outline'], { note: 'the mapped outline covers both courtyards; the first-phase extent is not mapped separately, so the whole outline is drawn as the site extent only' });
  carryOver(T, '19c', ['outline'], { note: 'the mapped outline is assumed to mark the ksar after the second courtyard was added; no dated plan was found' });

  const BA = 'Written descriptions (Wikipedia: two courtyards, each ringed by multi-storey vaulted ghorfas; amusingplanet: four storeys, steep external stairs to a single door each; socks-studio: barrel-vaulted rooms 4-5 m long, about 2 m high, single central door, vaults in continuous series). Placement follows the envelope of the OSM outline; bay width and row depth are assumed.';
  const A = ring({ key: 'a', c: [-41, 0.5], W: 38, D: 29, rot: -5, dep: 5.5, cw: 2.5, storeys: 4, sh: 2.8, eras: ['15c', '19c', 'today'], label: 'first courtyard, 15th c.', basis: BA, gaps: { E: [0, 5] } });
  const B = ring({ key: 'b', c: [15, -1], W: 44, D: 38, rot: 13, dep: 5.5, cw: 2.5, storeys: 4, sh: 2.8, eras: ['19c', 'today'], label: 'second courtyard, 19th c.', basis: BA, gaps: { W: [0, 5] } });
  T.constructed = [...A, ...B];

  T.eras = [
    { id: '15c', year: '15th c.', label: 'First courtyard', short: '15th c.', lens: 'none',
      summary: 'The oldest part of the ksar as sources date it: a single courtyard ringed by vaulted ghorfas, a fortified communal granary on a hill.',
      basis: 'Wikipedia, amusingplanet and guide-voyage-tunisie say built in the 15th century by Berbers, of adobe, on a hilltop against raiders. The drawn outline is the present mapped one, carried back, marked inferred.',
      conjecture: 'Which part is the oldest is not stated by any source read, so the west courtyard is chosen for the first phase from the outline shape alone (assumed). No plan, no count of ghorfas for this date ("hundreds") and no storey count for this date; four storeys is the present description. Gate and stair positions are unknown.',
      sources: ['KSAR-02', 'KSAR-03', 'KSAR-04', 'KSAR-05', 'KSAR-06'],
      facts: ['Built in the 15th century (amusingplanet, guide-voyage-tunisie, Atlas Obscura); the ghorfa type in general is attributed to the 14th century (Wikipedia, Ghorfa).', 'Hundreds of ghorfas at first; each allotted to one family (amusingplanet).', 'Ghorfa rooms are barrel-vaulted with one door, stacked up to four or five levels with external stairs (Wikipedia, Ghorfa; socks-studio).'] },
    { id: '19c', year: '19th c.', label: 'Second courtyard added', short: '19th c.', lens: 'none',
      summary: 'The ksar after its extension into a second courtyard, about 400 ghorfas in all, the two courtyards linked by a palm-wood passage.',
      basis: 'amusingplanet and guide-voyage-tunisie: second courtyard added in the 19th century, about 400 ghorfas afterwards, courtyards joined by a passage of palm wood.',
      conjecture: 'The east courtyard is taken as the later one by assumption. The palm-wood passage is not drawn (no position). The 19th-century date is "the 19th century" only; no year, builder or plan was found. Ghorfa count (about 400) is not matched cell by cell.',
      sources: ['KSAR-03', 'KSAR-04'],
      facts: ['Extended into a second courtyard in the 19th century; about 400 ghorfas after the extension (amusingplanet).', 'The two courtyards are connected by a passage made of palm wood (amusingplanet, guide-voyage-tunisie).'] },
    { id: 'today', year: 'Today', label: 'Heritage site', short: 'Present', lens: 'none',
      summary: 'A tourist site 20 km south of Tataouine reached from a small modern village, repaired in 1997 and known as a Star Wars location.',
      basis: 'The OSM outline of the ksar and 10 untagged building footprints and two wall lines near it, plus the DEM.',
      conjecture: 'Every height is unknown (kerb-high). Which footprints are cafe, houses or additions is not stated. Repairs of 1997 used cement in place of mud and brick (amusingplanet); the constructed layer does not distinguish them.',
      sources: ['KSAR-01', 'KSAR-03', 'KSAR-07'],
      facts: ['Repaired in 1997 and restored to its original state, with cement instead of the original mud and brick (amusingplanet).', 'Used as the Mos Espa slave quarters in Star Wars: The Phantom Menace (Wikipedia); a new cafe is now an important function (looklex).', 'Coordinates 32.788492, 10.515037 (Wikipedia).'] },
  ];
}
