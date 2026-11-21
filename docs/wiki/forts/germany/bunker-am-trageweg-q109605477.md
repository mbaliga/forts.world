# Bunker am Trageweg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-am-trageweg-q109605477` |
| Coordinates | 52.39608, 9.75563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.39608/9.75563)) |
| Wikidata | [Q109605477](https://www.wikidata.org/wiki/Q109605477) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|high-rise bunker\|residential building |
| Administrative area | Hanover |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 3, road 218, building 249, zone 4, wall 9).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 40, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261372037 historic=(none; chosen by its Wikidata id) Q109605477 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 218 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.39608/9.75563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|high-rise bunker\|residential building; sitelinks=2; wikidata:Q109605477 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 283 elements); data/traces/bunker-am-trageweg-q109605477.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 287 elements; outline osm:way/261372037 historic=(none; chosen by its Wikidata id) Q109605477 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
