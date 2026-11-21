# Schloss Kirrweiler

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-kirrweiler-q134592038` |
| Coordinates | 49.30061, 8.16285 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.30061/8.16285)) |
| Wikidata | [Q134592038](https://www.wikidata.org/wiki/Q134592038) (CC0) |
| Wikidata class | castle |
| Types | water castle\|château\|deserted castle site |
| Administrative area | Kirrweiler |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 3, road 88, wall 13, building 431, zone 6, waterway 3).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 12, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/818525994 historic=yes 267 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 431 mapped (trace size budget); the rest of the town is not drawn
- origin moved 268 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.30061/8.16285) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle\|château\|deserted castle site; sitelinks=2; wikidata:Q134592038 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/schloss-kirrweiler-q134592038.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
