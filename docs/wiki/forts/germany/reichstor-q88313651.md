# Reichstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reichstor-q88313651` |
| Coordinates | 51.1239, 12.50016 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1239/12.50016)) |
| Wikidata | [Q88313651](https://www.wikidata.org/wiki/Q88313651) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Borna |
| Inception | 1723 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 14, road 129, building 355, water 1, waterway 4, wall 1).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/140889846 historic=city_gate Q88313651 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 355 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1239/12.50016) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q88313651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 269 elements); data/traces/reichstor-q88313651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 270 elements; outline osm:way/140889846 historic=city_gate Q88313651 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
