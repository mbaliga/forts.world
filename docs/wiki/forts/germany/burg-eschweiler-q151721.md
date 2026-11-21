# Burg Eschweiler

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-eschweiler-q151721` |
| Coordinates | 50.818, 6.2646 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.818/6.2646)) |
| Wikidata | [Q151721](https://www.wikidata.org/wiki/Q151721) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Eschweiler |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `location-only`, 294 elements (marker 13, road 183, building 397, waterway 1, zone 9, wall 1).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7824871 historic=ruins 116 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (89 x 105 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 397 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 100 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.818/6.2646) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q151721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 294 elements); data/traces/burg-eschweiler-q151721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
