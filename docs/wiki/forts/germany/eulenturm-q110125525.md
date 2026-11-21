# Eulenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eulenturm-q110125525` |
| Coordinates | 51.13, 9.5424 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.13/9.5424)) |
| Wikidata | [Q110125525](https://www.wikidata.org/wiki/Q110125525) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Melsungen |
| Inception | 1387 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 44, road 144, zone 3, building 343, waterway 1, wall 3).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/364566181 historic=yes Q110125525 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 343 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.13/9.5424) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q110125525 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/eulenturm-q110125525.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
