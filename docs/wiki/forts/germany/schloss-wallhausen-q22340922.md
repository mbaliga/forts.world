# Schloss Wallhausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-wallhausen-q22340922` |
| Coordinates | 51.4592, 11.20862 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4592/11.20862)) |
| Wikidata | [Q22340922](https://www.wikidata.org/wiki/Q22340922) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Wallhausen |
| Inception | 1606 |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 2, road 49, waterway 4, building 320, zone 1, wall 35).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 1, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/285862902 historic=castle 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4592/11.20862) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q22340922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/schloss-wallhausen-q22340922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
