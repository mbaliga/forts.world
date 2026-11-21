# Kuressaare Castle

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuressaare-castle-q1768091` |
| Coordinates | 58.24689, 22.47929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.24689/22.47929)) |
| Wikidata | [Q1768091](https://www.wikidata.org/wiki/Q1768091) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Saaremaa Rural Municipality |
| Designations | architectural monument\|Tentative World Heritage Site |
| Wikipedia language editions | 39 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 1, road 75, waterway 1, coastline 1, building 13, wall 19, zone 6, water 1).

Evidence: documented 0, mapped 118, inferred 0, derived 1; heights documented 12, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/414356 historic=castle Q1768091 8 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":2,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.24689/22.47929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=39; wikidata:Q1768091 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/kuressaare-castle-q1768091.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
