# Reichsbahnbunker Friedrichstraße

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reichsbahnbunker-friedrichstra-e-q540470` |
| Coordinates | 52.5235, 13.384 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5235/13.384)) |
| Wikidata | [Q540470](https://www.wikidata.org/wiki/Q540470) (CC0) |
| Wikidata class | fortification |
| Types | M500 type bunker |
| Administrative area | Bezirk Mitte |
| Inception | 1943 |
| Designations | architectural heritage monument |
| Wikipedia language editions | 8 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 11, road 455, building 79, waterway 3, wall 4, zone 15).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 62, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43173495 historic=building Q314446 358 m from ledger point
- roads capped: kept the 150 longest of 455 mapped (trace size budget); minor lanes are not drawn
- origin moved 358 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5235/13.384) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; M500 type bunker; sitelinks=8; wikidata:Q540470 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/reichsbahnbunker-friedrichstra-e-q540470.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
