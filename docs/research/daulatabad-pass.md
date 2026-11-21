# Daulatabad (Devagiri): fort-fidelity pass (batch 2, mapped T1, hill only)

Date of pass: 2026-11-11. Branch `fort-fidelity`. Trace: `src/levels/daulatabad.trace.js`
(from `data/traces/daulatabad.trace.json` plus `tools/trace/curation/daulatabad.mjs`). Level: `src/levels/daulatabad.js` (`makeT1` over the trace, id `daulatabad`).
The older hand level is kept as `src/levels/daulatabad-hand.js` (id `daulatabad-hand`, not registered).

**Status: `needs-plan`, tier T1.** No plan, survey drawing or dated image was found (Commons search: gazetteer and atlas pages only), and no source read gives a wall or tower height.
There is therefore **no registration step, no constructed layer and no T2**. The honest output is the mapped geometry and the dated narrative; the three eras differ only in which mapped lines are shown.

## Documented (Wikipedia only; no primary source read)

| Fact | Value | Source | Strength |
|---|---|---|---|
| Foundation | about 1187, by Bhillama V (Yadava) | Wikipedia | secondary |
| Raid | 1296, Alauddin Khalji | Wikipedia | secondary |
| Annexation | 1307 or 1308 (sources conflict) | Wikipedia | secondary |
| Capital move | 1327 or 1328 (sources conflict), Muhammad bin Tughluq; capital returned to Delhi 1334 | Wikipedia | secondary |
| Later rulers | Ahmadnagar Sultanate from 1499; Mughal capture 1632 or 1633 (sources conflict); Marathas 1760 | Wikipedia | secondary |
| Rock | about 200 m high, lower slopes scarped to about 50 m of vertical rock | Wikipedia | secondary |
| Outer wall | Ambarkot, about 2 km north-south; Kataka a double rampart with bastions and moats | Wikipedia | secondary |
| Chand Minar | 1347-58 (Hasan Gangu Bahmani) or 1446; no height given | Wikipedia | conflicting |

## Mapped (OpenStreetMap, ODbL)

The hill outline (way 1246827867, about 180 m across), two scarp (cliff) lines, 15 wall lines running out to x of about 900-1240 m, three `historic=city_gate` nodes (all on a mapped wall, promoted to `gate-N`, mapped, confidence 0.6, with a plain 3 m opening),
three cannon markers (Mendha Top, Kala Pahad, Durga canon) and a memorial, the Bharat Mata temple zone, Hathi Haud (the large tank), the Hemadpanti and Jain temples, the Saraswati well zone, 14 buildings and 62 roads.
Terrain: Terrarium z15 over a 1.9 km square (every 8 m, about 30 m SRTM-derived), 585-760 m. The ~200 m rock and its ~50 m scarp are smoothed.

Mapped wall lines are clipped to the 1.9 km terrain grid (a few run to 1.2 km from the hill), and a building that straddled the grid edge was dropped; unclipped lines hung in the air beyond the terrain in the first screenshots.
Hathi Haud (OSM maps no surface height) has a **derived** level, the lowest DEM value on its outline; without one the pipeline digs it to sea level, a shaft over 600 m deep here. Not read from any source.

**What the outline is.** OSM's "outline" is the citadel hill only (about 180 m across). The ring walls are separate lines and are not identified as Ambarkot, Kataka or anything else; they are named only "Wall line · mapped (OSM), ring not identified". Long outer lines run beyond the 950 m terrain window; only walls whose nearest vertex lies inside the window get a marker.

## Inferred (flagged `inferred` in the trace)

- **Era 1327.** The hill and its scarp lines only, carried back unchanged from today (about 700 years). The wall lines are not shown because their dates are not established.
- **Era 1633.** The hill, scarps, mapped wall lines and gates, carried back about 390 years. Which rings existed at the Mughal capture is not established.
- **Heights.** None. Everything is kerb-high.

## Not traced

The Chand Minar, Chini Mahal, the moat and its bridge, the dark passage and the zig-zag gates, the Bharat Mata temple's earlier form, the Ambarkot and Kataka lines as such, the rock-cut scarp itself, the Ahmadnagar-period works, and the city that the Tughluq capital moved there.

## Conflicts and uncertainties

- **Dates.** Wikipedia gives two dates each for the annexation (1307/1308), the capital move (1327/1328) and the Mughal capture (1632/1633). The era years used are the first of each pair; none is verified.
- **Chand Minar** is attributed to two dates (1347-58, 1446); it is not drawn.
- **Terrain.** The 30 m DEM smooths the rock; the scarp is a mapped line, not a surface.

## Missing evidence for T2 and beyond

1. A survey-grade plan of the citadel and the Ambarkot / Kataka rings (ASI), and a description that identifies which mapped wall is which.
2. A source for wall, tower and gate heights; the Chand Minar's height.
3. A finer DEM (LiDAR) for the rock and its scarp.
4. A dated plan or view for 1327 and 1633.

## Verification (2026-11-11)

- `check_sources`: 0 errors (105 elements; 207 KB trace.js, within the 250 KB and 400-element budgets).
- `node tools/smoke.mjs daulatabad`: 3 eras, 0 failures, no unreachable places. Two fixes on the way: outer wall lines beyond the grid were given no marker (the marker was unreachable), and unnamed lines stay unmarked in the carried-back era.
- Screenshots: `docs/fort-fidelity/shots/daulatabad-{1327,1633,today}.jpg`. There is no constructed layer, so no `-constructed` images.
- Not verified: no independent survey; the mapped lines were not compared with a plan or photograph.
