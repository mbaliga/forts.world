// Auto-T1 scene builder: turns an `in-rts.trace/1` document (data/traces/<id>.trace.json) into a level definition.
// It draws only what the trace carries. Nothing on screen has an invented elevation: a wall or building with a sourced
// height (OSM tag, plan, photo via the overlay) is drawn to it; without one it is drawn as a kerb-high plan line, named
// "elevation unknown". Closed walls stay sealed (no gate is mapped), so the player arrives outside. The "today" era
// carries the present-day OSM context (roads, buildings, zones, markers); historic eras remove or alter it via diffs.
import { evidenceSummary, BUILT_SUFFIX } from '../../tools/trace/schema.mjs';

const b64ToGrid = (G) => G; // the terrain 'grid' op decodes the base64 itself
const bboxOf = (p) => p.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [1e9, 1e9, -1e9, -1e9]);
const centroid = (p) => p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]);
const ROAD_PAINT = { footway: 'paved', path: 'paved', steps: 'paved', pedestrian: 'paved', track: 'dry' };
const ZONE_PAINT = { cemetery: 'garden', grass: 'grass', recreation_ground: 'grass', park: 'garden', garden: 'garden', farmland: 'field', orchard: 'garden', forest: 'leaf', bare_rock: 'rock', military: 'dry' };
const toward = (p, q, d) => { const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy) || 1; return [+(p[0] + dx / l * d).toFixed(1), +(p[1] + dy / l * d).toFixed(1)]; };
const inPoly = (x, y, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
const srcLabel = (s) => s.startsWith('osm:') ? 'OSM ' + s.slice(4) : s;
const KERB = 0.5; // plan-line height for anything whose elevation is unknown
const evText = (e) => `${e.ev}; ${srcLabel(e.src)}${e.h ? `; height ${e.h.v} m (${srcLabel(e.h.src)}${e.h.note ? ', ' + e.h.note : ''})` : '; elevation unknown, drawn as a plan line'}`;

const baseEra = (id) => String(id).replace(BUILT_SUFFIX, '');
const isBuilt = (id) => String(id).endsWith(BUILT_SUFFIX);
const SCH_COLOR = 'accent'; // every schematic element is tinted with the palette accent so it cannot be mistaken for a mapped or documented one
const schText = (e) => `Schematic (constructed layer), not evidence. ${e.basis} ${e.h ? `Height ${e.h.v} m is assumed: ${e.h.note}.` : ''} Position ${e.src === 'inferred' ? 'is approximate' : `follows ${srcLabel(e.src)}`}.`;

export function makeT1(T, opts = {}) {
  // documented elements of the base era, plus (for a `<era>~built` era) the schematic elements that apply to that era
  const els = (era) => { const b = baseEra(era), base = applyDiff(T, b); if (!isBuilt(era)) return base; const add = (T.constructed || []).filter((c) => !c.eras || c.eras.includes(b)), gone = new Set(add.flatMap((c) => c.replaces || [])); return base.filter((e) => !gone.has(e.id)).concat(add); };
  const builtEras = (T.eras || []).filter((e) => (T.constructed || []).some((c) => !c.eras || c.eras.includes(e.id))).map((e) => ({ sources: [], ...e, id: e.id + BUILT_SUFFIX, layer: 'constructed', short: `${e.short || e.label} ✦`, label: `${e.label} · constructed`,
    summary: `${e.summary || ''} Constructed layer: walls, towers and buildings are drawn from written descriptions, in a different tint, with assumed heights.`,
    conjecture: `Schematic layer. Everything tinted is an illustration drawn from the descriptions listed in each marker, not from a plan or survey; heights are assumptions with their rule stated. The documented layer of this date is underneath, unchanged. ${e.conjecture || ''}` }));
  const outline = T.elements.find((e) => e.kind === 'outline');
  const H = T.heights ? b64ToGrid(T.heights) : null;
  const centre = outline ? centroid(outline.poly) : [0, 0];
  const ev = evidenceSummary(T);
  const [bx0, by0, bx1, by1] = T.bounds;
  const ext = Math.max(bx1 - bx0, by1 - by0) / 2;
  const seaLevel = 0;
  const waters = T.elements.filter((e) => e.kind === 'water');
  const hasSea = waters.some((e) => e.water === 'sea' || e.water === 'tidal');
  const sealedOf = (E) => E.filter((e) => e.kind === 'wall' && e.closed && !E.some((g) => g.kind === 'gate' && g.wall === e.id));
  const statusLine = T.status === 'location-only' ? 'Location only · OSM has no mapped outline here' : T.status === 'outline-only' ? 'Mapped footprint · walls not mapped' : 'Mapped outline and wall lines';
  const hand = !!T.generated?.curated; // hand-curated trace (src/levels/<id>.trace.js): eras and sourced heights come from the curation file
  const tierLabel = T.tier || 'T1';

  // Places of interest, built per era from that era's element list: one per non-trivial element, plus one honesty card.
  const poisFor = (eraId) => {
    const built = isBuilt(eraId), E = els(eraId), era = T.eras.find((x) => x.id === baseEra(eraId)) || T.eras[0], evE = evidenceSummary({ elements: E.filter((e) => e.ev !== 'schematic') });
    const wat = E.filter((x) => x.kind === 'water' && x.poly).map((x) => x.poly);
    const sealed = sealedOf(E.filter((e) => e.ev !== 'schematic')), historic = hand && era.id !== 'today';
    const pois = [{ id: 'about', at: centre, r: 12, hTol: 40, title: hand ? `${T.name} · ${era.label || era.id}${built ? ' · constructed layer' : ''} (${tierLabel}, ${T.status})` : `${T.name} · auto T1 (${statusLine})`,
      text: `${built ? `CONSTRUCTED LAYER: ${E.filter((e) => e.ev === 'schematic').length} schematic elements (tinted) are drawn from written descriptions with assumed heights; switch to the plain era for the evidence-only view. ` : ''}${hand ? `${era.basis || ''} ${era.conjecture || ''} ` : 'Built by the pipeline from OpenStreetMap and Terrarium elevation only. '}${evE.mapped} mapped elements, ${evE.documented} documented, ${evE.inferred} inferred, ${evE.derived} derived (sea closed from the coastline). Heights: ${evE.documentedHeights} sourced, ${evE.unknownHeights} unknown and drawn as kerb-high plan lines. ${sealed.length ? `${sealed.length} closed wall line${sealed.length > 1 ? 's have' : ' has'} no mapped gate: ${sealed.every((w) => !w.h) ? 'drawn kerb-high, it can be stepped over, which is not a claim about the real wall' : 'with a sourced height it seals its enclosure and you arrive outside'}. ` : ''}Terrain is ${T.heights ? `the Terrarium DEM (${T.heights.nativeResolutionM} m pixels from ~${T.heights.sourceResolutionM} m source data: terraces, ditches and scarps are not resolved)` : 'flat: no elevation tiles'}.${hand ? '' : ' Nothing historic is depicted.'}${era.facts?.length ? ` Documented in text but not placed (no plan or photo to position it): ${era.facts.join(' ')}` : ''}`,
      source: T.sources[0].url, evidence: hand ? (historic ? 'inferred (carried over)' : 'mapped (OSM) + DEM') : 'mapped (OSM) + DEM', positionEvidence: 'site centroid' }];
    for (const e of E) {
      if (e.ev === 'schematic') { if (!e.noMarker && (e.name && e.at || e.name && (e.poly || e.path))) pois.push({ id: e.id, at: e.at || markerBeside(e, centre, wat), r: 10, hTol: 40, title: e.name, text: schText(e), source: T.sources[0].url, evidence: 'schematic', unreachableOk: e.unreachableOk, unreachableNote: e.unreachableNote, positionEvidence: e.src === 'inferred' ? 'approximate' : srcLabel(e.src), ...((e.kind === 'bastion' || e.kind === 'tower') && e.at ? { unreachableOk: true } : {}) }); continue; }
      if (e.kind === 'gate') pois.push({ id: e.id, at: e.at, r: 8, hTol: 12, title: e.name || 'Gate', text: `${e.note || 'Gate from a documented plan.'} Evidence: ${evText(e)}.`, source: T.sources[0].url, evidence: e.ev, positionEvidence: srcLabel(e.src) });
      else if (e.kind === 'marker') pois.push({ id: e.id, at: e.at, r: 6, title: e.title || `${e.name || e.osmTags?.historic || 'Mapped point'} · mapped point`, text: e.text || `OpenStreetMap node${e.osmTags?.historic ? ` tagged historic=${e.osmTags.historic}` : ''}${e.osmTags?.inscription ? `. Inscription recorded: “${e.osmTags.inscription.replace(/\n/g, ' ')}”` : ''}. Position is the mapped node; nothing about its form is reconstructed.`, source: e.src.startsWith('osm:') ? 'https://www.openstreetmap.org/' + e.src.slice(4) : T.sources[0].url, evidence: e.ev === 'inferred' ? 'inferred' : 'mapped', positionEvidence: srcLabel(e.src), ...(e.unreachableOk ? { unreachableOk: true, unreachableNote: e.unreachableNote } : {}) });
      else if (e.kind === 'ditch') pois.push({ id: e.id, at: markerBeside(e, centre, wat), r: 18, hTol: 40, title: e.name || 'Ditch', text: `${e.note || ''} Evidence: ${evText(e)}.`, source: T.sources[0].url, evidence: e.ev, positionEvidence: srcLabel(e.src) });
      else if ((e.kind === 'wall' || e.kind === 'building') && e.name) pois.push({ id: e.id, at: markerBeside(e, centre, wat), r: 18, hTol: 40, title: `${e.name}`, text: `${e.note ? e.note + ' ' : `${e.kind === 'wall' ? 'Wall line' : 'Building footprint'} from OpenStreetMap. `}Evidence: ${evText(e)}.`, source: e.src.startsWith('osm:') ? 'https://www.openstreetmap.org/' + e.src.slice(4) : T.sources[0].url, evidence: e.ev, positionEvidence: 'mapped line', ...(e.unreachableOk ? { unreachableOk: true, unreachableNote: e.unreachableNote } : {}) });
    }
    for (const e of E) if (e.kind === 'water' && e.src.startsWith('derived:')) pois.push({ id: e.id, at: toward(e.poly[Math.max(0, Math.floor((e.poly.length - 4) / 2))], centre, 12), r: 18, hTol: 40, title: 'Water · derived from the mapped coastline', text: `${e.note}. DEM check: ${e.demCheck ? `median ${e.demCheck.medianInside} m inside vs ${e.demCheck.medianOutside} m outside` : 'not run'}. Confidence ${e.conf}.`, source: T.sources[0].url, evidence: 'derived', positionEvidence: 'mapped coastline', ...(e.unreachableOk ? { unreachableOk: true, unreachableNote: e.unreachableNote } : {}) });
    return pois;
  };
  const defaultEra = opts.defaultEra || (T.eras.some((e) => e.id === 'today') ? 'today' : T.eras[0].id);
  const pois = poisFor(defaultEra); // the stub/list view; build() rebuilds them for the era being played

  return {
    id: opts.id || T.id, name: T.name, native: { text: T.name, lang: 'en', script: 'latn' }, region: T.region || '', type: hand ? `${T.type} · ${tierLabel} · ${statusLine}` : `${T.type} · auto T1 · ${statusLine}`, coords: T.coords,
    tier: tierLabel, trace: T, ...(outline ? { outline: outline.poly } : {}),
    poiCount: pois.length, pois, groundName: 'Terrarium DEM', datum: 0, datumLabel: T.heights ? 'metres above Terrarium datum (~sea level)' : 'flat ground',
    units: { planScale: 1, vScale: 1 }, bounds: T.bounds, stride: ext > 380 ? 3 : 2, navCell: 1, navStep: 0.62, seed: 11,
    water: hasSea ? { sea: seaLevel, deep: '#2a5558', mid: '#3d6f6a', shallow: '#6f9a84', silt: '#8c9470' } : null,
    view: { az: -40, el: 40, zoom: 80, introAt: centre, introZoom: Math.min(400, ext * 1.4) }, light: { sky: '#dce3e0', sunAz: -125, sunEl: 48 },
    palette: { wall: '#8a6b5a', wallTop: '#9b7c6a', trim: '#b89a86', stone: '#8d7868', plaster: '#d9d2c3', plasterDark: '#b5aa98', roof: '#9c6a52', rock: '#7b6b5e', cliff: '#6d5e53', grass: '#6e8d4c', dry: '#9e9a70', road: '#b0a080', court: '#b3a68e', paved: '#a89a82', sand: '#c9b894', field: '#83984f', mud: '#7a6650', garden: '#6b8c47', water: '#557d79', tank: '#527975', leaf: '#4f7238', leafDry: '#86985c', trunk: '#674b32', wood: '#61432f', door: '#503827', window: '#302a25', dome: '#e4dccb', flag: '#ba4036', accent: '#d7b085' },
    eraPalette: { today: {} }, defaultEra, eras: T.eras.map((e) => ({ sources: [], ...e })).flatMap((e) => [e, ...builtEras.filter((b) => b.id === e.id + BUILT_SUFFIX)]),

    terrain(era) {
      const E = els(era), ops = [{ op: 'base', h: H ? Math.max(-6, H.stats.min) : 0.4 }];
      if (H) ops.push({ op: 'grid', grid: H });
      for (const e of E) {
        if (e.kind === 'water' && !e.waterRing) ops.push({ op: 'dig', poly: e.poly, h: (e.level ?? seaLevel) - 3, edge: 3 });
        else if (e.kind === 'waterway') ops.push({ op: 'paint', path: e.path, w: e.w, paint: 'water' });
        else if (e.kind === 'ditch') ops.push({ op: 'moat', path: e.path, closed: !!e.closed, w: e.w, edge: 0.8, paint: 'rock' }); // path z = floor elevation (ground minus the sourced depth)
        else if (e.kind === 'zone' && ZONE_PAINT[e.zone]) ops.push({ op: 'paint', poly: e.poly, paint: ZONE_PAINT[e.zone] });
      }
      if (outline) ops.push({ op: 'paint', poly: outline.poly, paint: 'court' });
      for (const e of E) if (e.kind === 'road') ops.push({ op: 'paint', path: e.path, w: e.w, paint: ROAD_PAINT[e.highway] || 'road' });
      ops.push({ op: 'edge', h: hasSea ? seaLevel - 3 : (H ? H.stats.min : 0.4), w: 12 });
      return ops;
    },

    build(W) {
      const E = els(W.era).slice().sort((a, b) => (a.kind === 'gate') - (b.kind === 'gate'));
      const wallsById = {};
      const gatePts = E.filter((g) => g.kind === 'gate').map((g) => g.at);
      for (const e of E) {
        if (e.ev === 'schematic') {
          const col = SCH_COLOR;
          switch (e.kind) {
            case 'wall': wallsById[e.stands_for || e.id] = W.wall({ path: e.path, closed: !!e.closed, outer: e.closed ? undefined : 'left', h: e.h.v, thick: e.thick ?? 1.6, batter: e.batter ?? 0.06, parapet: { h: 1, t: 0.45 }, merlon: !!e.merlon, color: col, coping: true, maxSeg: 3 }); break;
            case 'gate': { const w = wallsById[e.wall]; if (w) W.gate({ wall: w, at: e.at, width: e.w ?? 4, spring: 3, style: 'flat', towers: false, frame: false, doors: false, name: e.name }); break; }
            case 'bastion': case 'tower': { W.bastion({ at: e.at, r: e.r ?? (e.kind === 'tower' ? 3 : 6), snap: false, h: e.h.v, color: col, parapet: !!e.merlon, merlon: !!e.merlon });
              // optional schematic crown: a kiosk (chhatri) on the top, as the written descriptions of the gate towers give
              if (e.top === 'chhatri') W.chhatri({ x: e.at[0], y: e.at[1], base: W.ground(e.at[0], e.at[1]) + e.h.v, size: Math.min(3.2, (e.r ?? 4) * 0.9), h: 2.4, cols: 4, dome: 'half', color: col });
              break; }
            case 'building': { const c = e.poly ? centroid(e.poly) : e.at, g0 = W.ground(c[0], c[1]); W.building({ ...(e.poly ? { poly: e.poly } : { rect: [e.at[0], e.at[1], e.w ?? 12, e.d ?? 8, e.rot ?? 0] }), base: g0, h: e.h.v, storeys: Math.max(1, Math.round(e.h.v / 3.2)), storeyH: 3.2, color: col, roof: e.roof || 'flat', windows: e.arches ? { style: 'arch', spacing: 4.2 } : false, parapet: e.merlon ? { h: 0.8, t: 0.3 } : undefined, kind: 'building', name: e.name });
              // schematic crowns named in the written descriptions: domes [x, y, r] in plan metres, kiosks [x, y]
              for (const d of e.domes || []) W.dome({ x: d[0], y: d[1], r: d[2], base: g0 + e.h.v, drum: d[2] * 0.25, shape: e.domeShape || 'half', color: col, seg: 14 });
              for (const k of e.chhatris || []) W.chhatri({ x: k[0], y: k[1], base: g0 + e.h.v, size: 2.6, h: 2.2, cols: 4, dome: 'half', color: col });
              break; }
            case 'temple': { const c = centroid(e.poly), box = bboxOf(e.poly), g0 = W.ground(c[0], c[1]); W.temple({ x: c[0], y: c[1], rot: e.rot ?? 0, w: e.w ?? Math.min(14, Math.max(8, (box[2] - box[0]) * 0.18)), h: e.h.v, style: e.style || 'dravida', tiers: e.tiers ?? 6, plinth: e.plinth ?? 1, mandapa: { d: e.md ?? 12, w: e.mdw ?? 19, h: e.mh ?? 5.5, roof: 'flat' }, color: col, base: g0, name: e.name }); break; }
            case 'water': { if (!e.waterRing) { W.water({ poly: e.poly, level: e.level ?? seaLevel, color: '#557d79' }); break; } const path = e.path, area = path.reduce((s, p, i) => s + p[0] * path[(i + 1) % path.length][1] - path[(i + 1) % path.length][0] * p[1], 0) / 2, sign = Math.sign(area) || 1, outer = [], inner = [], width = e.width ?? 18, gap = e.gap ?? 2;
              for (let i = 0; i < path.length; i++) { const p0 = path[(i + path.length - 1) % path.length], p = path[i], p1 = path[(i + 1) % path.length], n0 = [(p[1] - p0[1]) * sign, -(p[0] - p0[0]) * sign], n1 = [(p1[1] - p[1]) * sign, -(p1[0] - p[0]) * sign], l0 = Math.hypot(...n0) || 1, l1 = Math.hypot(...n1) || 1, nx0 = n0[0] / l0 + n1[0] / l1, ny0 = n0[1] / l0 + n1[1] / l1, nl = Math.hypot(nx0, ny0) || 1, nx = nx0 / nl, ny = ny0 / nl, m = Math.max(0.35, Math.min(2, 1 / Math.max(0.35, (nx * n1[0] + ny * n1[1]) / l1))); outer.push([p[0] + nx * (width + gap) * m, p[1] + ny * (width + gap) * m]); inner.push([p[0] + nx * gap * m, p[1] + ny * gap * m]); }
              const minLevel = Math.min(...[...outer, ...inner].map(([x, y]) => W.ground(x, y))); for (let i = 0; i < path.length; i++) { const j = (i + 1) % path.length; W.water({ poly: [inner[i], inner[j], outer[j], outer[i]], level: minLevel, color: '#557d79' }); } break; }
            case 'zone': if (e.zone === 'tree-cover') W.trees({ poly: e.poly, count: e.count ?? 200, types: e.types || { round: 4, neem: 3, banyan: 1, palm: 2 }, s: e.s || [0.9, 1.5], minDist: e.minDist ?? 7, maxSlope: e.maxSlope ?? 2.4, seed: e.seed ?? 29, avoid: e.avoid || [] }); else W.zone(e.poly, `${e.name || e.zone} · mapped area (${srcLabel(e.src)})`); break;
            case 'tank': W.tank({ poly: e.poly, waterDepth: 2, tiers: 3, color: col }); break;
            default: break;
          }
          continue;
        }
        switch (e.kind) {
          case 'gate': { const w = wallsById[e.wall]; if (w) W.gate({ wall: w, at: e.at, width: 3, spring: 2.6, style: 'flat', towers: false, frame: false, doors: false, name: e.name }); break; }
          case 'water': W.water({ poly: e.poly, level: e.level ?? seaLevel, color: '#557d79' }); break;
          case 'outline': W.zone(e.poly, `${T.name} · mapped outline (${srcLabel(e.src)})`); break;
          case 'wall': wallsById[e.id] = W.wall({ path: e.path, closed: !!e.closed, outer: e.closed ? undefined : 'left', h: e.h?.v ?? KERB, thick: e.thick ?? (e.h ? 1.6 : 1.0), batter: e.h ? 0.06 : 0, parapet: false, merlon: false, color: e.h ? 'wall' : 'stone', coping: !!e.h, maxSeg: 3 }); break;
          case 'retaining-wall': W.wall({ path: e.path, closed: false, outer: 'left', h: e.h?.v ?? KERB, thick: 0.4, batter: 0, merlon: false, color: 'stone', maxSeg: 3 }); break;
          case 'building': { const c = centroid(e.poly); if (gatePts.some((g) => inPoly(g[0], g[1], e.poly) || distToPoly(g, e.poly) < 4)) { W.zone(e.poly, `${e.name || 'Building'} · mapped footprint at a gate, drawn flat so the passage stays open`); break; } W.building({ poly: e.poly, base: W.ground(c[0], c[1]), h: e.h?.v ?? KERB * 0.8, color: e.h ? 'plaster' : 'paved', roof: 'flat', windows: false, kind: 'building', name: `${e.name || (e.use === 'yes' ? 'Building' : e.use)} · ${e.src.startsWith('osm:') ? 'mapped' : 'plan'} footprint${e.h ? '' : ', elevation unknown'}` }); break; }
          case 'zone': W.zone(e.poly, `${e.name || e.zone} · mapped area (${srcLabel(e.src)})`); break;
          case 'tank': W.tank({ poly: e.poly, waterDepth: 2, tiers: 3, color: 'stone' }); if (e.name) W.zone(e.poly, e.name); break;
          case 'bastion': W.bastion({ at: e.at, r: e.r ?? 6, snap: false, h: KERB, color: 'stone', parapet: false, merlon: false }); break; // plan position and radius only: kerb-high like every unsourced height
          default: break;
        }
      }
      const pois = poisFor(W.era), sealed = sealedOf(E.filter((e) => e.ev !== 'schematic'));
      const [sx, sy] = spawnPoint(T, E.filter((e) => e.ev !== 'schematic'), centre, (x, y) => W.ground(x, y), hasSea ? seaLevel + 0.5 : -Infinity);
      W.spawn(sx, sy, W.ground(sx, sy), -120);
      pois[0].at = [sx, sy]; // the honesty card sits where the player arrives
      for (const p of pois) { if (p.unreachableOk) p.text += ' (Not reachable on foot: ' + (p.unreachableNote ? p.unreachableNote : /^c-/.test(p.id) ? 'a solid schematic mass with no stair or top drawn; look at it from outside.' : 'the terrain data here is a high, steep DEM artefact, see the pass document.') + ')'; if (sealed.some((w) => inPoly(p.at[0], p.at[1], w.path))) { p.unreachableOk = true; if (sealed.some((w) => w.h && inPoly(p.at[0], p.at[1], w.path))) p.text += ' (Inside a sealed enclosure: the wall has a sourced height and no mapped gate.)'; } W.poi(p); }
    },
  };
}

// T1 never invents a gate, so a closed mapped wall seals its enclosure: spawn outside it, on the nearest mapped road
// if there is one, otherwise just outside the outline towards the scene centre of mass of roads/buildings.
function spawnPoint(T, E, centre, ground, minH) {
  const outline = E.find((e) => e.kind === 'outline');
  const rings = E.filter((e) => e.kind === 'wall' && e.closed).map((e) => e.path);
  const walls = E.filter((e) => e.kind === 'wall' || e.kind === 'retaining-wall').map((e) => e.path);
  // The outline centre, unless it lies in a tank or lake (a long fort's centre can); then the nearest dry point inside the outline.
  const wet = E.filter((e) => (e.kind === 'water' || e.kind === 'tank') && e.poly).map((e) => e.poly);
  const dry = (p) => !wet.some((w) => inPoly(p[0], p[1], w) || distToPoly(p, w) < 12) && (!outline || inPoly(p[0], p[1], outline.poly)) && ground(p[0], p[1]) >= minH && walls.every((w) => distToPoly(p, w) >= 4);
  const dryNear = (c) => { if (dry(c)) return c; for (let d = 8; d < 600; d += 8) for (let a = 0; a < 360; a += 15) { const p = [c[0] + d * Math.cos(a * Math.PI / 180), c[1] + d * Math.sin(a * Math.PI / 180)]; if (dry(p)) return p; } return c; };
  if (!rings.length) return outline ? dryNear(centre) : [0, 0];
  const clear = (p) => !rings.some((r) => inPoly(p[0], p[1], r)) && walls.every((w) => distToPoly(p, w) >= 5) && ground(p[0], p[1]) >= minH;
  let best = null, bd = Infinity;
  for (const r of E.filter((e) => e.kind === 'road')) for (const p of r.path) {
    if (!clear(p)) continue;
    const d = Math.hypot(p[0] - centre[0], p[1] - centre[1]); if (d < bd) { bd = d; best = p; }
  }
  if (best) return best;
  // no usable road: walk outward from the centre until a clear point is found
  for (let d = 10; d < 400; d += 10) for (let a = 0; a < 360; a += 20) { const p = [centre[0] + d * Math.cos(a * Math.PI / 180), centre[1] + d * Math.sin(a * Math.PI / 180)]; if (clear(p)) return p; }
  // Nowhere clear outside the ring (an island fort has only sea there): a ring with a plan-sourced gate is not sealed, so start just inside the gate.
  for (const g of E.filter((e) => e.kind === 'gate' && e.ev !== 'schematic')) {
    const ring = E.find((e) => e.kind === 'wall' && e.closed && e.id === g.wall); if (!ring) continue;
    const c = ring.path.reduce((a, q) => [a[0] + q[0] / ring.path.length, a[1] + q[1] / ring.path.length], [0, 0]);
    const dx = c[0] - g.at[0], dy = c[1] - g.at[1], L = Math.hypot(dx, dy) || 1, p = [g.at[0] + dx / L * 9, g.at[1] + dy / L * 9];
    if (inPoly(p[0], p[1], ring.path) && ground(p[0], p[1]) >= minH && walls.every((w) => distToPoly(p, w) >= 4)) return p;
  }
  return dryNear(centre);
}
function distToPoly(p, poly, open = false) {
  let best = Infinity;
  for (let i = 0; i < poly.length - (open ? 1 : 0); i++) { const a = poly[i], b = poly[(i + 1) % poly.length], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); best = Math.min(best, Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t)); }
  return best;
}
// A marker beside a footprint or wall line: the vertex nearest the site centre, pushed 5 m further towards it.
function markerBeside(e, centre, avoid = []) {
  // 5 m beside the vertex nearest the centre; if that lands in water, try the other sides (a point of interest in a tank cannot be reached).
  const base = markerBesideRaw(e, centre);
  if (!avoid.length || !avoid.some((w) => inPoly(base[0], base[1], w))) return base;
  for (const q of e.poly || e.path) for (const [dx, dy] of [[5, 0], [-5, 0], [0, 5], [0, -5], [8, 8], [-8, 8], [8, -8], [-8, -8]]) { const c = [q[0] + dx, q[1] + dy]; if (!avoid.some((w) => inPoly(c[0], c[1], w)) && !(e.poly && inPoly(c[0], c[1], e.poly))) return c; }
  return base;
}
function markerBesideRaw(e, centre) {
  const pts = e.poly || e.path;
  let best = pts[0], bd = Infinity;
  for (const p of pts) { const d = Math.hypot(p[0] - centre[0], p[1] - centre[1]); if (d < bd) { bd = d; best = p; } }
  return toward(best, bd < 6 ? [centre[0] + 50, centre[1]] : centre, 5);
}
// Era diffs: elements present today, minus removals, plus additions, with field overrides.
export function applyDiff(T, era) {
  const d = T.diffs?.[era]; if (!d) return T.elements;
  const removed = new Set(d.remove || []);
  return T.elements.filter((e) => !removed.has(e.id)).map((e) => d.modify?.[e.id] ? { ...e, ...d.modify[e.id] } : e).concat(d.add || []);
}
