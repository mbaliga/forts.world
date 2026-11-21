> **Not in this repository.** The three `.glb` bodies described here were adapted from 0 A.D. (CC BY-SA 3.0) and are not
> part of forts.world (see `LICENSES.md`). `characters.json` (palettes, heads, props) is this project's own and still
> drives the game's built-in figures. A licence-clean body kit is still to be made.

# The canonical character

One human body, rigged and animated, dressed by data. Everything here is meant to be extended for new peoples and
periods (Southeast Asia, Africa, Australia and Aotearoa, Central Asia, China, Northeast India) without new modelling
for the common case.

## Files

- `body_jama.glb`: long-sleeved, knee-length coat over trousers (jama, angarkha, chapan, deel, changshan...).
- `body_bare.glb`: bare body (dhoti, lungi, sarong, loincloth, with or without an upper garment).
- `body_dress.glb`: a woman's long dress (sari, lehenga, sarong-kebaya, ao, robe).
- Each holds a 102-bone skeleton with named bones (`head`, `neck`, `chest`, `spine`, `hip`, `arm_L/R`,
  `forearm_L/R`, `hand_L/R`, `weapon_R`, `weapon_L`, `shield`, `helmet`...), the animations `walk` and two or three
  `idle` variants, and a per-vertex attribute `_region` (exported as `__REGION`) marking nine body regions:
  0 head and hands, 1 forearm, 2 upper arm, 3 torso, 4 spare, 5 waist, 6 thigh or skirt, 7 calf, 8 foot.
- Source: 0 A.D. by Wildfire Games, `art/meshes/skeletal/new/` and `art/animation/biped/citizen/`, CC BY-SA 3.0,
  converted by the pipeline in `tools/` (COLLADA → glTF, regions from skin weights, scaled to 1.5 m without head).

## Dressing a character

A character is a palette of nine colours (one per region), a headwear style and a carried object. In the game this
comes from `KINDS` in `src/game/people.js` through `dressFromKind()` in `src/game/characters.js`; the head, face,
headwear and props are built by `src/game/figures.js` and ride on the `head` and `weapon_R` bones.
`characters.json` lists every current kind in this form; add new ones there (or in `KINDS`).

To add a people: choose the body cut, set the palette (skin tones; garment colours), add a headwear style in
`figures.js` (the head section) if none fits, and props as needed. For garments that change the silhouette
(armour, capes, wide trousers, hats with brims) add a mesh parented to the right bone, as the headwear is.

## Licence

These bodies and animations are adaptations of CC BY-SA 3.0 work: credit Wildfire Games, and share adaptations
under the same licence.
