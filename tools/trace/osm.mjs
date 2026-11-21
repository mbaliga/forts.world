// Classify an Overpass `out geom` JSON dump into trace elements in a local metre frame (x east, y north).
// Nothing here invents geometry: every element carries the OSM id it came from. The only derived
// geometry is the sea polygon closed from natural=coastline ways along the scene bounds, and it is
// tagged as such and cross-checked against the DEM by the caller.
const R = 6371008.8, DEG = Math.PI / 180;

export const ROAD_WIDTH = { motorway: 12, trunk: 10, primary: 9, secondary: 7, tertiary: 6, residential: 5, unclassified: 4.5, service: 3.5, living_street: 3.5, pedestrian: 4, footway: 2, path: 1.6, steps: 2, track: 3, cycleway: 2 };
export const WATERWAY_WIDTH = { river: 20, canal: 8, stream: 3, tidal_channel: 6, drain: 2, ditch: 1.5 };
const FORT_HISTORIC = new Set(['fort', 'castle', 'citadel', 'city_wall', 'citywalls', 'castle_wall', 'fortification', 'fortress']);
const SITE_HISTORIC = new Set([...FORT_HISTORIC, 'archaeological_site', 'monastery', 'temple', 'palace', 'ruins', 'tomb', 'mausoleum', 'stepwell', 'city', 'yes', 'monument', 'building']);
const ZONE_LANDUSE = new Set(['cemetery', 'military', 'recreation_ground', 'religious', 'grass', 'farmland', 'orchard', 'forest', 'meadow', 'park', 'garden', 'quarry']);

export function projector(lat0, lon0) {
  const c = Math.cos(lat0 * DEG);
  return ({ lat, lon }) => [+((lon - lon0) * DEG * R * c).toFixed(2), +((lat - lat0) * DEG * R).toFixed(2)];
}
const bboxOf = (pts) => pts.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [Infinity, Infinity, -Infinity, -Infinity]);
const intersects = (a, b) => a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
const isClosed = (g) => g.length > 3 && g[0].lat === g[g.length - 1].lat && g[0].lon === g[g.length - 1].lon;
export const polyArea = (p) => p.reduce((s, q, i) => { const r = p[(i + 1) % p.length]; return s + q[0] * r[1] - r[0] * q[1]; }, 0) / 2;
export const centroid = (p) => p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]);
const num = (v) => { const m = String(v ?? '').match(/-?\d+(\.\d+)?/); return m ? +m[0] : null; };
const elemUrl = (e) => `osm:${e.type}/${e.id}`;

// Join relation outer ways (or any way set) into rings by shared endpoints.
function joinRings(ways) {
  const segs = ways.map((w) => w.geometry.map((g) => [g.lat, g.lon]));
  const rings = [];
  while (segs.length) {
    let ring = segs.shift();
    let grew = true;
    while (grew && !(ring.length > 3 && ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1])) {
      grew = false;
      const end = ring[ring.length - 1], start = ring[0];
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i], a = s[0], b = s[s.length - 1], same = (p, q) => p[0] === q[0] && p[1] === q[1];
        if (same(a, end)) { ring = ring.concat(s.slice(1)); segs.splice(i, 1); grew = true; break; }
        if (same(b, end)) { ring = ring.concat(s.slice(0, -1).reverse()); segs.splice(i, 1); grew = true; break; }
        if (same(b, start)) { ring = s.slice(0, -1).concat(ring); segs.splice(i, 1); grew = true; break; }
        if (same(a, start)) { ring = s.slice(1).reverse().concat(ring); segs.splice(i, 1); grew = true; break; }
      }
    }
    rings.push(ring.map(([lat, lon]) => ({ lat, lon })));
  }
  return rings;
}

// Clip a polyline to a rectangle; returns pieces (arrays of points) that lie inside.
function clipLine(pts, [x0, y0, x1, y1]) {
  const inside = ([x, y]) => x >= x0 && x <= x1 && y >= y0 && y <= y1;
  const cross = (a, b) => { // Liang-Barsky
    let t0 = 0, t1 = 1; const dx = b[0] - a[0], dy = b[1] - a[1];
    for (const [p, q] of [[-dx, a[0] - x0], [dx, x1 - a[0]], [-dy, a[1] - y0], [dy, y1 - a[1]]]) {
      if (p === 0) { if (q < 0) return null; continue; }
      const r = q / p; if (p < 0) { if (r > t1) return null; t0 = Math.max(t0, r); } else { if (r < t0) return null; t1 = Math.min(t1, r); }
    }
    return [[a[0] + dx * t0, a[1] + dy * t0], [a[0] + dx * t1, a[1] + dy * t1], t0, t1];
  };
  const pieces = []; let cur = [];
  for (let i = 1; i < pts.length; i++) {
    const c = cross(pts[i - 1], pts[i]);
    if (!c) { if (cur.length > 1) pieces.push(cur); cur = []; continue; }
    const [a, b, t0, t1] = c;
    if (t0 > 0 || !cur.length) { if (cur.length > 1) pieces.push(cur); cur = [a]; }
    cur.push(b);
    if (t1 < 1) { pieces.push(cur); cur = []; }
  }
  if (cur.length > 1) pieces.push(cur);
  void inside; return pieces;
}

// Close a coastline chain (water on its right) into a polygon along the bounds, walking clockwise.
function closeAlongBounds(chain, [x0, y0, x1, y1]) {
  const onEdge = ([x, y]) => Math.abs(x - x0) < 1e-6 || Math.abs(x - x1) < 1e-6 || Math.abs(y - y0) < 1e-6 || Math.abs(y - y1) < 1e-6;
  const first = chain[0], last = chain[chain.length - 1];
  if (!onEdge(first) || !onEdge(last)) return null;
  const W = x1 - x0, H = y1 - y0;
  const tOf = ([x, y]) => Math.abs(y - y1) < 1e-6 ? (x - x0) / W : Math.abs(x - x1) < 1e-6 ? 1 + (y1 - y) / H : Math.abs(y - y0) < 1e-6 ? 2 + (x1 - x) / W : 3 + (y - y0) / H;
  const corners = [[x0, y1], [x1, y1], [x1, y0], [x0, y0]];
  let t = tOf(last); const tEnd = tOf(first); const poly = chain.slice();
  const target = tEnd > t ? tEnd : tEnd + 4;
  for (let k = Math.ceil(t); k < target; k++) poly.push(corners[k % 4]);
  return poly;
}

export function classify(osm, { lat, lon, radius = 1200, wikidata = null, name = null, maxHalf = 450, minHalf = 200, margin = 150, siteWay = null, skipSite = false } = {}) {
  let P = projector(lat, lon), origin = { lat, lon, shiftedM: 0 };
  const els = osm.elements || [], byId = new Map(els.map((e) => [`${e.type}/${e.id}`, e]));
  const report = { counts: {}, notes: [] };
  const tally = (k) => { report.counts[k] = (report.counts[k] || 0) + 1; };

  // 1. The site: an element tagged historic=* near the origin, preferring wikidata or name matches, then nearest.
  const isForced = (e) => siteWay != null && e.type === 'way' && String(e.id) === String(siteWay);   // build option siteWay: a closed way that is named for the site but not tagged historic=*
  // an area that carries the site's own Wikidata id is the site even when OSM gives it no historic=* tag (a keep mapped as building=yes)
  // Only a plain area counts (a closed way or a multipolygon), near the point and no larger than a big fort: a route, site or
  // boundary relation, or a town's landuse area carrying the same id, is not the site's outline.
  const ownOk = (e) => { const g = e.type === 'way' ? e.geometry || [] : (e.members || []).flatMap((m) => m.geometry || []); if (!g.length) return false; const pts = g.map(P), c = centroid(pts), bb = bboxOf(pts); return Math.hypot(c[0], c[1]) <= 600 && (bb[2] - bb[0]) * (bb[3] - bb[1]) <= 4e6; };
  const isOwn = (e) => wikidata != null && e.tags?.wikidata === wikidata && (e.type === 'way' || e.tags?.type === 'multipolygon') && ownOk(e);
  const candidates = skipSite ? [] : els.filter((e) => isForced(e) ? isClosed(e.geometry || []) : ((e.tags?.historic && SITE_HISTORIC.has(e.tags.historic)) || isOwn(e)) && (e.type === 'relation' || (e.type === 'way' && isClosed(e.geometry || []))));
  const dist = (e) => { const g = e.geometry || e.members?.flatMap((m) => m.geometry || []) || []; const c = centroid(g.map(P)); return Math.hypot(c[0], c[1]); };
  const scored = candidates.map((e) => ({ e, d: dist(e), score: (isForced(e) ? 1e9 : 0) + (wikidata && e.tags.wikidata === wikidata ? 1e6 : 0) + (name && (e.tags.name || '').toLowerCase().includes(name.toLowerCase()) ? 1e5 : 0) + (FORT_HISTORIC.has(e.tags.historic) ? 1e4 : 0) - dist(e) })).sort((a, b) => b.score - a.score);
  const site = scored[0]?.e || null;
  let outline = null, outlineSrc = null, siteTags = null, siteParts = null;
  if (site) {
    const rings = site.type === 'relation' ? joinRings((site.members || []).filter((m) => m.type === 'way' && (m.role === 'outer' || !m.role) && m.geometry)) : [site.geometry];
    let ring = rings.map((r) => r.map(P)).sort((a, b) => Math.abs(polyArea(b)) - Math.abs(polyArea(a)))[0];
    // A site relation (type=site) groups the parts of a site (walls, towers, buildings): its members are not an outline. Keep
    // the largest closed part only if it spans most of the parts' extent; otherwise draw no outline and fit the scene to the parts.
    if (site.type === 'relation' && ['site', 'route', 'collection', 'cluster'].includes(site.tags?.type)) {
      const pts = (site.members || []).flatMap((m) => m.geometry || (m.lat != null ? [m] : [])).filter((g) => g && g.lat != null).map(P);
      if (pts.length) {
        const bb = bboxOf(pts), ext = Math.max(1, (bb[2] - bb[0]) * (bb[3] - bb[1]));
        if (!ring || ring.length < 4 || Math.abs(polyArea(ring)) < 0.35 * ext) {
          ring = null; siteParts = { bb, n: (site.members || []).length };
        }
      }
    }
    if (ring && ring.length >= 4) {
      outline = ring.slice(0, -1); if (polyArea(outline) < 0) outline.reverse(); outlineSrc = elemUrl(site);
      // Recentre the local frame on the outline so a ledger point that sits off to one side cannot push the site out of the scene.
      const c = centroid(outline), shift = Math.hypot(c[0], c[1]);
      if (shift > 1) {
        const cosLat = Math.cos(lat * DEG);
        origin = { lat: lat + c[1] / (R * DEG), lon: lon + c[0] / (R * DEG * cosLat), shiftedM: +shift.toFixed(0) };
        P = projector(origin.lat, origin.lon); outline = outline.map(([x, y]) => [+(x - c[0]).toFixed(2), +(y - c[1]).toFixed(2)]);
      }
    }
    const t = site.tags; siteTags = { historic: t.historic, name: t['name:en'] || t.name || null, wikidata: t.wikidata || null, castle_type: t.castle_type || null, fortification_type: t.fortification_type || null, heritage: t.heritage || t['heritage:website'] || null, description: t.description || t['description:en'] || t['description:pt'] || null, barrier: t.barrier || null, ruins: t.ruins || null, website: t.website || null };
    report.notes.push(`site: ${elemUrl(site)} historic=${t.historic ?? (isForced(site) ? '(none; chosen by siteWay)' : '(none; chosen by its Wikidata id)')}${t.wikidata ? ' ' + t.wikidata : ''} ${scored[0].d.toFixed(0)} m from ledger point`);
    if (siteParts) {
      const [x0, y0, x1, y1] = siteParts.bb, w = x1 - x0, h = y1 - y0, c = [(x0 + x1) / 2, (y0 + y1) / 2];
      // recentre on the parts when the site is compact enough to fit one scene; a site relation spread over a region keeps the ledger point
      if (Math.max(w, h) <= 2 * maxHalf && Math.hypot(c[0], c[1]) > 1) {
        const cosLat = Math.cos(lat * DEG), shift = Math.hypot(c[0], c[1]);
        origin = { lat: lat + c[1] / (R * DEG), lon: lon + c[0] / (R * DEG * cosLat), shiftedM: +shift.toFixed(0) }; P = projector(origin.lat, origin.lon);
      }
      report.notes.push(`site is a ${t.type || 'site'} relation of ${siteParts.n} parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (${w.toFixed(0)} x ${h.toFixed(0)} m)`);
    }
  } else report.notes.push('site: no closed historic=* way/relation found; location-only scene');

  // 2. Scene bounds from the outline (or a fixed box around the point).
  let half = minHalf;
  if (outline) { const b = bboxOf(outline); half = Math.max(minHalf, Math.min(maxHalf, Math.max(b[2] - b[0], b[3] - b[1]) / 2 + margin)); }
  else if (siteParts) { const b = siteParts.bb; half = Math.max(minHalf, Math.min(maxHalf, Math.max(b[2] - b[0], b[3] - b[1]) / 2 + margin)); }
  const bounds = [-half, -half, half, half];

  const elements = [];
  const push = (el) => { el.id = el.id || `${el.kind}-${elements.length}`; elements.push(el); tally(el.kind); };
  if (outline) push({ id: 'outline', kind: 'outline', poly: outline, src: outlineSrc, ev: 'mapped', conf: 0.8, name: siteTags.name, osmTags: siteTags, ...(site.tags.historic ? {} : { conf: 0.65, note: `OSM tags this ${site.type} ${Object.entries(site.tags).filter(([k]) => ['building', 'barrier', 'name', 'landuse', 'tourism', 'man_made'].includes(k)).map(([k, v]) => k + '=' + v).join(', ')}, not historic=*; ${isForced(site) ? 'promoted to the site outline by the siteWay build option' : `taken as the site outline because it carries the site's Wikidata id (${wikidata})`}` }) });

  // 3. Everything else inside the bounds.
  for (const e of els) {
    const t = e.tags || {}; if (!t || e === site) continue;
    if (e.type === 'node') {
      if (!t.historic && !t.name) continue;
      const p = P(e); if (Math.abs(p[0]) > half || Math.abs(p[1]) > half) continue;
      push({ kind: 'marker', at: p, name: t['name:en'] || t.name || t.historic, osmTags: { historic: t.historic || null, inscription: t.inscription || null, religion: t.religion || null }, src: elemUrl(e), ev: 'mapped', conf: 0.9 });
      continue;
    }
    if (e.type !== 'way' || !e.geometry) continue;
    const pts = e.geometry.map(P), closed = isClosed(e.geometry), bb = bboxOf(pts);
    if (!intersects(bb, bounds)) continue;
    const poly = closed ? pts.slice(0, -1) : null;
    const src = elemUrl(e), nm = t['name:en'] || t.name || null;
    if (t.natural === 'coastline') { push({ kind: 'coastline', path: pts, src, ev: 'mapped', conf: 0.85, _raw: e }); continue; }
    if (t.barrier === 'city_wall' || t.barrier === 'wall' || t.historic === 'citywalls' || t.historic === 'city_wall') {
      const h = num(t.height); push({ kind: 'wall', path: closed ? poly : pts, closed, src, ev: 'mapped', conf: 0.8, name: nm, ...(h != null ? { h: { v: h, src } } : {}) }); continue;
    }
    if (t.barrier === 'retaining_wall') { push({ kind: 'retaining-wall', path: pts, src, ev: 'mapped', conf: 0.8, ...(num(t.height) != null ? { h: { v: num(t.height), src } } : {}) }); continue; }
    // A closed cliff ring is a pit rim when it is also tagged building (a sunken-courtyard dwelling: Matmata, Chinese dikengyuan)
    // or drawn clockwise (OSM puts the low side of a cliff on the right, so clockwise means the inside is lower). Its depth is not
    // mapped; the viewer draws a schematic depth and says so. Stable id from the OSM way so overlays can address it.
    if (t.natural === 'cliff' && poly && (t.building || signedArea(poly) < 0)) { push({ id: `pit-w${e.id}`, kind: 'pit', poly, src, ev: 'mapped', conf: 0.7, name: nm, use: t.building || null, ...(num(t.height) != null ? { h: { v: num(t.height), src, note: 'height tag read as pit depth' } } : {}) }); continue; }
    if (t.building && poly) {
      const lv = num(t['building:levels']), ht = num(t.height);
      push({ kind: 'building', poly, src, ev: 'mapped', conf: 0.75, name: nm, use: t.building, amenity: t.amenity || t.religion || null, ...(ht != null ? { h: { v: ht, src } } : lv != null ? { h: { v: lv * 3.2, src, note: `${lv} levels x 3.2 m` } } : {}) }); continue;
    }
    if (t.natural === 'water' && poly) { push({ kind: 'water', poly, src, ev: 'mapped', conf: 0.85, name: nm, water: t.water || 'water' }); continue; }
    if (t.waterway && !closed) { push({ kind: 'waterway', path: pts, w: WATERWAY_WIDTH[t.waterway] ?? 3, waterway: t.waterway, src, ev: 'mapped', conf: 0.7, name: nm }); continue; }
    if (t.highway) { push({ kind: 'road', path: pts, w: ROAD_WIDTH[t.highway] ?? 3, highway: t.highway, src, ev: 'mapped', conf: 0.8, name: nm }); continue; }
    if (t.natural === 'cliff' && !closed) { push({ kind: 'cliff', path: pts, src, ev: 'mapped', conf: 0.7 }); continue; }
    if (t.natural === 'bare_rock' && poly) { push({ kind: 'zone', poly, zone: 'bare_rock', src, ev: 'mapped', conf: 0.7, name: nm }); continue; }
    if ((t.landuse && ZONE_LANDUSE.has(t.landuse) || t.leisure || t.amenity === 'place_of_worship' || t.historic) && poly) {
      push({ kind: 'zone', poly, zone: t.landuse || t.leisure || t.historic || t.amenity, src, ev: 'mapped', conf: 0.7, name: nm }); continue;
    }
  }

  // 4. Sea from coastline: join chains, clip to bounds, close clockwise (water is on the right of an OSM coastline).
  const coast = elements.filter((e) => e.kind === 'coastline');
  if (coast.length) {
    const chains = joinRings(coast.map((e) => e._raw)).map((r) => r.map(P));
    let n = 0;
    for (const chain of chains) {
      for (const piece of clipLine(chain, bounds)) {
        const poly = closeAlongBounds(piece, bounds);
        if (poly && Math.abs(polyArea(poly)) > 100) { push({ id: `sea-${n++}`, kind: 'water', poly, water: 'sea', src: 'derived:osm-coastline', from: coast.map((c) => c.src), ev: 'mapped', conf: 0.6, note: 'closed along scene bounds from coastline ways; water assumed on the right of the way' }); }
      }
    }
    if (!n) report.notes.push('coastline present but no chain crosses the bounds cleanly; sea polygon not derived');
    // Islands: a closed coastline ring wholly inside the bounds is land. Cut it out of the sea polygon that contains it (a keyhole polygon: the
    // outer ring, a zero-width slit to the island ring, the ring in the opposite direction, and back), so the island is not dug to sea floor.
    const seas = elements.filter((e) => e.kind === 'water' && e.water === 'sea');
    const pin = (x, y, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
    for (const chain of chains) {
      const a = chain[0], b = chain[chain.length - 1];
      if (chain.length < 5 || Math.hypot(a[0] - b[0], a[1] - b[1]) > 0.5) continue;
      if (chain.some((q) => Math.abs(q[0]) > half || Math.abs(q[1]) > half)) continue;
      let ring = chain.slice(0, -1); if (Math.abs(polyArea(ring)) < 400) continue;
      const sea = seas.find((e) => pin(ring[0][0], ring[0][1], e.poly)); if (!sea) continue;
      if (Math.sign(polyArea(ring)) === Math.sign(polyArea(sea.poly))) ring = ring.slice().reverse();
      let bi = 0, bd = Infinity; sea.poly.forEach((q, i) => { const d = Math.hypot(q[0] - ring[0][0], q[1] - ring[0][1]); if (d < bd) { bd = d; bi = i; } });
      sea.poly = [...sea.poly.slice(0, bi + 1), ...ring, ring[0], ...sea.poly.slice(bi)];
      sea.note = (sea.note || '') + '; island coastline ring cut out as a hole';
      report.notes.push(`island ring (${Math.abs(polyArea(ring)).toFixed(0)} m2) cut out of ${sea.id}`);
    }
  }
  for (const e of elements) delete e._raw;
  return { site: siteTags, outline, origin, bounds, elements, report };
}
// shoelace area in plan metres (x east, y north): positive counter-clockwise, negative clockwise
function signedArea(P) { let a = 0; for (let i = 0, j = P.length - 1; i < P.length; j = i++) a += (P[j][0] - P[i][0]) * (P[j][1] + P[i][1]); return a / 2; }
