# City Wall of Vilnius

> Lithuania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-of-vilnius-q3545166` |
| Coordinates | 54.6743, 25.2896 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.6743/25.2896)) |
| Wikidata | [Q3545166](https://www.wikidata.org/wiki/Q3545166) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Vilnius |
| Inception | 1503 |
| Wikipedia language editions | 11 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 396 elements (marker 19, road 815, building 555, waterway 2, zone 21, wall 82, cliff 2).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 13, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20288139 historic=citywalls 271 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (971 x 717 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 555 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 815 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.6743/25.2896) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=11; wikidata:Q3545166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/city-wall-of-vilnius-q3545166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
