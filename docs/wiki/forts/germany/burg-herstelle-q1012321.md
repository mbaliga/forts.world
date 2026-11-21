# Burg Herstelle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-herstelle-q1012321` |
| Coordinates | 51.6405, 9.41683 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.6405/9.41683)) |
| Wikidata | [Q1012321](https://www.wikidata.org/wiki/Q1012321) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Beverungen |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `website` | https://burg-herstelle.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 6, water 1, road 83, zone 8, building 297, wall 1, waterway 1).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255852601 historic=(none; chosen by its Wikidata id) Q1012321 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 297 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.6405/9.41683) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1012321 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 220 elements); data/traces/burg-herstelle-q1012321.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 221 elements; outline osm:way/255852601 historic=(none; chosen by its Wikidata id) Q1012321 14 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
