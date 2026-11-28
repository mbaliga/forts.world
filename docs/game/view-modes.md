# View modes: Model and Real

The fort scenes can be seen two ways. The switch is the **Model · Real** pill at the top of the tool column, bottom right (key **V**).
The choice is remembered per browser (`localStorage` key `fw:view`) and can be forced with `?view=model` or `?view=real`.
Code: `src/game/viewmodes.js`. `App` builds it beside the renderer, calls `viewModes.onLoad()` once a fort is built and
`viewModes.render()` in place of `renderer.render()` every frame. Both views also work in the walk and fly
perspective views and, without the post chain, in WebXR: see `drop-in.md`.

## Model

The fort and its ground in the language of the time map (`web/home`):

- **Ground and water** are flat colours only. Light: ground `#fafaf8`, water `#e7eae9`, ink `#16191a`. Dark: ground
  `#12171a`, water `#0b0e10`, lines `rgba(233,237,238,.3)`. It follows the page theme (`prefers-color-scheme`, or
  `data-theme`), like the rest of the viewer.
- **Contours** are drawn in the ground shader from world height: nested intervals s, 2s and 8s, with s a power of two
  chosen from the zoom (`log2(viewH / 55)`), so 1 m lines appear close up and 8 m ones from afar. The finest set fades
  in continuously as the camera comes in, so nothing pops. Lines that would crowd closer than about 3 px (cliffs,
  scarps) fade out instead of filling in. The waterline is drawn firmer. The terrain skirt carries the contours down
  its sides, like the cut edge of a site model.
- **Buildings, walls, boats, people and props** are light-grey massing, lit only by a fixed key light and a sky term,
  with no textures, vertex colours or shadows. Trees are a paler, near-ground tone. The traveller is drawn in the
  accent colour so you can find yourself.
- **Edges** come from a screen-space pass over the depth buffer. The camera is orthographic, so depth is linear and
  its second derivative is zero on any flat face. Creases (where it is not zero), depth steps and the outline between
  massing and ground are inked. No EdgesGeometry is built, so the cost does not grow with the scene.
- **Soft occlusion**: the same depth-based ambient occlusion as Real, at a larger radius and lighter strength.
- Clouds, mist, surf, spray, smoke, ground cover, decals and the period lens (sepia filter) are switched off.

Cost: the cheapest way to draw the scene. Unlit shaders, no shadow-map lookups, no fog, and the shadow map is not
redrawn while only the Model view is showing (a pending redraw waits for Real). Then one full-screen pass (occlusion
at 10 samples, plus 8 taps for edges).

## Real

The most realistic look this scene can get without bought or downloaded assets:

- **Physically based materials.** Every Lambert or Phong material gets a `MeshStandardMaterial` twin for the Real
  pass, and the original stays in charge: its colour, opacity and visibility are copied over each frame. The twin
  keeps the original's shader edits (cloud shadows, ground detail, seasonal colour, the masonry courses, the sea's
  swell and depth tint) and adds procedural detail by surface kind:
  - stone (`masonry`, `solid`, `trim`): three octaves of 3-D noise as a bump, albedo mottling, roughness variation;
  - earth (`terrain`, `skirt`, `apron`, `backdrop`, `dunes`): ground-scale bump, low-frequency albedo variation;
  - leaves (`tree-*`, `crop-*`): fine bump and colour variation;
  - water (`sea`, `tanks`): roughness 0.07, three animated ripple octaves as a bump, so it reflects the sky and glints;
  - everything else: a faint bump.

  Each octave fades out once it is under about 2 px, so distant surfaces do not shimmer. Rain (`uWet`) makes
  surfaces glossy.
- **Sky light**: three's `Sky` (Preetham), lit by the current sun direction (which the hour, season and weather
  move), prefiltered with `PMREMGenerator` into `scene.environment`. It is rebuilt only when the sun has moved by
  about 2° and at most every 2 s. The hemisphere light is scaled to 45% in this pass so the image light does not
  double it.
- **Soft shadows**: the existing 2048² PCF-soft sun shadow, which follows the view.
- **Ambient occlusion**: depth-only screen-space AO (normals rebuilt from depth, 10 samples on a rotated spiral,
  2.2 m radius clamped to 3 to 40 px). It is written for this orthographic camera, which avoids a second scene pass:
  three's `SSAOPass` and `SAOPass` redraw the scene with a normal material, and `GTAOPass` is not in three 0.159.
- **Aerial perspective**: beyond the scene fog, the composite pass mixes in the sky colour with distance behind the
  camera target, more over low ground than high.
- **Tone mapping and grade**: an HDR (half-float) target where the device supports it, ACES filmic (the same curve as
  three's), cool shadows and warm highlights, about 8% more saturation, a gentle vignette, and dithering against
  banding.
- MSAA ×4 on both render targets.

Cost: the scene pass is heavier than before (standard BRDF, image light and bump against Lambert), plus one
full-screen composite.

## The switch: a drop of colour

Both views are drawn into their own multisampled render targets with depth textures, and one composite pass mixes
them through a mask. The mask is a disc around the point where the colour lands: the pointer for **V**, otherwise
the centre of the screen. Its radius is pushed out by a few broad noise lobes and a fine, fibrous edge noise, and
satellite droplets are thrown just past the rim. At the rim the colour pools and darkens a little and pushes the image
outward by a few pixels, and a damp halo shades the paper just ahead of it. Model to Real spreads out over 1.2 s
(fast, then slowing). Real to Model drains back into the point. Interrupting a switch carries on from where the ink is.
`prefers-reduced-motion` switches instantly. While the colour moves, both scenes are drawn, so those 1.2 s cost about
the sum of the two views.

`viewModes.freeze = 0..1` holds a switch at a fixed point (used for screenshots).

## Frame times

Measured in headless Chromium with SwiftShader (software WebGL on a 2-core sandbox, shared with other jobs), 1024×768,
device pixel ratio 1, view height 170 m, steady camera, median of 25 frames with a pixel read-back so the GPU work is
counted. Software rendering is 50 to 100 times slower than an iPad GPU, so read the ratios, not the milliseconds.

| Fort | Before (direct render) | Real | Model | During a switch (both) |
|---|---|---|---|---|
| Murud-Janjira (683k triangles) | 1737 ms | 3310 ms (1.9×) | 686 ms (0.39×) | 4065 ms |
| Mehrangarh | 1199 ms | 2541 ms (2.1×) | 655 ms (0.55×) | 3235 ms |

Where the Real cost goes (Murud-Janjira, same setup): the full Real view took 3388 ms. With the procedural detail off it
took 3084 ms. With the standard-material twins off (the old Lambert shading, but with the render targets, AO and grade)
it took 2015 ms, so the targets, AO and grade add about 15% over the direct render. Six AO samples instead of ten
changed nothing measurable (3365 ms). Render scale 0.75 took 2428 ms and 0.6 took 2111 ms.

So on an iPad: the Model view is cheaper than the old renderer. The Real view's extra cost is mostly the standard BRDF
with image light, which is the usual cost of PBR in three.js and well inside what an A12-or-later iPad does at 60 Hz on
scenes of this size. As a safety net, **dynamic resolution** (`viewModes.adaptive`, on by default) lowers the render
scale in 0.1 steps, down to 0.6, after about 1.5 s of frames slower than about 42 Hz. It raises the scale again after 4 s
of frames faster than about 57 Hz. At 0.6 the Real view costs about what the old renderer did. Frames during a switch
are not counted. Quality levers for slower devices: `viewModes.setQuality({ pbr, detail, ao })` and `viewModes.look`
(`exposure`, `env`, `hemi`).

## What a CC0 texture pass would add

Downloads from texture sites are blocked in this sandbox, so all detail is procedural. A pass with ambientCG or Poly
Haven sets (both CC0; record them in `LICENSES.md`) would add:

- photographed albedo, normal and roughness for laterite, basalt, sandstone, lime plaster, brick and dry earth, mapped
  triplanar in world space so no UVs are needed. This would replace the noise bump with real tooling, spalling and
  grain, which is where the procedural stone looks most synthetic close up;
- grass, scrub and leaf-litter sets blended by slope and the existing paint channels, with detail normal maps on the
  terrain;
- a real HDRI sky (Poly Haven) for image lighting, in place of the analytic sky, for richer bounce colour and cloud
  occlusion in reflections;
- water normal maps, which tile better than value-noise ripples.

Budget: two or three 1K texture sets as KTX2 or WebP, about 1 to 3 MB each, loaded on demand so the page does not grow
for Model-only viewers.

## Limits, and what would close the gap

- No global illumination: no bounce light from sunlit walls into courtyards. Baked light probes, or lightmaps for the
  hand-built levels, would add it.
- AO is screen-space and has no blur pass, so there is fine noise at high strength and halos at depth edges. A
  half-resolution AO with a bilateral blur, or GTAO when three is upgraded, would fix it.
- The geometry is the limit more than the shading: merlons, mouldings and roofs are low-poly boxes with no bevels, and
  trees are cards and blobs. Bevelled or chamfered edges in `core/mesher.js`, and CC0 tree and prop models
  (Quaternius, Kenney, Poly Haven), would close more of the gap than any shader.
- No reflections of the fort in the water (only the sky). Screen-space reflections or a planar reflector over the sea
  would add them, at roughly the cost of a second scene pass.
- No depth of field, bloom, volumetric light or temporal anti-aliasing. TAA would also let the AO and bump use fewer
  samples.
- WebGL 1 browsers fall back to switching materials with no edges, AO or ink.
