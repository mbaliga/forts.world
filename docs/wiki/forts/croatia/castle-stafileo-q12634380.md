# Castle Štafileo

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-stafileo-q12634380` |
| Coordinates | 43.54755, 16.33545 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.54755/16.33545)) |
| Wikidata | [Q12634380](https://www.wikidata.org/wiki/Q12634380) (CC0) |
| Wikidata class | castle |
| Types | quadrangular castle |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 187 elements (outline 1, road 39, building 140, wall 1, coastline 2, waterway 2, water 2).

Evidence: documented 0, mapped 187, inferred 0, derived 2; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42917896 historic=fort Q12634380 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":219,"medianInside":0,"medianOutside":3.4}
- sea-1: DEM check ok {"cells":400,"medianInside":0.3,"medianOutside":3.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.54755/16.33545) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; quadrangular castle; sitelinks=4; wikidata:Q12634380 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 187 elements); data/traces/castle-stafileo-q12634380.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
