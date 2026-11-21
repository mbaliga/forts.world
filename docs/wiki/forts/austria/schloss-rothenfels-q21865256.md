# Schloss Rothenfels

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-rothenfels-q21865256` |
| Coordinates | 47.2, 14.29417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2/14.29417)) |
| Wikidata | [Q21865256](https://www.wikidata.org/wiki/Q21865256) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Oberwölz |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `website` | https://www.rothenfels.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, road 26, building 7, zone 3, wall 3, cliff 1, waterway 2).

Evidence: documented 0, mapped 43, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/556494305 historic=castle Q15108279 39 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2/14.29417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q21865256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/schloss-rothenfels-q21865256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
