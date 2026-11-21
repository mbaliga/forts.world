# City walls in Bardejov

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-in-bardejov-q12771426` |
| Coordinates | 49.29347, 21.27435 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.29347/21.27435)) |
| Wikidata | [Q12771426](https://www.wikidata.org/wiki/Q12771426) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bardejov |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 9, waterway 2, road 196, building 208, wall 15, zone 47, water 3).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 40, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113553085 historic=building Q112096839 45 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 208 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 196 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.29347/21.27435) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q12771426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/city-walls-in-bardejov-q12771426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
