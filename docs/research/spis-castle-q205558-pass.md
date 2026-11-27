# Spiš Castle (Spišský hrad), Slovakia: fort-fidelity pass (mapped T1 plus schematic constructed layer)

Date of pass: 2026-11-27. Trace: `src/levels/spis-castle-q205558.trace.js` (from `data/traces/spis-castle-q205558.trace.json` plus `tools/trace/curation/spis-castle-q205558.mjs`). Level: `src/levels/spis-castle-q205558.js`.
Eras: `1250`, `1500`, `today`, each with a `~built` constructed view.

**Status: documented layer T1 (OSM only), no plan read, so no T2.** The sandbox could not reach Commons or the plan search (`data/plans/search/spis-castle-q205558.json` and `data/geometry/spis-castle-q205558/` were absent), so the geometry is the OSM mapping already in the auto trace. That mapping is unusually good here: the whole perimeter ring, named gates, palace, chapel, bergfried and towers.

## Documented (written sources, all secondary; no primary or survey source read)

| Fact | Value | Source |
|---|---|---|
| First reference | 1120; construction began early 12th century on a travertine hill, over a geological fault, and the first structure collapsed | Wikipedia; UNESCO nomination text |
| Late 12th c. keep | large cylinder about 22.5 m across, walls 3.8-4 m, central pillar about 3.4 m; its collapse led to rebuilding the northern summit | medievalheritage.eu |
| Early 13th c. | stone wall on the rock edge, irregular outline; three-storey Romanesque palace (store, hall, wooden defensive porch) on the highest northern point, entrance on the west; round bergfried a few metres SW of the old keep, upper-floor entrance; upper ward about 145 x 60 m, gatehouse in the southern corner | medievalheritage.eu |
| After 1241 | small outer bailey SW with a square residential tower on its north wall and a gate tower at its south entrance; free-standing chapel between bergfried and palace | medievalheritage.eu |
| Palace / keep dates | palace completed 1249, keep 1270 | UNESCO nomination text |
| 1370-80 | middle ward about 150 x 60 m W and S, crenellated, ditch and rampart; southern gatehouse with large foregate and drawbridge pit; west postern tower | medievalheritage.eu |
| First half 15th c. | lower ward about 285 m long, up to 115 m wide, wall over 500 m with gun loops and three square towers (the western a gatehouse with portcullis); about 1443 Jiskra's Tower, a huge cylinder, mid-ward with palisade and dry moat | medievalheritage.eu |
| Second half 15th c. (Zapolya) | palace rebuilt with vaulted lower storey; Gothic chapel with west gallery (c. 1470); long residential range on the west curtain with timber porch; semicircular tower in the western upper ward; bergfried heightened and thickened; larger rock-cut cistern; two more residential buildings in the east upper castle | medievalheritage.eu; Wikipedia (chapel c. 1470, Zapolya to 1528) |
| 16th c. | upper ward reorganised, arcaded passage, cannon positions; old upper gate rebuilt at century end; final extent about 4.15 ha | medievalheritage.eu |
| Owners | Hungarian crown to 1464; Zapolya to 1528; Thurzo 1531-1635; Csaky 1638-1945; Csaky left early 18th c. | Wikipedia |
| 1780 | fire destroyed the castle, cause unknown; ruin since; state-owned from 1945; stabilisation and partial reconstruction from 1970; UNESCO 1993; closed for reconstruction in 2026 | Wikipedia; slideshare summary |
| Survives | Romanesque palace, 13th-c. bergfried (viewing platform), Gothic chapel walls (vault collapsed), walls along most of each ward with gatehouses and lower-ward towers | medievalheritage.eu |

Conflict: area is given as 41,426 m2 (Wikipedia infobox), 3.9 ha (Wikipedia text) and about 4.15 ha (medievalheritage.eu). The OSM perimeter ring (way 219698596) measures about 3.6 ha inside the 200 m terrain window. The ward dimensions in the text (150 x 60 m, 285 x 115 m) are not tested against OSM beyond the lower ward length, because the lower ward leaves the terrain grid.

## Mapped (OSM, ODbL; `evidence.mapped = 132`, heights unknown except 11 small posts)

Perimeter ring way 219698596; west curtain way 1559860585 ("13th-century rampart"); Romanesque palace 112672671; castle chapel 112672638; bergfried 427851572 (about 12 m across); "bastion" 1559879120 (the semicircular tower); square residential towers 1559860581 and 1559841228; named gates: lower 112672665, middle 112672676, upper 1559860586, "3rd Castle Gate" 112672636, "gate to the middle castle" 1559841223; barbican 1559870000; "Renaissance palace" 1559860598 and "Renaissance arcades" 1559860596; castle cistern 1559860602; four cannons.
OSM names are Wikipedia-style labels, not dated; which phase built each mapped line is not stated.

## Inferred / constructed (schematic, assumed heights with rules)

- Documented eras `1250` and `1500` carry the mapped lines back unchanged (marked inferred): the 13th-c. set is the upper castle only; the 15th-c. set adds the ward walls and gates.
- Constructed layer, 28 elements (9 walls, 4 gate openings, 10 towers, 5 building masses): upper-castle curtains (west, north-east, assumed south closing wall), small outer bailey walls, middle-ward walls and east/foregate line, lower-ward walls (clipped to the terrain grid), four gate openings with flanking towers, Romanesque palace, two bergfried forms, 13th-c. and Gothic chapels, west residential range, semicircular tower, square residential tower, arcades (present only).
- Heights (all assumed): curtains 7 m, lower ward 5.5 m, gate towers 10-11 m, palace 11 m, bergfried 20 m then 24 m, chapels 7 m and 9 m, west range 10 m. No height was read anywhere.
- The upper castle's south closing wall between the west curtain tip and the east wall is an assumed line (confidence 0.1).

## Missing (not drawn, and why)

- Any plan, survey or elevation: none read. Next step: ask a Commons plan search and the Slovak monument office (PUSR) records.
- Jiskra's Tower: named, but not mapped and in the middle of the lower ward, which lies beyond the terrain grid (200 m); not drawn.
- The southern two-thirds of the lower ward (to about 320 m south) are outside the 200 m terrain grid of the existing trace; the grid would need regenerating (trace file is shared data, not edited here). The lower-ward wall is drawn only inside the grid.
- Two of the three lower-ward square towers; the west postern tower of the middle ward; the foregate pit and drawbridge; the old keep's footprint; the two east-upper-castle residential buildings (OSM `building-59` is a 22 x 85 m strip that may be a terrace, not drawn as a mass); the ditch and rampart of the middle ward.
- Roofs, timber porches, interiors and the 1780 fire damage.
- Square tower footprints: the schematic tower element is round, so the mapped square residential tower is drawn as a round mass.

## Licences

OSM ODbL and Terrarium credited in the trace header. No image or text copied from the web sources; facts are paraphrased with attribution. No raw geometry, no plan pixels.
