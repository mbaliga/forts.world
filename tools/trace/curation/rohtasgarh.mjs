// Curation for Rohtasgarh, Bihar (alpha-R batch, 2026-11-11). Evidence and conflicts: docs/research/rohtasgarh-pass.md.
// No plan, survey drawing or dated image of the fort was reached (the Commons search needed an approval that was not given), so nothing is traced from a plan.
// The mapped lines (the 216 x 243 m castle outline, the plateau-edge city wall, two ruin footprints, one fort footprint, the cliff, roads) are carried back as inferred.
// The constructed layer draws the one mapped wall at an assumed height; no gate, palace, temple or tank is placed because none has a plan position.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Rohtasgarh Fort, Bihar. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/rohtasgarh.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived). Scene is +-1100 m: the plateau fort is far larger than this window.',
  'The OSM city wall (way 119221888) runs past the DEM window on the east; it is clipped to the window so no wall is drawn over missing terrain.',
  'The constructed (schematic) layer in `constructed[]` is a single wall with an assumed height, shown only in the `<era>~built` eras.',
];

// keep the longest run of an open path that lies inside |x|,|y| <= lim, cutting the end segments at the window edge
function clipPath(path, lim) {
  const inside = (p) => Math.abs(p[0]) <= lim && Math.abs(p[1]) <= lim;
  const cut = (a, b) => { // point where segment a->b crosses the window edge (a inside, b outside)
    let t = 1;
    for (const [k, s] of [[0, 1], [0, -1], [1, 1], [1, -1]]) { const d = b[k] - a[k]; if (d * s > 0) t = Math.min(t, (s * lim - a[k]) / d); }
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  };
  const runs = []; let run = [];
  for (let i = 0; i < path.length; i++) {
    const p = path[i];
    if (inside(p)) { if (!run.length && i > 0) run.push(cut(p, path[i - 1])); run.push(p); }
    else { if (run.length) { run.push(cut(run[run.length - 1], p)); runs.push(run); run = []; } }
  }
  if (run.length) runs.push(run);
  runs.sort((a, b) => b.length - a.length);
  return (runs[0] || []).map((p) => [+p[0].toFixed(1), +p[1].toFixed(1)]);
}

export default function curate(T, h) {
  h.byId('outline').name = 'Castle outline · mapped (OSM way 119221893, "Rohtasgarh Fort"), 216 x 243 m: part of the site only';

  const wall = h.all('wall').find((w) => w.src === 'osm:way/119221888');
  const before = wall.path.length;
  wall.path = clipPath(wall.path, 1090);
  wall.name = 'Plateau-edge wall · mapped (OSM way 119221888, barrier=city_wall), clipped to the scene';
  wall.note = `${wall.note ? wall.note + '; ' : ''}The mapped way is about 2.4 km long and runs east past the 1.1 km DEM window; ${before - wall.path.length} vertices outside it are cut. Height is not mapped.`;
  console.error(`rohtasgarh: wall ${before} -> ${wall.path.length} vertices after clipping`);

  for (const z of h.all('zone')) {
    if (z.src === 'osm:way/521506107') z.name = 'Fort footprint · mapped (OSM way 521506107, historic=fort), 133 x 196 m, unnamed';
    else z.name = `Ruins · mapped (${z.src.replace('osm:', 'OSM ')}, historic=ruins), unnamed`;
  }

  const keep = [h.byId('outline').id, wall.id, ...h.all('cliff').map((c) => c.id)];
  carryOver(T, '1597', keep, { note: 'the present mapped line assumed to show the fort at the time of the Hathiya Pol (1597, Man Singh); no plan of that date was found' });

  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: wall.path, closed: false, stands_for: wall.id, replaces: [wall.id], thick: 3, src: wall.src, ev: 'schematic', conf: 0.2,
      name: 'Plateau-edge wall · schematic, 6 m high and 3 m thick assumed',
      basis: 'Drawn on the mapped city-wall line. Secondary sources describe the plateau fort as walled with many gates (83 are counted) but give no wall height or thickness; both are assumed.',
      h: { v: 6, src: 'inferred', note: 'no source gives a wall height; 6 m is a typical hill-fort curtain, applied to the whole mapped line' } },
  ];

  T.eras = [
    { id: '1597', year: '1597', label: 'Man Singh\'s Rohtas', short: '1597', lens: 'none',
      summary: 'The plateau fort under Raja Man Singh, Akbar\'s governor of Bihar, around the date given for the Hathiya Pol; drawn as the present mapped castle outline and wall carried back.',
      basis: 'Secondary web sources: Hathiya Pol built 1597; Man Singh built the Mahal Sarai (a four-storey palace with a cupola), cleared tanks and laid out gardens.',
      conjecture: 'No plan or dated image was read. Only the mapped outline, plateau-edge wall and cliff are carried back about 430 years unchanged. The palace, gates, mosque, temples and tanks are not drawn: none has a plan position.',
      sources: [],
      facts: ['The Hathiya Pol (Elephant Gate) is dated 1597 and is the largest gate (web sources, no builder named).', 'Man Singh made Rohtas a headquarters and built the palace on a north-south axis with its entrance to the west (secondary; the dates given by one page, 1558-9, do not fit his career, so they are not used).', 'Sher Shah took the fort from its Hindu ruler in 1539 by a ruse; Haibat Khan\'s Jami Masjid is dated 1543 (secondary).', 'The fort is counted as having 83 gates and remains spread over about 42 km2 (secondary).'] },
    { id: 'today', year: 'Today', label: 'Ruined plateau fort', short: 'Ruined fort', lens: 'none',
      summary: 'A ruined plateau fort on the Kaimur hills above the Son valley, reached by about 2,000 steps; the map here holds the castle outline, one stretch of plateau wall, two ruin footprints and the cliff.',
      basis: 'The OSM castle outline, plateau-edge wall, two ruin footprints, one fort footprint, cliff, bridges and roads inside a 1.1 km window.',
      conjecture: 'Heights are unknown (kerb-high) on this evidence layer. Only a small part of the 42 km2 site is mapped here, so the scene shows no gate, palace, temple or tank.',
      sources: [],
      facts: ['Mapped castle outline about 216 x 243 m (OSM way 119221893, wikidata Q11946159).', 'The mapped plateau wall is about 2.4 km long and runs east beyond this scene.', 'Standing monuments named in secondary sources include the Aina Mahal / Man Singh palace, Habsh Khan\'s mausoleum, the Jami Masjid, a Ganesh temple and the Rohtasan (Harishchandra) temple; none is positioned here.', '1763: Mir Kasim fled here and the fort passed to Captain Goddard; 1857: Amar Singh held out until a British blockade ended it (secondary).'] },
  ];
}
