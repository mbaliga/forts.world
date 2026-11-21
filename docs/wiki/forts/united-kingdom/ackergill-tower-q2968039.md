# Ackergill Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ackergill-tower-q2968039` |
| Coordinates | 58.4754, -3.11131 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.4754/-3.11131)) |
| Wikidata | [Q2968039](https://www.wikidata.org/wiki/Q2968039) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Highland |
| Designations | category A listed building |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, coastline 2, road 17, building 6, zone 8, wall 17, water 1).

Evidence: documented 0, mapped 52, inferred 0, derived 1; heights documented 3, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/293334418 historic=castle Q2968039 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":570,"medianInside":3.3,"medianOutside":9}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.4754/-3.11131) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=10; wikidata:Q2968039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 52 elements); data/traces/ackergill-tower-q2968039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
