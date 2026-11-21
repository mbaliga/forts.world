# Fužine Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuzine-castle-q9154149` |
| Coordinates | 46.05058, 14.56375 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.05058/14.56375)) |
| Wikidata | [Q9154149](https://www.wikidata.org/wiki/Q9154149) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ljubljana City Municipality |
| Designations | monument of local significance |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 1, waterway 50, road 226, building 68, retaining-wall 35, zone 36, water 3, wall 3).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 2, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/188535 historic=castle Q9154149 34 m from ledger point
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.05058/14.56375) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q9154149 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/fuzine-castle-q9154149.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
