// The drop-in URL contract: arriving in a fort from the time map at a place, heading, era, view and mode.
//   ?fort=<id>&mode=walk|fly|iso&at=<lat>,<lon>&heading=<deg>&era=<era id or year>&view=model|real
// Pure functions (no DOM, no three.js) so they can be tested in Node. See docs/game/drop-in.md.

const R = 6371008.8, DEG = Math.PI / 180;   // the same sphere as tools/trace/osm.mjs `projector`
export const MODES = ['iso', 'walk', 'fly'];

// Read the drop-in parameters. Unknown or malformed values come back as null, so the caller keeps today's behaviour.
export function parseDropIn(query) {
  const q = new URLSearchParams(query || '');
  const mode = (q.get('mode') || '').toLowerCase();
  const view = (q.get('view') || '').toLowerCase();
  let at = null;
  const m = /^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/.exec(q.get('at') || '');
  if (m) { const lat = +m[1], lon = +m[2]; if (Math.abs(lat) <= 90 && Math.abs(lon) <= 180) at = [lat, lon]; }
  const hv = q.get('heading');
  const h = hv != null && hv.trim() !== '' ? Number(hv) : NaN;
  const era = (q.get('era') || '').trim();
  return {
    fort: q.get('fort') || null,
    mode: MODES.includes(mode) ? mode : null,
    at,
    heading: Number.isFinite(h) ? ((h % 360) + 360) % 360 : null,
    era: era || null,
    view: view === 'model' || view === 'real' ? view : null,
  };
}

// Where a level's plan frame is anchored on the earth. Traced levels carry the origin their trace was projected from
// (x east, y north, metres, equirectangular about the origin: tools/trace/osm.mjs). Hand-built levels only give the
// catalogue point `coords`, which their plans are drawn around; that anchor is approximate (tens of metres).
export function geoOrigin(def) {
  const o = def?.origin || def?.trace?.origin || def?.TRACE?.origin;
  if (o && Number.isFinite(o.lat) && Number.isFinite(o.lon)) return { lat: o.lat, lon: o.lon, source: 'trace' };
  const c = def?.coords;
  if (Array.isArray(c) && Number.isFinite(c[0]) && Number.isFinite(c[1])) return { lat: c[0], lon: c[1], source: 'coords' };
  return null;
}

// lat/lon to the level's plan coordinates (plan units = metres / planScale)
export function toLocal(def, lat, lon) {
  const o = geoOrigin(def); if (!o) return null;
  const k = def?.units?.planScale || 1;
  const x = (lon - o.lon) * DEG * R * Math.cos(o.lat * DEG), y = (lat - o.lat) * DEG * R;
  return { x: x / k, y: y / k, source: o.source };
}
export function toGeo(def, x, y) {
  const o = geoOrigin(def); if (!o) return null;
  const k = def?.units?.planScale || 1;
  return { lat: o.lat + (y * k) / (R * DEG), lon: o.lon + (x * k) / (R * DEG * Math.cos(o.lat * DEG)) };
}

// The year an era stands for: "c. 1760" -> 1760, "1600 BCE" -> -1600, "Today" -> this year; null when it has none.
export function eraYear(e, now = new Date().getFullYear()) {
  const s = `${e?.year ?? ''} ${e?.id ?? ''}`;
  if (/\btoday\b|\bnow\b|\bpresent\b/i.test(s)) return now;
  const m = /(\d{1,4})\s*(BCE|BC)?/i.exec(String(e?.year ?? '')) || /(\d{3,4})/.exec(String(e?.id ?? ''));
  if (!m) return null;
  const y = +m[1];
  return m[2] ? -y : y;
}

// An era id as given, or the era nearest a year ("1774", "-300", "today"). null when nothing fits.
export function pickEra(def, value, now = new Date().getFullYear()) {
  const eras = def?.eras || [];
  if (value == null || !eras.length) return null;
  const v = String(value).trim();
  const exact = eras.find((e) => e.id === v) || eras.find((e) => e.id.toLowerCase() === v.toLowerCase());
  if (exact) return exact.id;
  const y = /^today$|^now$/i.test(v) ? now : /^-?\d{1,4}$/.test(v) ? +v : null;
  if (y == null) return null;
  let best = null, bd = Infinity;
  for (const e of eras) { const ey = eraYear(e, now); if (ey == null) continue; const d = Math.abs(ey - y); if (d < bd) { bd = d; best = e.id; } }
  return best;
}

// A fort id as the site links it: the level id, the level's file name (janjira-hand for murud-janjira-hand), or an id
// that ends with it.
export function resolveFortId(levels, id) {
  if (!id) return null;
  const hit = levels.find((l) => l.id === id) || levels.find((l) => l.file === id) || levels.find((l) => l.id.endsWith('-' + id));
  return hit ? hit.id : null;
}

// compass heading (deg clockwise from north) <-> the iso camera's plan angle `az` (deg CCW from east, camera -> target)
export const headingToAz = (hd) => -90 - hd;
export const azToHeading = (az) => ((((-90 - az) % 360) + 360) % 360);
