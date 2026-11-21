# Burg Irnich

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-irnich-q1012566` |
| Coordinates | 50.6439, 6.63671 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6439/6.63671)) |
| Wikidata | [Q1012566](https://www.wikidata.org/wiki/Q1012566) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Zülpich |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | farm |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 1, road 83, building 665, zone 31, wall 105, waterway 5, water 1, retaining-wall 8).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 120, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/965919518 historic=ruins 515 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 665 mapped (trace size budget); the rest of the town is not drawn
- origin moved 517 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6439/6.63671) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1012566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/burg-irnich-q1012566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
