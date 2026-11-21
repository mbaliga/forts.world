# Palacete Gramaxo de Oliveira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-gramaxo-de-oliveira-q136377955` |
| Coordinates | 41.18288, -8.69075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.18288/-8.69075)) |
| Wikidata | [Q136377955](https://www.wikidata.org/wiki/Q136377955) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|house\|cultural heritage |
| Administrative area | Matosinhos e Leça da Palmeira |
| Designations | heritage without legal protection |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, road 261, building 1034, waterway 1, zone 3, wall 482).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 58, inferred 0, unknown 259.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1141445668 historic=castle Q136377955 2 m from ledger point
- pruned to the outline plus 150 m: 1782 -> 955 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 573 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 124 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.18288/-8.69075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|house\|cultural heritage; sitelinks=0; wikidata:Q136377955 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/palacete-gramaxo-de-oliveira-q136377955.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
