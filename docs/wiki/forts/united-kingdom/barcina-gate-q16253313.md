# Barcina Gate

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barcina-gate-q16253313` |
| Coordinates | 36.1457, -5.3536 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.1457/-5.3536)) |
| Wikidata | [Q16253313](https://www.wikidata.org/wiki/Q16253313) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Gibraltar |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 9, road 173, building 120, wall 19, retaining-wall 10, coastline 1, water 4, zone 1).

Evidence: documented 0, mapped 338, inferred 0, derived 2; heights documented 4, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1475143265 historic=fort 49 m from ledger point
- origin moved 52 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":0.4,"medianOutside":6.7}
- sea-1: DEM check ok {"cells":31,"medianInside":0,"medianOutside":6.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.1457/-5.3536) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q16253313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/barcina-gate-q16253313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
