# St Angelo's Fort, Kannur: fort-fidelity pass (batch alpha-T, mapped T1, no constructed layer)

Date of pass: 2026-11-15. Branch `fort-fidelity`. Trace: `src/levels/st-angelo.trace.js`
(from `data/traces/st-angelo.trace.json` plus `tools/trace/curation/st-angelo.mjs`). Level: `src/levels/st-angelo.js` (`makeT1`, id `st-angelo`), registered in `index.js` in place of the earlier generated level.
The earlier level is still exported as `stAngelo` from `src/levels/kanara-malabar.js` (same id, now unregistered); it was not moved to a `-hand` file because that file holds other levels.

**Status: `needs-plan`, tier T1.** No plan, survey drawing or dated image was found open, and neither source read gives a wall height, area or overall dimension.
So there is **no registration step, no constructed layer and no T2**. The honest output is the mapped outline and coast and the dated narrative; the two eras differ only in which mapped lines are shown.

## Documented (Wikipedia and Kerala Tourism; no primary source read)

| Fact | Value | Source | Strength |
|---|---|---|---|
| Land granted | 1498 (da Gama's visit), by the Kolathiri | Wikipedia | secondary |
| Wooden fort | permission 23 Oct 1505; foundation 24 Oct (Goncalo Gil Barbosa); completed 30 Oct 1505, first captain Lourenco Britto | Wikipedia | secondary |
| Stone fort | begun 1507 (Almeida); the 1507 siege of Cannanore failed | Wikipedia | secondary |
| Builder | Wikipedia credits Barbosa with the 1505 foundation and Almeida with the stone fort; Kerala Tourism says Almeida built it in 1505 | conflict | not resolved |
| Dutch | captured 15 February 1663; sold to Ali Raja of Arakkal in 1772 | Wikipedia | secondary |
| British | seized 1790 (Wikipedia; Kerala Tourism says from the Beevi of Arakkal); chief Malabar station until 1947 | Wikipedia | secondary |
| Bastions | Hollandia, Zeelandia, Frieslandia, all credited to the Dutch; total count not given | Wikipedia | secondary |
| Material, shape | laterite; "triangular" | Wikipedia caption; Kerala Tourism | weak |
| Other features | restored chapel, barracks, stable, watchtower, early oil-lamp lighthouse remains, stair to the wall top; a moat, ammunition dumps, underground jails, tunnels and a sea wall (Kerala Tourism only) | | none dated, none mapped |
| Excavation | thousands of cannonballs found in an ASI-led dig, 2015 | Wikipedia | secondary |

Wikipedia's own Albuquerque dates (arrested August 1509 and "six months' confinement" yet governor in October 1509) are inconsistent; they do not affect the scene and are not used.
A painting of the fort and a fishing ferry is held by the Rijksmuseum Amsterdam; it was not read. No wall height, length, area or plan is given by either source.

## Mapped (OpenStreetMap, ODbL)

The outline (way 542192379, 28 vertices, about 279 x 207 m, **2.8 ha**), two derived sea polygons from the coastline (DEM check ok: median 2.1 m and 1.4 m inside against 8.3 m and 5.2 m outside; 21 cells of bathymetry clamped to -3 m), a waterway, the Kannur Cantonment zone (way 1058870983, about 1.0 x 1.5 km), 11 unnamed building footprints and 7 paths. **No wall, bastion, gate or height is mapped.**
Terrain: Terrarium z15 at 5 m stride over a 579 m square, about 30 m SRTM-derived: the headland is about 7 m above sea level.
The mapped outline reads roughly triangular on the headland, consistent with the Kerala Tourism description; this was a visual impression from the screenshot, not a measurement.

## Inferred (flagged in the trace)

- **Era 1663.** The outline, coast and derived sea carried back about 360 years. The Dutch bastions are not mapped and are not drawn; the Portuguese stone fort's own outline in 1507-1663 is not known to match today's line.
- **Heights.** None. Everything is kerb-high.

## Not traced

The three Dutch bastions, the chapel, barracks, stable, watchtower, sea wall, moat and tunnels: no plan places them, and the OSM footprints carry no names.
**Evidence needed for T2:** an ASI plan or the 2015 excavation drawings; a dated Dutch or Portuguese plan or the Rijksmuseum painting under an open licence; a source for wall heights.

## Checks run

`node tools/smoke.mjs st-angelo`: 2 scenes, 0 failures. `node tools/check_sources.mjs`: 0 errors. Screenshots: `docs/fort-fidelity/shots/st-angelo-{1663,today}.jpg`.
