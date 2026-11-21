# Ibrahim Pasha Palace

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ibrahim-pasha-palace-q1655940` |
| Coordinates | 41.0064, 28.97481 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0064/28.97481)) |
| Wikidata | [Q1655940](https://www.wikidata.org/wiki/Q1655940) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|seraglio |
| Administrative area | Istanbul |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 4, road 145, building 260, zone 12, wall 30, retaining-wall 2).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 34, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8120955 historic=castle Q1655940 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 260 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0064/28.97481) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|seraglio; sitelinks=10; wikidata:Q1655940 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/ibrahim-pasha-palace-q1655940.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
