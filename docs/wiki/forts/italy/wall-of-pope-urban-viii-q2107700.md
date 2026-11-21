# Wall of Pope Urban VIII

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wall-of-pope-urban-viii-q2107700` |
| Coordinates | 41.88552, 12.46206 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.88552/12.46206)) |
| Wikidata | [Q2107700](https://www.wikidata.org/wiki/Q2107700) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls |
| Administrative area | Rome |
| Wikipedia language editions | 10 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 373 elements (marker 7, road 616, building 470, zone 33, water 7, wall 33, retaining-wall 21, waterway 2).

Evidence: documented 0, mapped 373, inferred 0, derived 0; heights documented 0, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20347404 historic=citywalls Q3867314 2751 m from ledger point
- site is a site relation of 146 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (5127 x 4429 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 470 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 616 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.88552/12.46206) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls; sitelinks=10; wikidata:Q2107700 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/wall-of-pope-urban-viii-q2107700.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
