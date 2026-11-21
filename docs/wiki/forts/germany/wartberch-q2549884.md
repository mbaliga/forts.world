# Wartberch

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wartberch-q2549884` |
| Coordinates | 51.4867, 9.14457 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4867/9.14457)) |
| Wikidata | [Q2549884](https://www.wikidata.org/wiki/Q2549884) (CC0) |
| Wikidata class | castle |
| Types | deserted castle site |
| Administrative area | Warburg |
| Designations | Bodendenkmal\|architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 50, road 125, waterway 2, building 418, zone 6, water 1, wall 5).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 8, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202180209 historic=yes Q1281881 251 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 418 mapped (trace size budget); the rest of the town is not drawn
- origin moved 252 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4867/9.14457) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; deserted castle site; sitelinks=1; wikidata:Q2549884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/wartberch-q2549884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
