# Château de la Croë

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-croe-q2971213` |
| Coordinates | 43.5462, 7.13414 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5462/7.13414)) |
| Wikidata | [Q2971213](https://www.wikidata.org/wiki/Q2971213) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Antibes |
| Inception | 1927 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 87 elements (outline 1, road 48, coastline 2, building 24, wall 5, zone 4, water 3).

Evidence: documented 0, mapped 87, inferred 0, derived 2; heights documented 5, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68070403 historic=castle Q2971213 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":25,"medianInside":0.1,"medianOutside":19.1}
- sea-1: DEM check ok {"cells":3,"medianInside":0.4,"medianOutside":18.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5462/7.13414) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=6; wikidata:Q2971213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 87 elements); data/traces/chateau-de-la-croe-q2971213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
