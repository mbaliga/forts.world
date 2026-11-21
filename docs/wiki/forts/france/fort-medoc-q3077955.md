# Fort Médoc

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-medoc-q3077955` |
| Coordinates | 45.11139, -0.70222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.11139/-0.70222)) |
| Wikidata | [Q3077955](https://www.wikidata.org/wiki/Q3077955) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Cussac-Fort-Médoc |
| Inception | 1686 |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, road 19, zone 6, wall 4, building 9, water 3, waterway 1, coastline 1).

Evidence: documented 0, mapped 44, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43583426 historic=castle Q3077955 32 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":370,"medianInside":0,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.11139/-0.70222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=6; wikidata:Q3077955 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/fort-medoc-q3077955.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
