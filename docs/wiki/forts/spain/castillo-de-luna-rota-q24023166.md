# Castillo de Luna (Rota)

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-luna-rota-q24023166` |
| Coordinates | 36.61692, -6.35824 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.61692/-6.35824)) |
| Wikidata | [Q24023166](https://www.wikidata.org/wiki/Q24023166) (CC0) |
| Wikidata class | castle |
| Types | castle\|casa consistorial |
| Administrative area | Rota |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 1, road 166, building 213, coastline 1, wall 1, water 3).

Evidence: documented 0, mapped 386, inferred 0, derived 3; heights documented 14, inferred 0, unknown 200.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2066464 historic=castle Q24023166 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":48,"medianInside":0,"medianOutside":10.6}
- sea-1: DEM check ok {"cells":20,"medianInside":0,"medianOutside":9.9}
- sea-2: DEM check ok {"cells":2,"medianInside":0,"medianOutside":9.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.61692/-6.35824) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|casa consistorial; sitelinks=5; wikidata:Q24023166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/castillo-de-luna-rota-q24023166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
