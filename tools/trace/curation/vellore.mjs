// Vellore Fort, Tamil Nadu. T1 mapped geometry with a separate, explicitly schematic 3D view.
// The ASI annexure is a parking layout and is not used as an architectural survey.
import { levelInlandWaters, bastionRing } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'outline+schematic';
export const HEADER = [
  'Vellore Fort, Tamil Nadu. T1 mapped geometry with a separate schematic 3D view; no measured architectural plan was found.',
  'Base: data/traces/vellore.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 557512110 (273 vertices). Walls, roads, two waterways, internal building footprints and the Jalakandeswarar Temple zone remain mapped.',
  'The separate constructed view uses the mapped perimeter, government descriptions and official photo references. The 2025 ASI annexure is a parking layout only, not a fort plan. No gate is added without a verified location.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 557512110)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('vellore: levelInlandWaters skipped', e.message); }
  const W = h.byId('outline-wall');
  const temple = h.byId('zone-26');
  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: W.path, closed: true, stands_for: W.id, replaces: [W.id], thick: 1,
      src: W.src, ev: 'schematic', conf: 0.2, eras: ['today'], merlon: false,
      name: 'Granite perimeter wall · schematic plan line, elevation unknown',
      basis: 'The Tamil Nadu district describes a rectangular fort built from massive cut granite and highlights its moat; the perimeter follows OSM way 557512110. No wall height or section is available, so it is shown only as a low plan line.',
      h: { v: 0.5, src: 'inferred', note: 'display-only kerb height for a plan line; it does not represent the fort wall height' } },
    ...bastionRing({ path: W.path, spacing: 150, r: 8, h: 11, hNote: 'assumed slightly above the curtain; no measured bastion height was found', src: W.src,
      eras: ['today'], idPrefix: 'c-bastion',
      basis: 'Official district photographs show projecting round bastions along the Vellore ramparts. Their exact number, spacing and sizes are not traced from a measured plan; these evenly spaced forms are schematic.' }),
    { id: 'c-moat', kind: 'water', waterRing: true, noMarker: true, path: W.path, width: 17, gap: 2, src: W.src, ev: 'schematic', conf: 0.15, eras: ['today'],
      name: 'Moat water band · schematic width and edge',
      basis: 'The Vellore District describes the fort as surrounded by a moat, and official photographs show water outside the granite ramparts. This water band follows the mapped perimeter; its width and continuity are illustrative.',
      note: 'Water surface is set to the lowest Terrarium DEM value sampled along the illustrative band; this derived level is not a measured moat elevation.' },
    ...(temple ? [{ id: 'c-temple', kind: 'temple', poly: temple.poly, replaces: [], src: temple.src, ev: 'schematic', conf: 0.2, eras: ['today'], style: 'dravida', tiers: 6, w: 12, h: 24, md: 11, mdw: 18, mh: 5.5,
      unreachableOk: true, unreachableNote: 'the temple massing is schematic and the mapped precinct remains closed; view from outside',
      name: 'Jalakandeswarar Temple · Dravidian gopuram-form schematic, 24 m tower assumed',
      basis: 'The Vellore District identifies Jalakandeswarar Temple inside the fort, and official photographs show its tall Dravidian gateway tower rising above the canopy. The footprint follows the mapped temple precinct; the tower form and dimensions are illustrative.',
      h: { v: 24, src: 'inferred', note: 'assumed upper tower massing to show the photographed gopuram silhouette; no measured section was found' } }] : []),
    { id: 'c-tree-cover', kind: 'zone', zone: 'tree-cover', noMarker: true, poly: T.elements.find((e) => e.kind === 'outline').poly, count: 260, minDist: 7, src: T.elements.find((e) => e.kind === 'outline').src, ev: 'schematic', conf: 0.15, eras: ['today'],
      avoid: [...(temple ? [temple.poly] : []), ...T.elements.filter((e) => e.kind === 'building').map((e) => e.poly)],
      types: { round: 4, neem: 3, banyan: 1, palm: 2 }, s: [0.9, 1.5],
      name: 'Tree canopy · schematic scattering',
      basis: 'Official district photographs and the supplied Vellore reference show dense tree cover within and around the fort. Trees are scattered only inside the mapped fort outline, keeping the temple precinct and traced building footprints clear.' },
  ];
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'Explore the granite ramparts and moat, with tree cover and the Jalakandeswarar Temple gopuram in the constructed view.',
      basis: 'Mapped geometry from OpenStreetMap and Terrarium terrain. Constructed view is separately tinted and uses only schematic heights and forms.',
      conjecture: 'No measured architectural plan or historic fort drawing has been registered. The 2025 ASI annexure is a visitor-parking layout, not a fort plan. Bastion spacing, temple massing and constructed heights are assumptions; no gate is reconstructed. Moat water level and bathymetry remain derived or unmapped.',
      sources: [],
      facts: [] },
  ];
}
