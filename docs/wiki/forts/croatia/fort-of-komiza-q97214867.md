# Fort of Komiža

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-komiza-q97214867` |
| Coordinates | 43.04396, 16.0886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.04396/16.0886)) |
| Wikidata | [Q97214867](https://www.wikidata.org/wiki/Q97214867) (CC0) |
| Wikidata class | castle |
| Types | quadrangular castle |
| Administrative area | Komiža |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, road 40, building 245, zone 1, wall 3, coastline 2, water 3).

Evidence: documented 0, mapped 295, inferred 0, derived 3; heights documented 25, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124847582 historic=castle Q97214867 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":400,"medianInside":0,"medianOutside":8.9}
- sea-1: DEM check ok {"cells":103,"medianInside":0,"medianOutside":3.6}
- sea-2: DEM check ok {"cells":120,"medianInside":0,"medianOutside":4.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.04396/16.0886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; quadrangular castle; sitelinks=2; wikidata:Q97214867 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/fort-of-komiza-q97214867.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
