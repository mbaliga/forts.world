# Castello Maniace

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-maniace-q587949` |
| Coordinates | 37.05342, 15.29538 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.05342/15.29538)) |
| Wikidata | [Q587949](https://www.wikidata.org/wiki/Q587949) (CC0) |
| Wikidata class | castle |
| Types | castle\|Category:Hohenstaufen castles in Southern Italy\|historical park museum\|military museum building\|museum of a public entity |
| Administrative area | Syracuse |
| Inception | 1038 |
| Designations | Italian national heritage |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, marker 1, building 11, road 12, retaining-wall 5, wall 6, coastline 1, zone 1, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 1; heights documented 2, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4113996 historic=castle Q587949 5 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":329,"medianInside":0,"medianOutside":0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.05342/15.29538) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Category:Hohenstaufen castles in Southern Italy\|historical park museum\|military museum building\|museum of a public entity; sitelinks=17; wikidata:Q587949 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/castello-maniace-q587949.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
