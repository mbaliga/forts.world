# Fort Stoja

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-stoja-q12631117` |
| Coordinates | 44.85611, 13.81389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.85611/13.81389)) |
| Wikidata | [Q12631117](https://www.wikidata.org/wiki/Q12631117) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pula |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, road 61, wall 7, building 72, coastline 2, water 2).

Evidence: documented 0, mapped 145, inferred 0, derived 2; heights documented 0, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/517501231 historic=castle Q12631117 50 m from ledger point
- origin moved 54 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":150,"medianInside":0,"medianOutside":8.1}
- sea-1: DEM check ok {"cells":17,"medianInside":0.2,"medianOutside":5.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.85611/13.81389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q12631117 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/fort-stoja-q12631117.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
