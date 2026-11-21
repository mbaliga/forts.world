# Castello di Illasi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-illasi-q22341857` |
| Coordinates | 45.46942, 11.1941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.46942/11.1941)) |
| Wikidata | [Q22341857](https://www.wikidata.org/wiki/Q22341857) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Illasi |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, road 2, building 7, zone 3).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/442107626 historic=(none; chosen by its Wikidata id) Q22341857 38 m from ledger point
- origin moved 35 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.46942/11.1941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q22341857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 13 elements); data/traces/castello-di-illasi-q22341857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 14 elements; outline osm:way/442107626 historic=(none; chosen by its Wikidata id) Q22341857 38 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
