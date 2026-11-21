# Enceintes médiévales de Colmar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceintes-medievales-de-colmar-q3053757` |
| Coordinates | 48.0747, 7.3609 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.0747/7.3609)) |
| Wikidata | [Q3053757](https://www.wikidata.org/wiki/Q3053757) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Colmar |
| Inception | 1220 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 8, road 224, waterway 16, building 393, water 14, zone 13, wall 16).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 50, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47574025 historic=building Q3199479 187 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 393 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 224 mapped (trace size budget); minor lanes are not drawn
- origin moved 186 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.0747/7.3609) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=2; wikidata:Q3053757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/enceintes-medievales-de-colmar-q3053757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
