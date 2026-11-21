# Haus Heck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haus-heck-q1590173` |
| Coordinates | 51.39106, 7.00153 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.39106/7.00153)) |
| Wikidata | [Q1590173](https://www.wikidata.org/wiki/Q1590173) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Essen |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `website` | https://www.kirche-werden.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 7, waterway 2, road 113, building 315, zone 3, water 1, wall 15, retaining-wall 2).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 26, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/137851428 historic=(none; chosen by its Wikidata id) Q1590173 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 315 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.39106/7.00153) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1590173 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 263 elements); data/traces/haus-heck-q1590173.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 264 elements; outline osm:way/137851428 historic=(none; chosen by its Wikidata id) Q1590173 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
