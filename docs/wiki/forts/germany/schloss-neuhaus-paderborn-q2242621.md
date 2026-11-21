# Schloss Neuhaus, Paderborn

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-neuhaus-paderborn-q2242621` |
| Coordinates | 51.74526, 8.71229 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.74526/8.71229)) |
| Wikidata | [Q2242621](https://www.wikidata.org/wiki/Q2242621) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|royal palace |
| Administrative area | Paderborn |
| Inception | 1590 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 5, road 302, waterway 11, building 233, zone 62, water 4, wall 9).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 65, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/284292 historic=castle Q2242621 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 233 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 302 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.74526/8.71229) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|royal palace; sitelinks=6; wikidata:Q2242621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/schloss-neuhaus-paderborn-q2242621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
