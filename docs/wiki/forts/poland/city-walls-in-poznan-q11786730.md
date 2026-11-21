# City walls in Poznań

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-in-poznan-q11786730` |
| Coordinates | 52.41048, 16.93333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.41048/16.93333)) |
| Wikidata | [Q11786730](https://www.wikidata.org/wiki/Q11786730) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|city walls |
| Administrative area | Poznań |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 53, road 380, water 6, building 268, wall 54, zone 41, retaining-wall 28).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 57, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129410803 historic=castle Q11814807 160 m from ledger point
- pruned to the outline plus 150 m: 831 -> 476 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 174 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 196 mapped (trace size budget); minor lanes are not drawn
- origin moved 160 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.41048/16.93333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|city walls; sitelinks=3; wikidata:Q11786730 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/city-walls-in-poznan-q11786730.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
