# Harbour Gate in Szczecin

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harbour-gate-in-szczecin-q4373316` |
| Coordinates | 53.42497, 14.55041 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.42497/14.55041)) |
| Wikidata | [Q4373316](https://www.wikidata.org/wiki/Q4373316) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Szczecin |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, marker 11, road 342, waterway 1, building 190, zone 59, wall 17, retaining-wall 1).

Evidence: documented 0, mapped 360, inferred 0, derived 0; heights documented 126, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53223199 historic=castle Q11814893 217 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 190 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 342 mapped (trace size budget); minor lanes are not drawn
- origin moved 217 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.42497/14.55041) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=9; wikidata:Q4373316 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/harbour-gate-in-szczecin-q4373316.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
