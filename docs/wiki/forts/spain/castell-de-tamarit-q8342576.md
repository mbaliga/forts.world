# Castell de Tamarit

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-tamarit-q8342576` |
| Coordinates | 41.1301, 1.36121 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.1301/1.36121)) |
| Wikidata | [Q8342576](https://www.wikidata.org/wiki/Q8342576) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tarragona |
| Inception | 1200 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 94 elements (outline 1, marker 1, road 60, coastline 6, building 15, wall 3, zone 1, cliff 1, waterway 5, water 1).

Evidence: documented 0, mapped 94, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231854421 historic=castle Q8342576 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":164,"medianInside":0,"medianOutside":7.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.1301/1.36121) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q8342576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 94 elements); data/traces/castell-de-tamarit-q8342576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
