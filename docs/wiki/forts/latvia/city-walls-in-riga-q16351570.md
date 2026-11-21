# City walls in Riga

> Latvia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-in-riga-q16351570` |
| Coordinates | 56.95136, 24.1075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.95136/24.1075)) |
| Wikidata | [Q16351570](https://www.wikidata.org/wiki/Q16351570) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Riga |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 4, road 289, building 107, wall 13, waterway 1, water 2, zone 33, retaining-wall 16).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 66, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1393926 historic=castle Q322183 423 m from ledger point
- roads capped: kept the 150 longest of 289 mapped (trace size budget); minor lanes are not drawn
- origin moved 423 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.95136/24.1075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=6; wikidata:Q16351570 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/city-walls-in-riga-q16351570.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/latvia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
