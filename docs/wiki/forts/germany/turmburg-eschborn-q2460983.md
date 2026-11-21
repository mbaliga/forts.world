# Turmburg Eschborn

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `turmburg-eschborn-q2460983` |
| Coordinates | 50.146, 8.56785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.146/8.56785)) |
| Wikidata | [Q2460983](https://www.wikidata.org/wiki/Q2460983) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Eschborn |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 4 |
| OSM `website` | https://denkxweb.denkmalpflege-hessen.de/45550/ |

## What the model contains

Tier **T1**, status `outline-only`, 262 elements (outline 1, marker 1, road 133, waterway 5, building 310, water 2).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 2, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26226366 historic=building 258 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 310 mapped (trace size budget); the rest of the town is not drawn
- origin moved 257 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.146/8.56785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q2460983 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 262 elements); data/traces/turmburg-eschborn-q2460983.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
