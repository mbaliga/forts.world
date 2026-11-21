# Vestborgen

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestborgen-q31193499` |
| Coordinates | 55.6813, 11.0782 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6813/11.0782)) |
| Wikidata | [Q31193499](https://www.wikidata.org/wiki/Q31193499) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Kalundborg Municipality |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, road 87, building 165, coastline 1, wall 12, cliff 2, water 1).

Evidence: documented 0, mapped 269, inferred 0, derived 1; heights documented 8, inferred 0, unknown 169.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/538769750 historic=castle Q31193499 12 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":42,"medianInside":3.1,"medianOutside":5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6813/11.0782) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q31193499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/vestborgen-q31193499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
