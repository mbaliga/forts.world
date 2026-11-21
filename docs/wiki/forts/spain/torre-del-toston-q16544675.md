# Torre del Tostón

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-toston-q16544675` |
| Coordinates | 28.68, -14.01056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.68/-14.01056)) |
| Wikidata | [Q16544675](https://www.wikidata.org/wiki/Q16544675) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | La Oliva |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 78 elements (outline 1, road 36, coastline 2, building 29, wall 6, cliff 1, zone 1, water 2).

Evidence: documented 0, mapped 78, inferred 0, derived 2; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63600291 historic=castle Q16544675 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":392,"medianInside":8.2,"medianOutside":19.7}
- sea-1: DEM check ok {"cells":172,"medianInside":0,"medianOutside":17}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.68/-14.01056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=6; wikidata:Q16544675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 78 elements); data/traces/torre-del-toston-q16544675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
