# Burg Merten

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-merten-q1013117` |
| Coordinates | 50.7657, 7.39527 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7657/7.39527)) |
| Wikidata | [Q1013117](https://www.wikidata.org/wiki/Q1013117) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Eitorf |
| Inception | 1247 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, marker 3, road 90, building 78, zone 3, waterway 2, water 1, wall 6).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 11, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178936399 historic=(none; chosen by its Wikidata id) Q1013117 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7657/7.39527) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1013117 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 183 elements); data/traces/burg-merten-q1013117.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 184 elements; outline osm:way/178936399 historic=(none; chosen by its Wikidata id) Q1013117 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
