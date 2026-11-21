# Semlower Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `semlower-tor-q16294622` |
| Coordinates | 54.31554, 13.09488 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.31554/13.09488)) |
| Wikidata | [Q16294622](https://www.wikidata.org/wiki/Q16294622) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Stralsund |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 169 elements (outline 1, marker 1, road 58, waterway 6, coastline 7, building 90, wall 3, water 3).

Evidence: documented 0, mapped 169, inferred 0, derived 3; heights documented 27, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30174386 historic=yes Q1871104 244 m from ledger point
- origin moved 244 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":1}
- sea-1: DEM check failed {"cells":363,"medianInside":1,"medianOutside":0.6}
- sea-2: DEM check ok {"cells":346,"medianInside":0.9,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.31554/13.09488) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q16294622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 169 elements); data/traces/semlower-tor-q16294622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
