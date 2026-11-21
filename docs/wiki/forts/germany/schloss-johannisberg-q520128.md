# Schloss Johannisberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-johannisberg-q520128` |
| Coordinates | 49.99961, 7.98387 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.99961/7.98387)) |
| Wikidata | [Q520128](https://www.wikidata.org/wiki/Q520128) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Geisenheim |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-johannisberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 84 elements (outline 1, marker 3, road 39, zone 16, building 10, wall 3, waterway 10, retaining-wall 2).

Evidence: documented 0, mapped 84, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111571393 historic=castle Q520128 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.99961/7.98387) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=8; wikidata:Q520128 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 84 elements); data/traces/schloss-johannisberg-q520128.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
