# Schloss Rastatt

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-rastatt-q315030` |
| Coordinates | 48.85867, 8.20476 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.85867/8.20476)) |
| Wikidata | [Q315030](https://www.wikidata.org/wiki/Q315030) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|military museum\|royal palace |
| Administrative area | Rastatt |
| Inception | 1697 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-rastatt.de/ |

## What the model contains

Tier **T1**, status `location-only`, 314 elements (marker 2, road 304, building 220, waterway 1, water 9, wall 5, zone 24, retaining-wall 3).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 55, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2828786 historic=castle Q315030 11 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (157 x 155 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 304 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.85867/8.20476) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|military museum\|royal palace; sitelinks=14; wikidata:Q315030 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/schloss-rastatt-q315030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
