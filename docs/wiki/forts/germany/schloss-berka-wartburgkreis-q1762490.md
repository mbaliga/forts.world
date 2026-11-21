# Schloss Berka (Wartburgkreis)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-berka-wartburgkreis-q1762490` |
| Coordinates | 51.0432, 10.38415 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0432/10.38415)) |
| Wikidata | [Q1762490](https://www.wikidata.org/wiki/Q1762490) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Berka vor dem Hainich |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, road 42, water 1, waterway 18, building 323, zone 14, wall 8).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204364803 historic=castle Q1762490 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0432/10.38415) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q1762490 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/schloss-berka-wartburgkreis-q1762490.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
