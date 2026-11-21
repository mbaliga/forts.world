# Palacete Pinto Leite

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-pinto-leite-q20986719` |
| Coordinates | 41.15149, -8.62282 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.15149/-8.62282)) |
| Wikidata | [Q20986719](https://www.wikidata.org/wiki/Q20986719) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|mansion |
| Administrative area | Lordelo do Ouro e Massarelos |
| Designations | Under study listing |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 2, road 132, building 310, zone 9, wall 153, waterway 1, water 1).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 1, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548346478 historic=castle Q20986719 8 m from ledger point
- pruned to the outline plus 150 m: 609 -> 335 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 164 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.15149/-8.62282) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|mansion; sitelinks=3; wikidata:Q20986719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/palacete-pinto-leite-q20986719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
