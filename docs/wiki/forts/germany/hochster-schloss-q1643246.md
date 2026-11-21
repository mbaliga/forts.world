# Höchster Schloss

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochster-schloss-q1643246` |
| Coordinates | 50.09784, 8.54688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09784/8.54688)) |
| Wikidata | [Q1643246](https://www.wikidata.org/wiki/Q1643246) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Frankfurt |
| Inception | 1586 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |

## What the model contains

Tier **T1**, status `location-only`, 315 elements (marker 14, water 1, road 171, building 326, waterway 2, wall 15, zone 13).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 17, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5664482 historic=castle Q1643246 17 m from ledger point
- site is a site relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (189 x 125 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09784/8.54688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive;stately\|château; sitelinks=3; wikidata:Q1643246 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 315 elements); data/traces/hochster-schloss-q1643246.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
