// Orthographic isometric camera with smooth follow, pan, zoom and 90° rotation steps.
import * as THREE from 'three';
import { clamp, DEG } from '../core/geom.js';

export class IsoCamera {
  constructor() {
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 8000);
    this.target = new THREE.Vector3();   // render coords
    this.goal = new THREE.Vector3();
    this.az = -45; this.goalAz = -45;     // plan angle (deg, CCW from east) of the camera as seen from the target
    this.el = 40;
    this.viewH = 70; this.goalViewH = 70;
    this.minViewH = 18; this.maxViewH = 600;
    this.aspect = 1;
    this.bounds = null; // plan bounds
    this.dist = 2500;
  }
  setAspect(a) { this.aspect = a; }
  setBounds(b) { this.bounds = b; }
  jumpTo(x, y, h) { this.goal.set(x, h, -y); this.target.copy(this.goal); }
  lookAt(x, y, h) { this.goal.set(x, h, -y); }
  // plan forward (direction the camera looks, flattened) and screen-right on ground
  axes() {
    const a = this.az * DEG;
    const fx = -Math.cos(a), fy = -Math.sin(a);
    return { fx, fy, rx: fy, ry: -fx };
  }
  panPixels(dx, dy, viewportH) {
    const upp = this.viewH / viewportH;
    const { fx, fy, rx, ry } = this.axes();
    const k = upp / Math.sin(this.el * DEG);
    const px = -rx * dx * upp + fx * dy * k, py = -ry * dx * upp + fy * dy * k;
    this.goal.x += px; this.goal.z -= py;
    this.target.x += px; this.target.z -= py;
    this.clampGoal();
  }
  zoom(f) { this.goalViewH = clamp(this.goalViewH * f, this.minViewH, this.maxViewH); }
  rotate(steps) { this.goalAz += 90 * steps; }
  clampGoal() {
    if (!this.bounds) return;
    const [x0, y0, x1, y1] = this.bounds;
    this.goal.x = clamp(this.goal.x, x0, x1); this.goal.z = clamp(this.goal.z, -y1, -y0);
    this.target.x = clamp(this.target.x, x0 - 50, x1 + 50); this.target.z = clamp(this.target.z, -y1 - 50, -y0 + 50);
  }
  update(dt) {
    const k = 1 - Math.exp(-dt * 6);
    this.target.lerp(this.goal, k);
    this.az += (this.goalAz - this.az) * (1 - Math.exp(-dt * 8));
    this.viewH += (this.goalViewH - this.viewH) * (1 - Math.exp(-dt * 9));
    const a = this.az * DEG, e = this.el * DEG;
    const c = this.cam;
    c.position.set(this.target.x + Math.cos(a) * Math.cos(e) * this.dist, this.target.y + Math.sin(e) * this.dist, this.target.z - Math.sin(a) * Math.cos(e) * this.dist);
    c.up.set(0, 1, 0);
    c.lookAt(this.target);
    const h = this.viewH / 2, w = h * this.aspect;
    c.left = -w; c.right = w; c.top = h; c.bottom = -h;
    c.near = 1; c.far = this.dist * 2 + 1000;
    c.updateProjectionMatrix();
    c.updateMatrixWorld();
  }
  // north arrow angle on screen (deg, clockwise from screen-up)
  northAngle() { return -(this.az + 90) + 180; }
}
