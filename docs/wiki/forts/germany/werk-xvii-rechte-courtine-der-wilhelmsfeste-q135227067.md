# Werk XVII (Rechte Courtine der Wilhelmsfeste)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `werk-xvii-rechte-courtine-der-wilhelmsfeste-q135227067` |
| Coordinates | 48.41388, 9.98441 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.41388/9.98441)) |
| Wikidata | [Q135227067](https://www.wikidata.org/wiki/Q135227067) (CC0) |
| Wikidata class | fortification |
| Types | curtain wall\|defence work |
| Administrative area | Ulm |
| Inception | 1857 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 3, road 267, wall 27, zone 25, building 242, waterway 2, water 1).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 0, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226934351 historic=castle 266 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 242 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 265 m from the ledger point to the centre of the mapped site
- 7735 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.41388/9.98441) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; curtain wall\|defence work; sitelinks=1; wikidata:Q135227067 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/werk-xvii-rechte-courtine-der-wilhelmsfeste-q135227067.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
