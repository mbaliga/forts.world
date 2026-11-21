// Curation for Fort Aguada (batch 1). Evidence and conflicts: docs/research/aguada-pass.md.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'outline+walls';
export const HEADER = [
  'Fort Aguada, Bardez, Goa. Hand-curated trace (tier T1, three dated eras; T2 blocked: no plan or photograph could be registered).',
  'Base: data/traces/aguada.trace.json (OpenStreetMap ODbL ways named in each src; Terrarium z15 tiles, ~30 m SRTM-derived). Local origin 15.4920852 N, 73.7739694 E; x east, y north, metres.',
  'Curation: tools/trace/curation/aguada.mjs. Sourced heights: old lighthouse 10 m (ASI Goa Circle), modern lighthouse 18 m (DGLL ledger). Every other wall and building height is unknown and drawn as a kerb-high plan line.',
  'The ditch path is inferred (way 430917629, a three-sided loop, offset 6 m outward); its 6.5 m width and 5.2 m depth are ASI figures. Historic eras carry the mapped lines back unchanged and say so in each element note.',
];

export default function curate(T, h) {
  h.rename('wall-12', 'wall-12', 'Citadel wall line A · mapped');
  h.rename('wall-29', 'wall-29', 'Citadel wall line B · mapped');
  const north = h.rename('wall-30', 'wall-30', 'Northern enclosure wall · mapped three-sided loop');
  h.byId('building-4').name = 'Old lighthouse tower';
  h.height('building-4', 10, 'plan:asi-goa-circle#upper-fort', 'ASI Goa Circle: 10 m high, 12 m across (the mapped footprint agrees with 12 m). Other sources differ: OSM tag 7 m, Gomantak Times 13 m, DGLL 16 m');
  h.height('building-5', 18, 'plan:dgll-master-ledger#goa-04', 'DGLL master ledger height for the 1976 light; the ledger coordinate is about 460 m from this OSM footprint, unresolved');

  // Ditch: ASI places a dry moat on three sides, 6.5 m wide and 5.2 m deep. Way 430917629 is the three-sided loop on the landward side.
  const DEPTH = 5.2, WIDTH = 6.5;
  const path = h.offsetPath(north.path, 6).map(([x, y]) => [x, y, +(h.ground(x, y) - DEPTH).toFixed(1)]).filter((p) => Number.isFinite(p[2]));
  h.add({ id: 'ditch-north', kind: 'ditch', path, closed: false, w: WIDTH, src: 'inferred', from: ['osm:way/430917629'], ev: 'inferred', conf: 0.3,
    name: 'Dry moat · path inferred, width and depth from ASI',
    note: 'Path inferred: way 430917629 offset 6 m outward, taken as the three landward sides ASI describes. Floor is the coarse DEM ground minus the ASI depth, so its absolute level is approximate',
    h: { v: DEPTH, src: 'plan:asi-goa-circle#moat', note: 'ASI Goa Circle: about 6.5 m wide and 5.2 m deep, cut in laterite; a marker photographed at HMDB gives the same figures' } });

  // Fabric carried back to earlier eras (mapped lines, assumed unchanged; no earlier plan found).
  const fabric = ['outline', 'wall-12', 'wall-29', 'wall-30', 'wall-21', 'wall-43', 'coastline-24', 'coastline-47', 'sea-0', 'ditch-north'];
  carryOver(T, '1612', fabric, { note: 'present mapped line assumed unchanged since 1612; no earlier plan was found' });
  carryOver(T, '1864', [...fabric, 'building-4'], { note: 'present mapped line assumed unchanged since 1864; no earlier plan was found',
    modify: { 'building-4': { ev: 'mapped', conf: 0.75, name: 'Old lighthouse tower · mapped footprint, 1864 date contested', note: 'footprint is the present mapped ruin; the lighthouse is dated 1864 by DGLL, Wikipedia and The Goan, while ASI calls the date unknown' } } });

  T.eras = [
    { id: '1612', year: 1612, label: 'Fortaleza Real completed', short: '1612', lens: 'none',
      summary: 'The upper fort has just been finished above the Mandovi mouth, after the Dutch attack of 1604.',
      basis: 'Dates and dimensions are from ASI Goa Circle and an ASI marker; the wall lines are the present OpenStreetMap lines.',
      conjecture: 'No plan from 1612 was found. Walls and coast are the present mapped lines carried back (inferred); the moat path is inferred, its size is ASI. No gate, bastion, bridge or building is placed. Modern roads, lighthouses and the jail buildings are removed.',
      sources: ['AGU-01', 'AGU-02', 'AGU-08', 'AGU-14', 'AGU-15', 'AGU-16', 'AGU-17'],
      facts: ['Built from 1609, completed 1612 under Governor Ruy Lourenço de Távora (ASI).', 'Underground cistern of about 2.376 million gallons on 16 rock-cut columns in 5 divisions (ASI).', 'Described as a square citadel with bastions on three corners and the gate on the fourth (The Goan, Gomantak Times) but as star-shaped by ASI: unresolved.', 'Lower fort: ship anchorage and watering station; barracks, gunpowder store and chapel are reported without positions.'] },
    { id: '1864', year: 1864, label: 'Lighthouse added', short: '1864', lens: 'none',
      summary: 'A tapering lighthouse now stands on the citadel, the first of its kind at the Mandovi mouth.',
      basis: 'The 1864 date is from DGLL, Wikipedia and The Goan; its 10 m height and 12 m width are from ASI, and the footprint is OpenStreetMap way 156468581.',
      conjecture: 'ASI calls the lighthouse date unknown and a marker implies a light existed by 1834, so 1864 is the consensus date, not a certainty. Nothing else is shown to have changed. The lower fort in 1864 is not documented, so no lower buildings are drawn.',
      sources: ['AGU-03', 'AGU-08', 'AGU-12', 'AGU-14', 'AGU-16', 'AGU-18'],
      facts: ['The light flashed every 7 minutes at first, later every 30 seconds (HMDB marker text).'] },
    { id: 'today', year: 'Today', label: 'Museum and lighthouse ruin', short: 'Present', lens: 'none',
      summary: 'The upper fort is a heritage site; the old lighthouse is disused and the lower fort has been a museum since 2021.',
      basis: 'Everything is a present OpenStreetMap way, the Terrarium DEM, or an ASI/DGLL figure named in its note.',
      conjecture: 'Wall and building heights are unknown (kerb-high) except the two lighthouses. The moat path is inferred. The sandbox could not see plans or photographs, so no bastion, gate or cistern is placed.',
      sources: ['AGU-02', 'AGU-03', 'AGU-10', 'AGU-11', 'AGU-13', 'AGU-17'],
      facts: ['The 1976 lighthouse replaced the old one (HMDB marker, DGLL).', 'The lower fort served as a jail, later the Central Jail, until inmates left in 2015; the Freedom Struggle Museum opened 19 December 2021 (Wikipedia, The Goan).'] },
  ];
}
