# Cramond Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cramond-tower-q5181857` |
| Coordinates | 55.9788, -3.29814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9788/-3.29814)) |
| Wikidata | [Q5181857](https://www.wikidata.org/wiki/Q5181857) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | City of Edinburgh |
| Designations | category B listed building |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 126 elements (outline 1, coastline 1, road 62, building 37, zone 4, wall 14, retaining-wall 4, waterway 1, water 2).

Evidence: documented 0, mapped 126, inferred 0, derived 2; heights documented 25, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/130113202 historic=castle Q5181857 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":12,"medianInside":1,"medianOutside":17.5}
- sea-1: DEM check ok {"cells":12,"medianInside":2.9,"medianOutside":17.5}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9788/-3.29814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=4; wikidata:Q5181857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 126 elements); data/traces/cramond-tower-q5181857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
