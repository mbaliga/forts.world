# Castra Aquileia

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-aquileia-q128401126` |
| Coordinates | 48.67908, 10.15367 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.67908/10.15367)) |
| Wikidata | [Q128401126](https://www.wikidata.org/wiki/Q128401126) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Heidenheim an der Brenz |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 319 elements (marker 8, road 183, building 251, zone 21, cliff 1, wall 13, retaining-wall 5, waterway 1).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 4, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6192733 historic=castle Q1664872 496 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (146 x 81 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 501 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.67908/10.15367) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=1; wikidata:Q128401126 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 319 elements); data/traces/castra-aquileia-q128401126.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
