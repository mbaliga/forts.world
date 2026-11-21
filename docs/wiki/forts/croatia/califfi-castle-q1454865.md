# Califfi Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `califfi-castle-q1454865` |
| Coordinates | 44.14222, 15.07389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.14222/15.07389)) |
| Wikidata | [Q1454865](https://www.wikidata.org/wiki/Q1454865) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, road 19, building 59, coastline 1, zone 3, wall 7, water 2).

Evidence: documented 0, mapped 92, inferred 0, derived 2; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1017309981 historic=ruins 295 m from ledger point
- origin moved 296 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":2.7}
- sea-1: DEM check ok {"cells":129,"medianInside":0,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.14222/15.07389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q1454865 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/califfi-castle-q1454865.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
