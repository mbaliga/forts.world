# Hara Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hara-castle-q2498312` |
| Coordinates | 32.6333, 130.256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.6333/130.256)) |
| Wikidata | [Q2498312](https://www.wikidata.org/wiki/Q2498312) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Minamishimabara |
| Inception | 1496 |
| Designations | part of UNESCO World Heritage Site\|Historic Site of Japan |
| UNESCO WHC id | 1495-001 |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 93 elements (outline 1, marker 12, road 32, coastline 1, building 15, retaining-wall 14, cliff 2, zone 13, waterway 2, water 1).

Evidence: documented 0, mapped 93, inferred 0, derived 1; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/651521340 historic=castle 524 m from ledger point
- origin moved 525 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":126,"medianInside":2.2,"medianOutside":12.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.6333/130.256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=15; wikidata:Q2498312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 93 elements); data/traces/hara-castle-q2498312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
