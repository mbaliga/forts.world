# Fort Bullen

> Gambia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-bullen-q1438468` |
| Coordinates | 13.48749, -16.54843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.48749/-16.54843)) |
| Wikidata | [Q1438468](https://www.wikidata.org/wiki/Q1438468) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | North Bank Division |
| Inception | 1826 |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 761-003 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, coastline 2, road 3, building 16, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/263258266 historic=fort Q1438468 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":212,"medianInside":-3,"medianOutside":3.8}
- 50 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.48749/-16.54843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q1438468 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 23 elements); data/traces/fort-bullen-q1438468.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gambia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
