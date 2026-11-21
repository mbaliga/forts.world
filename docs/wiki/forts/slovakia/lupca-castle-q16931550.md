# Ľupča Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lupca-castle-q16931550` |
| Coordinates | 48.77, 19.28 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.77/19.28)) |
| Wikidata | [Q16931550](https://www.wikidata.org/wiki/Q16931550) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Slovenská Ľupča |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `website` | https://www.hradlupca.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 150 elements (outline 1, marker 4, road 49, building 79, zone 7, wall 3, waterway 4, water 3).

Evidence: documented 0, mapped 150, inferred 0, derived 0; heights documented 0, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62177836 historic=castle Q13371261 278 m from ledger point
- origin moved 278 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.77/19.28) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q16931550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 150 elements); data/traces/lupca-castle-q16931550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
