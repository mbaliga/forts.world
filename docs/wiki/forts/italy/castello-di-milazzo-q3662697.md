# Castello di Milazzo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-milazzo-q3662697` |
| Coordinates | 38.23114, 15.24233 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.23114/15.24233)) |
| Wikidata | [Q3662697](https://www.wikidata.org/wiki/Q3662697) (CC0) |
| Wikidata class | castle |
| Types | castle\|Category:Hohenstaufen castles in Southern Italy\|museum building |
| Administrative area | Milazzo |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 1, road 91, building 384, zone 12, coastline 3, wall 22, cliff 2, retaining-wall 4, water 1).

Evidence: documented 0, mapped 257, inferred 0, derived 1; heights documented 46, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1987049 historic=castle Q3662697 47 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- origin moved 53 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":0.1,"medianOutside":41}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.23114/15.24233) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Category:Hohenstaufen castles in Southern Italy\|museum building; sitelinks=4; wikidata:Q3662697 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/castello-di-milazzo-q3662697.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
