# Castello Lanza-Branciforti

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-lanza-branciforti-q113556266` |
| Coordinates | 37.99736, 13.65368 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.99736/13.65368)) |
| Wikidata | [Q113556266](https://www.wikidata.org/wiki/Q113556266) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trabia |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, road 90, coastline 2, building 77, retaining-wall 12, cliff 1, wall 1, water 1).

Evidence: documented 0, mapped 185, inferred 0, derived 1; heights documented 2, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19272631 historic=castle 1 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":154,"medianInside":0,"medianOutside":19.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.99736/13.65368) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113556266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/castello-lanza-branciforti-q113556266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
