# Drop-in: arriving in a fort from the time map

The time map lets you drag a person or a bird onto the map and drop into that place, like Google Maps' Street View.
This page is the arrival side: the URL the map opens, and the walk, fly and VR views of the fort viewer.
Code: `src/game/dropin.js` (the contract, pure functions, tested in `tests/drop-in.test.mjs`), `src/game/explorer.js`
(walk and fly), `src/game/xr.js` (WebXR), with small hooks in `app.js`, `boot.js`, `camera.js`, `viewmodes.js` and `ui.js`.

## The URL contract

```
?fort=<id>&mode=walk|fly|iso&at=<lat>,<lon>&heading=<deg>&era=<era id or year>&view=model|real
```

| Parameter | Meaning | If missing or not understood |
|---|---|---|
| `fort` | A level id (`murud-janjira-hand`), a level's file name (`janjira-hand`, as the ten-forts page lists them), or an id that ends with it | The saved or first fort, as before |
| `mode` | `walk`: a person at eye height. `fly`: a bird. `iso`: the map view from above | `iso` |
| `at` | WGS84 latitude and longitude, decimal degrees | The level's spawn point |
| `heading` | Compass degrees, clockwise from north (0 north, 90 east). Any number, taken modulo 360 | Walk and fly keep the iso view's direction; iso keeps the level's angle |
| `era` | An era id of that fort (`1774`, `today`), or a year (`1700`, `-300`, `today`): the era nearest that year is used | The saved or default era |
| `view` | `model` or `real` (as before, see `view-modes.md`) | The saved choice |

Examples (the ten-forts page, `node tools/world/build-reconstructions.mjs`):

- `?fort=janjira-hand&mode=walk&at=18.2999,72.9644&heading=90` lands in the court of Murud-Janjira, facing east.
- `?fort=mehrangarh&mode=fly&at=26.2981,73.0189&era=1700` flies over Mehrangarh in its era nearest 1700.

### From latitude and longitude to the scene

Scenes are drawn in a local plan frame: x east, y north, in plan units (metres divided by `units.planScale`). Traced
levels were projected from their trace's `origin` (`tools/trace/osm.mjs`, `projector`: an equirectangular projection
about the origin on a sphere of radius 6,371,008.8 m), and `toLocal` inverts the same formula. T1 levels keep the trace
on `def.trace`, so their origin is exact.

Hand-built levels (most of the ten forts) have no trace origin. Their plans are drawn around the catalogue point
`coords`, so that point is used as the origin. This anchor is approximate: expect tens of metres of offset, and the
hand plans are not guaranteed to be north-up to survey accuracy. Mehrangarh's hand level, for one, is a research
blockout whose `coords` sit about 125 m east of the OSM trace origin. A level can fix this by adding `origin: { lat, lon }`.

If `at` falls outside the scene, or inside a solid mass (a building, a wall, the sea), the walker starts at the nearest
walkable cell of the navigation grid (`src/core/nav.js`) and a toast says so and how far it moved. In fly mode the bird
starts above that point.

## Walk

A `PerspectiveCamera` (70°) at 1.7 m above the traveller, who is hidden. Movement is the iso traveller's own: the same
`nav.probe` steps, wall sliding, stairs and ramps (`App.stepTraveller`), at 5.5 m/s (9 with Shift).

- Desktop: WASD or arrows. Click the view to lock the mouse and look around (Esc releases it). Without the lock, drag to
  look. While locked, clicking walks to the point under the crosshair along the path finder, as a tap does in iso.
- Touch: the left 40% of the screen is a floating stick (it appears where the thumb lands); drag elsewhere to look; tap
  the ground to walk there.
- Q and E turn by 45°. **V** drops the view-mode ink at the pointer, or at the crosshair while the mouse is locked.

The drop: arriving in walk mode starts about 120 m above the arrival point, looking straight down, and descends to eye
level over 1.6 s. The height eases in log space, so it falls fast and the last metres settle; the view tilts up to the
horizon over the second half; the field of view opens from 62° to 70°. Any key, click or tap skips it.
`prefers-reduced-motion` skips it too.

## Fly

Free flight 20 to 300 m above the terrain. The floor is the higher of the terrain plus 20 m and the top of anything
standing there plus 8 m; both floor and ceiling push back softly rather than stopping you dead. Forward follows the gaze
(look down and fly to dive), strafing stays level, and the view banks into turns (up to 28°). 22 m/s, 55 with Shift.

- Desktop: the walk controls, plus Space to climb and C to sink, and the mouse wheel for a quick climb or dive.
- Touch: the stick and drag as in walk, plus an UP/DOWN slider on the right.
- **L**, or the **Walk** button, lands: the walker is placed on the nearest walkable ground below, and the camera settles
  to eye level over 1.3 s.

## The switcher

`Iso · Walk · Fly` sits under the `Model · Real` pill in the tool column, in the same style (keys **I**, **P**, **B**).
A **VR** button joins it when `navigator.xr.isSessionSupported('immersive-vr')` resolves true. The rotate and zoom
buttons hide in walk and fly. The minimap draws the view as a wedge from the eye.

## View modes in walk and fly

Both views keep working. The composite pass (`viewmodes.js`) learned perspective depth: view distance is reconstructed
from the hyperbolic depth buffer, view positions scale with distance, and metres per pixel grow with distance. Model's
edges read creases and depth steps from 1/z, which is linear across a flat face in perspective, so walls seen at a
glancing angle are not inked solid. Ambient occlusion uses the true distance for its radius. Real draws its sky (the
same Preetham sky that lights the scene) behind the horizon; Model leaves the paper colour there. Fog distances are
set for an eye near the ground. The ink drop still lands at the pointer (V) or the centre (the pill).

The walk and fly views also keep the iso camera's target, angle and span in step, so shadows, sound, clouds, ground
cover, figure scale (true scale) and the compass follow the view.

## WebXR

WebXR's `immersive-vr` session (WebVR is obsolete and not supported). `renderer.xr.enabled` is on, and the app now runs
on `renderer.setAnimationLoop`, which uses window frames normally and the headset's frames in a session.

- The rig stands at the walker's feet in a `local-floor` reference space, so eye height comes from the headset.
- **Left stick**: smooth locomotion at 2.4 m/s relative to where the head looks, on the walkable ground (the same
  `stepTraveller`).
- **Right stick left or right**: snap turn by 30°, about the head, with hysteresis so one push is one turn.
- **Trigger** (or the right stick pushed forward): a parabolic arc from the controller (9 m/s launch, real gravity),
  stopped where it meets the ground or a solid top. Teal with a ring where it can land on walkable ground, red where it
  cannot. Release to teleport; the head, not the rig centre, lands on the target.
- **Grip**: switch between Real and Model.

The post-processing chain is bypassed in XR (`ViewModes.renderXR`): the scene is drawn straight into the headset's
framebuffer. Real keeps its physically based materials, sky light and sky, tone-mapped by the renderer (ACES, the same
exposure). Model keeps the massing, flat ground and contours, but has no screen-space edges or occlusion.

## Frame times

Measured in headless Chromium with SwiftShader
(software WebGL on a shared 2-core sandbox), 1024×768, device pixel ratio 1, median of frames with a pixel read-back.
Software rendering is 50 to 100 times slower than an iPad GPU: read the ratios against the iso view, not the
milliseconds.

Median frame time in ms (7 frames, `adaptive` off, render scale 1). Walk at the arrival point, fly about 90 m up looking
22° down; iso at the level's default zoom. Ratios are against the iso view of the same look.

| Fort | Iso Real | Walk Real | Fly Real | Iso Model | Walk Model | Fly Model | Walk, during a switch |
|---|---|---|---|---|---|---|---|
| Murud-Janjira (683k triangles) | 3607 | 4224 (1.17×) | 4950 (1.37×) | 725 | 911 (1.26×) | 1131 (1.56×) | 5544 |
| Mehrangarh (636k) | 3636 | 3651 (1.00×) | 2747 (0.76×) | 1100 | 859 (0.78×) | 764 (0.69×) | 5125 |

XR, with the mocked headset below (two 512² eyes, direct render, Real, Murud-Janjira): 4791 ms, against 4224 for the
1024×768 walk view with post-processing. Stereo doubles the scene passes but skips the post chain, AO and MSAA targets.

So on an iPad the walk and fly views cost about what the iso view costs, within 0.7× to 1.6×: a perspective view
sees more of the scene at once (the sky, the far shore, more buildings), and fly sees the most. The dynamic resolution
of `view-modes.md` applies unchanged. In a headset the budget is tighter (72 to 90 Hz, two eyes): if a device
struggles, `viewModes.setQuality({ pbr: false })` or the Model view (grip) are the levers, and
`renderer.xr.setFramebufferScaleFactor` before entering.

## What was tested, and how

- Node: `tests/drop-in.test.mjs` (parsing, lat/lon to plan and back, era by year, fort aliases, heading conversion).
- Headless Chromium (SwiftShader): the ten-forts page with `?fort=janjira-hand&mode=walk&at=18.2999,72.9644` lands in
  the court at plan (0.5, 33.5), 12.2 m, inside the walls; a point inside a building moves 6 m with the toast; a point
  1.7 km outside starts at the nearest edge with the toast; walk, fly and iso in both views, mid drop-in, the switch.
- WebXR, with a mocked device (no headset and no emulator extension here): `navigator.xr`, an `XRSession`,
  `XRWebGLLayer`, a fixed viewer pose and two xr-standard controllers, injected before the page loads. Through three's
  real `WebXRManager`: the VR button appears, the session starts with `local-floor`, the rig stands at the walker,
  controllers connect, the left stick walks 0.72 m in 6 frames in the head's direction, two right-stick pushes turn 60°,
  the trigger draws a teal arc and ring and teleports 2 m, the grip switches to Model and back, both eyes render, and
  ending the session restores the canvas size and the button.
- Not tested: a real headset (comfort, scale, real tracking, controller models, frame rate on a Quest or Vision Pro),
  hand tracking, `bounded-floor`, the projection-layer path (`XRWebGLBinding`, used when the browser offers layers;
  the mock takes the `XRWebGLLayer` path), and real touch hardware (the stick and slider were written for it but driven
  only by code here).

## Limits

- The geo anchor of hand-built levels is approximate (see above); traced levels are exact to their trace.
- Walk mode does not jump, crouch or climb ladders the iso traveller does not climb; boats and mounts are not driven
  from the first-person view (the iso view still does it).
- The bird's floor is taken per navigation cell, so flying low it can clip a tall neighbour (a minaret, a flagpole)
  that stands in the next cell.
- In XR: no hand tracking beyond what three's controllers report, no comfort vignette during smooth locomotion, no
  seated mode (`local-floor` only), and Model has no edges.
- Perspective depth precision limits the Model edges beyond about 1.5 km (fly mode at the ceiling): far edges fade.
- At eye height the scene's edges show: the terrain ends at the level bounds and the backdrop hills are simple domes.
  Ground cover cards (grass tufts) built for the iso view read as spikes close up, especially in Model.
