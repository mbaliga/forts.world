# Oberes Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oberes-tor-q67447098` |
| Coordinates | 49.56988, 9.70045 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.56988/9.70045)) |
| Wikidata | [Q67447098](https://www.wikidata.org/wiki/Q67447098) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Lauda-Königshofen |
| Inception | 1496 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 9, road 97, building 402, water 2, waterway 3, wall 1, zone 4).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/500160015 historic=building 36 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 402 mapped (trace size budget); the rest of the town is not drawn
- origin moved 36 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.56988/9.70045) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q67447098 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/oberes-tor-q67447098.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
