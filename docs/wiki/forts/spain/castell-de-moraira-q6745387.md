# Castell de Moraira

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-moraira-q6745387` |
| Coordinates | 38.6867, 0.13267 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.6867/0.13267)) |
| Wikidata | [Q6745387](https://www.wikidata.org/wiki/Q6745387) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Teulada |
| Inception | 1800 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 2, building 32, road 73, wall 2, coastline 1, water 5, zone 2).

Evidence: documented 0, mapped 118, inferred 0, derived 2; heights documented 26, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/393184944 historic=castle Q6745387 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":180,"medianInside":0,"medianOutside":3.8}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.6867/0.13267) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q6745387 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/castell-de-moraira-q6745387.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
