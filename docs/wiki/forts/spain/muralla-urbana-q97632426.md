# Muralla urbana

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-urbana-q97632426` |
| Coordinates | 36.73708, -5.16395 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.73708/-5.16395)) |
| Wikidata | [Q97632426](https://www.wikidata.org/wiki/Q97632426) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ronda |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 18, road 348, cliff 9, zone 27, building 1223, wall 323, retaining-wall 15, waterway 3).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 2, inferred 0, unknown 294.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13645010 historic=citywalls Q97632426 0 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (338 x 529 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 1223 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 348 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 465 mapped (trace size budget); the rest are not drawn
- origin moved 218 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.73708/-5.16395) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q97632426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 355 elements); data/traces/muralla-urbana-q97632426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
