# Faulx-les-Tombes Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `faulx-les-tombes-castle-q2658442` |
| Coordinates | 50.42894, 4.99965 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.42894/4.99965)) |
| Wikidata | [Q2658442](https://www.wikidata.org/wiki/Q2658442) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Gesves |
| Inception | 1871 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.chateaudefaulx.com |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, road 27, building 1, waterway 4, zone 1, wall 6).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/397741855 historic=castle Q2658442 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.42894/4.99965) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=6; wikidata:Q2658442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/faulx-les-tombes-castle-q2658442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
