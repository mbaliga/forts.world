# Citadel of Cluj-Napoca

> Romania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-cluj-napoca-q998942` |
| Coordinates | 46.77538, 23.58343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.77538/23.58343)) |
| Wikidata | [Q998942](https://www.wikidata.org/wiki/Q998942) (CC0) |
| Wikidata class | fort |
| Types | urban park\|citadel |
| Administrative area | Cluj County |
| Designations | Historic Monument |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 315 elements (marker 6, road 479, zone 29, building 646, waterway 8, water 1, wall 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20281676 historic=citywalls 1061 m from ledger point
- site is a site relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (936 x 442 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 646 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 479 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.77538/23.58343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; urban park\|citadel; sitelinks=3; wikidata:Q998942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 2 elements); data/traces/citadel-of-cluj-napoca-q998942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
