# Sayn Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sayn-castle-q601887` |
| Coordinates | 50.439, 7.5793 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.439/7.5793)) |
| Wikidata | [Q601887](https://www.wikidata.org/wiki/Q601887) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Bendorf |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 5, road 187, waterway 8, building 374, wall 39, zone 10, retaining-wall 7, cliff 1, water 9).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 33, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/619167701 historic=castle Q601887 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 374 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.439/7.5793) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=6; wikidata:Q601887 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/sayn-castle-q601887.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
