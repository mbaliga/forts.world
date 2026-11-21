# Terenas palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terenas-palace-q10344084` |
| Coordinates | 41.14898, -8.62517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14898/-8.62517)) |
| Wikidata | [Q10344084](https://www.wikidata.org/wiki/Q10344084) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|manor house |
| Administrative area | Lordelo do Ouro e Massarelos |
| Designations | Included in protected site |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 2, road 246, building 225, zone 88, wall 94, water 3, waterway 2, retaining-wall 3).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 3, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/565134855 historic=castle Q10344084 7 m from ledger point
- pruned to the outline plus 150 m: 664 -> 384 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 127 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 133 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14898/-8.62517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|manor house; sitelinks=2; wikidata:Q10344084 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/terenas-palace-q10344084.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
