# Oberschloss Adelsheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oberschloss-adelsheim-q109837316` |
| Coordinates | 49.40248, 9.3916 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.40248/9.3916)) |
| Wikidata | [Q109837316](https://www.wikidata.org/wiki/Q109837316) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Adelsheim |
| Inception | 1504 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 7, road 198, zone 8, waterway 7, building 217, wall 6, water 2, retaining-wall 8).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 0, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/275655071 historic=castle Q109837316 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 217 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 198 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.40248/9.3916) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q109837316 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/oberschloss-adelsheim-q109837316.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
