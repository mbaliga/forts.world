# Steiner Häuschen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steiner-hauschen-q1320223` |
| Coordinates | 50.7155, 7.17164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7155/7.17164)) |
| Wikidata | [Q1320223](https://www.wikidata.org/wiki/Q1320223) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bonn |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Lippesches Palais |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 4, road 58, building 452, water 1, retaining-wall 2, wall 8).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98389273 historic=castle Q14359614 456 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 452 mapped (trace size budget); the rest of the town is not drawn
- origin moved 455 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7155/7.17164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1320223 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/steiner-hauschen-q1320223.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
