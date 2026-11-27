# Himeji Castle: fort-fidelity pass (T1 mapped, three eras, schematic constructed layer)

Date of pass: 2026-11-27. Branch `dev`. Ledger id `himeji-castle-q188754`. Curation: `tools/trace/curation/himeji-castle-q188754.mjs`;
trace `src/levels/himeji-castle-q188754.trace.js` (generated); level `src/levels/himeji-castle-q188754.js`.
Base: `data/traces/himeji-castle-q188754.trace.json` plus `data/geometry/himeji-castle-q188754/` (OSM dump and Terrarium z15 tiles).

**Method and limit.** No plan or survey drawing was read: no Commons plan search file existed at the time and no plan was found by search.
The documented layer is therefore what OpenStreetMap maps (ODbL), dated by written sources. Nothing is T2. The constructed layer is schematic.
Japanese forms (the tenshu, yagura, yagura-mon gates) are drawn with the renderer's building elements; see "Renderer gaps".

## Documented (written sources, read for facts only)

| Fact | Value | Source |
|---|---|---|
| Keep height | 46.4 m total, 92 m above sea level on a 45.6 m hilltop; six floors over a basement (five roof layers seen from outside) | Wikipedia (en); OSM tag `height=46.4`, `building:levels=6`, `start_date=1609` on way 23707900 |
| Keep split | 31.5 m keep on a 14.85 m stone base (sum 46.35, matches 46.4) | tabi-mag.jp; nippon.com gives 31.5 m |
| Floor areas | 1st about 554 m2, 2nd 550, 3rd 440, 4th 240, 6th 115; basement 385 | Wikipedia (en) |
| Hideyoshi's keep | three storeys, 1581, floor about 55 m2; removed by Ikeda | Hyogo chronology, Wikipedia |
| Ikeda Terumasa | works begin 1601, Dai-Tenshu completed 1609; three moats and earthen banks; most surviving buildings and the layout date from his time | Hyogo chronology; Agency for Cultural Affairs text; himejicastle.jp |
| Ro no watariyagura | around 1609, two-tier two-storey with a basement | Heritage Database record 186416 |
| Honda Tadamasa | lord from 1617; Nishi-no-maru (West Bailey) developed with earthen walls, thick-walled watchtowers and a long gallery (about 240 m, watchtowers at each end); Kesho-yagura for Princess Sen 1617-18 | himejicastle.jp; Hyogo chronology; Wikipedia |
| Counts | 83 structures (74 Important Cultural Properties: 11 corridors, 16 yagura, 15 gates, 32 earthen walls); 84 gates originally, 21 remain; walls up to 26 m; about 1,000 loopholes survive | Wikipedia (en) |
| Moats | three originally, the outer now buried; mean width 20 m, max 34.5 m; Sangoku-bori about 2,500 m2 | Wikipedia (en) |
| Repairs | 1956-64 Showa; 2010-15 restoration; survived the 1945 raid | Hyogo chronology; Wikipedia |

## Mapped (OpenStreetMap, ODbL): 267 elements, all `mapped`, 0 `documented`

- The keep outline (32 x 28 m, way 23707900) with its tagged height.
- 11 named gate footprints (Hishi, Ha, Ni, Ro, Nu, Ri, To-no-ichi, Bizen, Mizu-no-ichi, Mizu-ni, Mizu-go) and 10 named yagura/corridor footprints in the Honmaru and Ni-no-maru (Taiko, Chi, Kuchi, Shio, I-kuruwa, To, former guardhouse, I and Ro watariyagura, Kesho).
- 10 West Bailey features read from the raw OSM dump because they fall outside the auto trace's window: Yo, Ta, Re and Ka watariyagura; Wa, Wo, Ru, Nu and Ka yagura; the entrance of the Hyakken-roka long gallery.
- Wall lines (`barrier=wall`), stone-wall lines (`retaining_wall`), the Inner Moat remains (way 281842913), a second moat polygon, and the Sangoku-bori outline (way 694032140; mapped area is compared with the 2,500 m2 in the build note).
- Names are the OSM `name` tags, romanised by this pass; the only glosses are those a source states (Hishi gate largest; Shio-yagura salt store; Kesho-yagura for Princess Sen).

## Inferred (carried back, labelled)

- Eras 1609 and 1618 carry the mapped line back unchanged and mark it `inferred`. Honda-era items (West Bailey yagura, walls inside the West Bailey, Kesho-yagura) are absent from 1609; this uses the Agency text and himejicastle.jp. A pre-Honda Nishi-no-maru enclosure may have existed; it is unmapped.
- Walls are assigned to the West Bailey by position (centroid x < -130 m, -150 < y < 30 m): an assumption, not a dated survey.

## Constructed (schematic) layer: 63 elements (34 buildings, 29 walls)

| Element | Basis | Assumed height and rule |
|---|---|---|
| Daitenshu stone base | mapped outline, 14.85 m from tabi-mag.jp | 14.85 m (published figure, inferred layer) |
| Five tiers | areas from the floor areas; aspect and centre assumed | 6 m, then about 5 m per tier so the ridge reaches about 46 m |
| 5 gates raised as two flanks each with a 3.2 m passage | mapped footprints (Hishi, Nu, Ni, To-no-ichi, Bizen); passage along the nearest mapped path | 6 m |
| 8 yagura and corridors (1609 onward), Kesho-yagura (1618), 9 West Bailey towers | mapped footprints as oriented rectangles with gable roofs | 8 m (two storeys at 4 m) from the Ro no watariyagura record; 6 m for West Bailey corridors |
| 29 plastered earthen wall runs | mapped wall lines | 2.4 m assumed; no height read |

## Not drawn, and why

- The three small keeps (Nishi, Inui, East): named by every source, positioned by none; the OSM outline is the whole complex. No footprint is invented.
- The watariyagura corridors that join the keeps, the interior, stairs, entrances, shachi, gables and eaves.
- Stone walls (ishigaki, up to 26 m): the OSM lines carry no height and the 30 m DEM cannot resolve terraces. Kept kerb-high.
- Small gates (Ha, Ri, Ro, water gates): footprints 1.4-6.5 m wide, too narrow to flank a 3 m passage; mapped footprint only.
- The Hyakken-roka long gallery body between the West Bailey towers: route unknown.
- The middle and outer moats (outer buried), the castle town, the three-storey keep of 1581, the Meiji-era West Bailey palace.

## Conflicts and caveats

- Terrain: the Terrarium DEM (about 30 m source, partly a surface model) reads 54-60 m at the keep against the published hilltop of 45.6 m, so the schematic keep stands about 10 m higher than the real ridge line.
- Area: Wikipedia gives 233 ha and an infobox 107 ha for the grounds; neither is used.
- Spawn: in the constructed eras the generic T1 spawn would fall inside the keep mass, so the level file starts the player on the nearest clear mapped path.

## Renderer gaps (proposals, not implemented)

1. `roofH` and `eave` pass-through for schematic buildings in `src/levels/t1.js` (the hip pitch is fixed at 0.45 of the short side, far too tall for a keep tier).
2. An irimoya (hip-and-gable) roof and a karahafu (curved) gable, plus a low-pitch multi-tier eaves roof helper for a keep.
3. A yagura-mon gate form (passage through a building with a room above), so gates need not be drawn as flank pairs.
4. A `spawnAt` option on the trace, so a solid keep over the outline does not swallow the spawn.
