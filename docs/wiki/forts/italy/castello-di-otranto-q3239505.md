# Castello di Otranto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-otranto-q3239505` |
| Coordinates | 40.14446, 18.49271 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.14446/18.49271)) |
| Wikidata | [Q3239505](https://www.wikidata.org/wiki/Q3239505) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Otranto |
| Designations | Italian national heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 4, road 142, coastline 1, zone 21, building 133, wall 8, waterway 1, water 3).

Evidence: documented 0, mapped 314, inferred 0, derived 1; heights documented 1, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4850925 historic=castle Q3239505 34 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":41,"medianInside":0,"medianOutside":15}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.14446/18.49271) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q3239505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/castello-di-otranto-q3239505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
