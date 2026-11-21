# Svenstorp Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `svenstorp-castle-q3735023` |
| Coordinates | 55.76563, 13.25552 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.76563/13.25552)) |
| Wikidata | [Q3735023](https://www.wikidata.org/wiki/Q3735023) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Lund Municipality |
| Inception | 1596 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, water 3, road 29, building 14, waterway 5, wall 3, zone 6).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1306444 historic=castle Q3735023 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.76563/13.25552) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=8; wikidata:Q3735023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/svenstorp-castle-q3735023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
