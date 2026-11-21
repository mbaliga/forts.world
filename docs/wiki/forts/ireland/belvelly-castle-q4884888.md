# Belvelly Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belvelly-castle-q4884888` |
| Coordinates | 51.8881, -8.3024 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8881/-8.3024)) |
| Wikidata | [Q4884888](https://www.wikidata.org/wiki/Q4884888) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Cork |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 160 elements (outline 1, road 43, coastline 3, building 62, zone 5, waterway 1, wall 43, water 2).

Evidence: documented 0, mapped 160, inferred 0, derived 2; heights documented 0, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/358676740 historic=castle Q4884888 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":374,"medianInside":4.6,"medianOutside":5.6}
- sea-1: DEM check ok {"cells":190,"medianInside":1.5,"medianOutside":7}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8881/-8.3024) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=4; wikidata:Q4884888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 160 elements); data/traces/belvelly-castle-q4884888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
