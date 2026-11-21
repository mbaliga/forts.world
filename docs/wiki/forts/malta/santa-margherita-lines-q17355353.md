# Santa Margherita Lines

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `santa-margherita-lines-q17355353` |
| Coordinates | 35.879, 14.52328 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.879/14.52328)) |
| Wikidata | [Q17355353](https://www.wikidata.org/wiki/Q17355353) (CC0) |
| Wikidata class | fortification |
| Types | defense line |
| Administrative area | Cospicua |
| Inception | 1638 |
| Designations | Grade 1 |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 3, road 219, wall 214, building 599, retaining-wall 2, water 1, coastline 1, zone 7).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 60, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548755011 historic=fort 222 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 1047 -> 719 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 400 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 146 mapped (trace size budget); minor lanes are not drawn
- origin moved 223 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.879/14.52328) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defense line; sitelinks=7; wikidata:Q17355353 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/santa-margherita-lines-q17355353.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
