# Allahabad Fort

> India · Uttar Pradesh · evidence: **T1 + constructed (schematic)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `allahabad-fort` |
| Coordinates | 25.43, 81.876 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.43/81.876)) |
| Wikidata | [Q771105](https://www.wikidata.org/wiki/Q771105) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Prayagraj |
| Designations | Monument of National Importance |
| Wikipedia language editions | 14 |
| Programme catalogue | confidence high, significance rank 210; sources catalogue:allahabad-fort;wikidata:Q138750792;wikidata:Q771105;smith-newton:r155 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 145 elements (outline 1, road 42, water 1, building 396, zone 1).

Evidence: documented 0, mapped 145, inferred 0, derived 0; heights documented 0, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/903260229 historic=monument Q771105 245 m from ledger point
- present-day buildings capped: kept the 100 nearest the outline centre of 396 mapped (trace size budget); the rest of the town is not drawn
- origin moved 236 m from the ledger point to the outline centroid
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.43/81.876) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/allahabad-fort-pass.md](../../../research/allahabad-fort-pass.md)

## Ledger note

src/levels/allahabad-fort.trace.js (curation tools/trace/curation/allahabad-fort.mjs), level src/levels/allahabad-fort-t1.js, registered in alpha-x0.js. Outline is OSM way 903260229 (tagged historic=monument, Q771105, about 782 x 791 m); no wall line is mapped. Missing for T2: A plan with the wall circuit, gates, Ashoka pillar, Patalpuri temple and the river frontage; wall heights. Research: docs/research/allahabad-fort-pass.md. Batch-0 run 2026-11-15; written history not researched. Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 2/10), distinct from batch 0, alpha-K, alpha-L, alpha-X and the H set. \| 2026-11-19: constructed layer added (tinted): rampart on the OSM outline (21 m assumed by analogy with Agra), angular landward bastions, two gate openings with tower pairs at mapped road ends, Ashoka pillar (OSM way 1169644585, 10.6 m); eras Akbar 1583 and today. Smoke 4 scenes 0 failures. STILL MISSING: any plan (wall line, true gate count and positions, Patalpuri, Saraswati Koop, Akshayavat, palaces, river frontage); the outline is a site boundary, not a surveyed wall.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
