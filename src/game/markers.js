// Place markers in the idiom of the region: a brass samai lamp in Maharashtra, a small chhatri in Rajasthan,
// a Qutb Shahi minaret top at Golconda, a jharokha at Gwalior, and Gingee's stepped Kalyana Mahal tower.
import * as THREE from 'three';
import { Mesher, smoothGeometry } from '../core/mesher.js';

const T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
export function markerStyle(def) {
  if (def.marker) return def.marker;
  const r = def.region || '';
  if (/Rajasthan/.test(r)) return 'chhatri';
  if (/Telangana/.test(r)) return 'minaret';
  if (/Madhya Pradesh/.test(r)) return 'jharokha';
  if (/Tamil Nadu/.test(r)) return 'vimana';
  return 'samai';
}
export function markerGeometry(style) {
  const M = new Mesher(0), W = [1, 1, 1], D = [0.78, 0.74, 0.66];
  const lathe = (pts, seg, col) => { const g = new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg); M.geometry(g.toNonIndexed(), null, col); };
  if (style === 'samai') {
    // a standing brass lamp: round foot, turned stem, a dish of five wicks, a bird finial
    lathe([[0.01, -0.62], [0.28, -0.6], [0.3, -0.55], [0.12, -0.5], [0.06, -0.42], [0.08, -0.3], [0.05, -0.2], [0.07, -0.05], [0.05, 0.05], [0.3, 0.1], [0.34, 0.16], [0.05, 0.16], [0.06, 0.28], [0.1, 0.34], [0.04, 0.42], [0.08, 0.5], [0.01, 0.6]], 14, W);
  } else if (style === 'chhatri') {
    // a small domed pavilion on four pillars, with a chhajja and a finial
    const b = new THREE.BoxGeometry(0.62, 0.08, 0.62); b.translate(0, -0.5, 0); M.geometry(b.toNonIndexed(), null, D);
    for (const [x, z] of [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]]) { const c = new THREE.CylinderGeometry(0.035, 0.04, 0.42, 6); c.translate(x, -0.25, z); M.geometry(c.toNonIndexed(), null, D); }
    const ch = new THREE.BoxGeometry(0.72, 0.04, 0.72); ch.translate(0, -0.02, 0); M.geometry(ch.toNonIndexed(), null, W);
    lathe([[0.27, 0.0], [0.27, 0.04], [0.25, 0.12], [0.18, 0.24], [0.08, 0.3], [0.03, 0.34], [0.05, 0.4], [0.01, 0.5]], 16, W);
  } else if (style === 'minaret') {
    // a Qutb Shahi minaret top: shaft, petalled balcony, a bulbous dome on a necked drum, finial
    lathe([[0.12, -0.6], [0.12, -0.15], [0.26, -0.12], [0.28, -0.06], [0.12, -0.05], [0.11, 0.12], [0.16, 0.16], [0.2, 0.24], [0.17, 0.34], [0.08, 0.42], [0.03, 0.46], [0.04, 0.52], [0.01, 0.62]], 16, W);
  } else if (style === 'jharokha') {
    // a bracketed balcony under a curved bangla roof
    const bs = new THREE.BoxGeometry(0.62, 0.08, 0.34); bs.translate(0, -0.3, 0); M.geometry(bs.toNonIndexed(), null, D);
    for (const x of [-0.24, 0.24]) { const br = new THREE.ConeGeometry(0.06, 0.26, 5); br.rotateX(Math.PI); br.translate(x, -0.46, 0); M.geometry(br.toNonIndexed(), null, D); const c = new THREE.CylinderGeometry(0.03, 0.03, 0.34, 6); c.translate(x, -0.09, 0.1); M.geometry(c.toNonIndexed(), null, W); }
    const roof = new THREE.CylinderGeometry(0.22, 0.22, 0.72, 16, 1, false, 0, Math.PI); roof.rotateZ(Math.PI / 2); roof.scale(1, 0.55, 1); roof.translate(0, 0.08, 0); M.geometry(roof.toNonIndexed(), null, W);
    lathe([[0.04, 0.2], [0.05, 0.26], [0.01, 0.36]], 8, W);
  } else {
    // Gingee: a stepped pyramidal tower (after the Kalyana Mahal) with a pot finial
    for (let i = 0; i < 4; i++) { const s = 0.5 - i * 0.1; const b = new THREE.BoxGeometry(s, 0.16, s); b.translate(0, -0.45 + i * 0.18, 0); M.geometry(b.toNonIndexed(), null, i % 2 ? D : W); }
    lathe([[0.1, 0.27], [0.12, 0.32], [0.08, 0.38], [0.1, 0.43], [0.01, 0.55]], 10, W);
  }
  return smoothGeometry(M.toGeometry(), 40);
}
