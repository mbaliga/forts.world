# Burg Geilenkirchen

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-geilenkirchen-q1011919` |
| Coordinates | 50.9637, 6.1234 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9637/6.1234)) |
| Wikidata | [Q1011919](https://www.wikidata.org/wiki/Q1011919) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Geilenkirchen |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |
| OSM `description` | Polygonale Burganlage im Backstein mit zweiflügelige Vorburg, Vorburg mit Torturm und Sandsteinportal; die ganze Anlage nach 1945 verändert |

## What the model contains

Tier **T1**, status `location-only`, 295 elements (marker 2, road 177, waterway 3, building 320, zone 13, water 3, wall 4).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8348685 historic=castle Q1011919 69 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (49 x 38 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 177 mapped (trace size budget); minor lanes are not drawn
- origin moved 74 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9637/6.1234) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q1011919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 295 elements); data/traces/burg-geilenkirchen-q1011919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
