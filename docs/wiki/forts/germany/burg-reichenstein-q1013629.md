# Burg Reichenstein

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-reichenstein-q1013629` |
| Coordinates | 49.39, 8.80056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.39/8.80056)) |
| Wikidata | [Q1013629](https://www.wikidata.org/wiki/Q1013629) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Neckargemünd |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `website` | https://geoweb.heidelberg.de/geoportal/geodaten/Wegweisersteine/WWSListe.html |

## What the model contains

Tier **T1**, status `location-only`, 393 elements (marker 9, road 581, water 3, building 1266, zone 63, wall 10, waterway 3, retaining-wall 34, cliff 1).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 15, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19354219 historic=yes 0 m from ledger point
- site is a collection relation of 727 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (8281 x 12375 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1266 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 581 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.39/8.80056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1013629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 393 elements); data/traces/burg-reichenstein-q1013629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
