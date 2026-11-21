# Vorderes Schlössle Oberensingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vorderes-schlossle-oberensingen-q135668341` |
| Coordinates | 48.63701, 9.32608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.63701/9.32608)) |
| Wikidata | [Q135668341](https://www.wikidata.org/wiki/Q135668341) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|Schloss |
| Administrative area | Nürtingen |
| Inception | 1598 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 6, road 141, waterway 2, building 259, wall 12, zone 19, water 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 3, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/329028381 historic=castle Q135668341 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.63701/9.32608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|Schloss; sitelinks=1; wikidata:Q135668341 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/vorderes-schlossle-oberensingen-q135668341.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
