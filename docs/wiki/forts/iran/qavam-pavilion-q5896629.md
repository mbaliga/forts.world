# Qavam Pavilion

> Iran · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qavam-pavilion-q5896629` |
| Coordinates | 29.6082, 52.55283 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/29.6082/52.55283)) |
| Wikidata | [Q5896629](https://www.wikidata.org/wiki/Q5896629) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|pavilion\|cultural property\|diwan-khane |
| Administrative area | Fars Province |
| Inception | 1886 |
| Designations | Iranian National Heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, zone 1, road 135, water 2, building 1047, wall 301).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 0, inferred 0, unknown 265.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1194309810 historic=castle Q5896629 8 m from ledger point
- pruned to the outline plus 150 m: 1487 -> 855 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 569 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/29.6082/52.55283) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|pavilion\|cultural property\|diwan-khane; sitelinks=2; wikidata:Q5896629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/qavam-pavilion-q5896629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/iran.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
