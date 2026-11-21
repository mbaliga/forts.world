# Fort Punta Christo

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-punta-christo-q12631111` |
| Coordinates | 44.89194, 13.79778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.89194/13.79778)) |
| Wikidata | [Q12631111](https://www.wikidata.org/wiki/Q12631111) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pula |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `website` | https://www.fortpuntachristo.net/ |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, road 23, wall 8, zone 1, building 3, coastline 2, water 2).

Evidence: documented 0, mapped 40, inferred 0, derived 2; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13902307 historic=fort Q12631111 11 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":122,"medianInside":0,"medianOutside":11}
- sea-1: DEM check ok {"cells":166,"medianInside":0,"medianOutside":11.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.89194/13.79778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q12631111 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/fort-punta-christo-q12631111.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
