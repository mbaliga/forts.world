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
    ...(temple ? [{ id: 'c-temple', kind: 'building', poly: temple.poly, replaces: [], src: temple.src, ev: 'schematic', conf: 0.15, eras: ['today'], roof: 'flat', merlon: false,
      unreachableOk: true, unreachableNote: 'a solid schematic mass of the mapped temple precinct; view from outside',
      name: 'Jalakandeswarar Temple precinct · schematic massing, 16 m assumed',
      basis: 'The Vellore District identifies Jalakandeswarar Temple within the fort; the polygon is the OSM-mapped temple area. This massing does not reproduce the measured Dravidian temple plan or tower profile.',
      h: { v: 16, src: 'inferred', note: 'assumed blockout height for the temple precinct; no measured section was found' } }] : []),
  ];
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'Explore Vellore Fort’s mapped walls, moat waterways and interior footprints, with an optional schematic 3D reconstruction layer.',
      basis: 'Mapped geometry from OpenStreetMap and Terrarium terrain. Constructed view is separately tinted and uses only schematic heights and forms.',
      conjecture: 'No measured architectural plan or historic fort drawing has been registered. The 2025 ASI annexure is a visitor-parking layout, not a fort plan. Bastion spacing, temple massing and constructed heights are assumptions; no gate is reconstructed. Moat water level and bathymetry remain derived or unmapped.',
      sources: [],
      facts: [] },
  ];
}
