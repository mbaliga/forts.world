# First city walls of Leuven

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `first-city-walls-of-leuven-q17637054` |
| Coordinates | 50.88333, 4.7 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.88333/4.7)) |
| Wikidata | [Q17637054](https://www.wikidata.org/wiki/Q17637054) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Leuven |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 6, road 728, water 15, wall 262, building 1519, waterway 36, retaining-wall 13, zone 48).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 5, inferred 0, unknown 260.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20823983 historic=citywalls Q59954398 595 m from ledger point
- site is a site relation of 23 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (829 x 862 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 1519 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 728 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 450 mapped (trace size budget); the rest are not drawn
- origin moved 467 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.88333/4.7) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q17637054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/first-city-walls-of-leuven-q17637054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
