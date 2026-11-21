# Unit kit: one body, many soldiers

Status: design + seed data (2026-11-15). Nothing here is rendered yet; no part has been checked against a source.

## Goal

Design the infantry body **once**, then make every soldier by swapping layers on it: garments, armour, headgear,
weapons, shields, and (separately) a mount or war animal. Carthage, elephants and "weapons of every kind" are the
destination. The **Indian region comes first**, and nothing is added for another region until the Indian set works end to end.

## What already exists (we extend it, we do not replace it)

| Piece | Where | What it gives us |
| --- | --- | --- |
| Canonical skinned body, 3 cuts (`body_jama`, `body_bare`, `body_dress`) | `assets/characters/` | 102-bone rig, `walk` + idle clips, nine colour regions, sockets `weapon_R`, `weapon_L`, `shield`, `helmet`, `head` |
| Dressing by palette | `src/game/characters.js` (`dressFromKind`) | one colour per body region, headwear and prop riding on bones |
| Jointed low-poly figure | `src/game/figures.js` (`figureGeometry`) | cheap GPU-animated crowd figures; heads, hats, props as parts |
| Kinds | `src/game/people.js` (`KINDS`) | today's flat `{top,bottom,sash,head,prop}` specs |
| War animals | `src/game/fauna3d.js` | `elephant`, `horse`, `camel`, `zebu` glb; `tack` (howdah, saddle) |
| Game stats | `content/units.json` | Godot-side unit stats |

The body and animations are 0 A.D. (Wildfire Games), CC BY-SA 3.0, so everything derived from them is share-alike.
Do not pull in further 0 A.D. meshes (e.g. its Carthaginian or elephant units) without recording the licence per file.

## Model

A **soldier** is `body + layers + loadout`, all data:

```
soldier = {
  body:      { cut, height, build, skin },                 // one parametric base
  garment:   part id   (lower, upper, wrap, sash)          // colour regions + optional silhouette mesh
  armour:    part id[] (head, torso, arms, legs)           // meshes parented to bones
  headgear:  part id
  main_hand: part id   (socket weapon_R)
  off_hand:  part id   (socket weapon_L or shield)
  ranged:    part id   (bow, javelin bundle, matchlock…)
  mount:     mount id  (elephant | horse | camel | none) + tack + crew[]
  evidence:  per-part tag
}
```

### Layers and sockets

| Layer | Attach to | Mechanism |
| --- | --- | --- |
| Garment colour/cut | body regions 0–8 | palette (exists) |
| Garment silhouette (dhoti drape, skirt, coat skirts) | `hip`, `thigh_*` | mesh skinned to those bones |
| Armour (mail, lamellar, quilted, plate) | `chest`, `spine`, `arm_*`, `forearm_*`, `thigh_*` | mesh + region tint |
| Headgear (turban, helmet, cap) | `head` / `helmet` | mesh (exists for turban/pagdi/cap) |
| Weapon | `weapon_R` / `weapon_L` | rigid mesh with a grip offset and an "aim axis" |
| Shield | `shield` | rigid mesh |
| Mount | separate rig; rider socket on the animal | elephant carries a howdah with 1–3 crew sockets |

### Parts have metadata, not just meshes

Each part (see `content/units-kit/schema.md`) carries: `id`, `kind`, `region/period`, `socket`, `mesh` (or `proc`
recipe), `dims_m` (real-world size where known), `materials`, `evidence`, `sources[]`, `gaps[]`.

### Evidence tags (same spirit as the fort ledger)

- `documented`: a named source depicts or describes this exact thing (object record, relief, text passage), cited.
- `inferred`: built from a related documented example, with the leap stated.
- `placeholder`: stands in so the loadout renders; must not be shown as history without the badge.
- `needs-source`: listed from general knowledge, not yet checked. **Everything in the seed is currently this.**

The viewer shows the tag on every part, so a soldier is as honest as a fort level.

## Build order

1. **Schema + seed catalogue** (this commit): Indian-region parts and loadouts, all `needs-source`.
2. **Loadout compiler**: `loadout.json` → existing `KINDS`-style spec (colour palette, head, prop) so current code
   renders it with no engine change. This gives a working first loop immediately.
3. **Socketed meshes**: procedural weapons/shields first (spears, swords, bows are simple), then armour layers.
4. **Mount + crew**: elephant with howdah sockets, then horse and camel.
5. **Viewer**: pick region/era/unit, orbit, toggle layers, see evidence tags and gaps.
6. **Source pass**: replace `needs-source` with `documented`/`inferred` part by part; register images with licences.
7. **Other regions**: Carthage (Punic army incl. elephants), then Hellenistic, Persian, Central Asian, SE Asian.

## First Indian-region set (periods)

Mauryan–Shunga; Gupta; early medieval (Chola, Rashtrakuta, Rajput); Delhi Sultanate; Vijayanagara; Mughal;
Maratha; Portuguese and other European garrisons (Goa/Vasai/Janjira context, matching the fort programme).

## Source routes (to verify, not yet read)

Sanchi, Bharhut, Amaravati, Konark, Hoysala and Chola temple reliefs; the Arthashastra (army divisions, elephants);
Mughal manuscripts (Akbarnama, Baburnama) and the Ain-i-Akbari army section; museum arms and armour records with open
licences (Met, Rijksmuseum, Royal Armouries, Wikimedia Commons categories). Each gets a row in the part's `sources[]`
with licence before the part leaves `needs-source`.

## Open questions

- Armour as silhouette meshes on the 0 A.D. skeleton vs. a second body cut with armour baked in.
- Crowd budget: skinned bodies are capped (240 in `people.js`); mass formations use the jointed figure. Both need the same loadout input.
- Elephants: 0 A.D. `elephant.glb` has no howdah/crew sockets yet.
