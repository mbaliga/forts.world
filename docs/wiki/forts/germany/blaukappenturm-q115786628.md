# Blaukappenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blaukappenturm-q115786628` |
| Coordinates | 49.48026, 9.8967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.48026/9.8967)) |
| Wikidata | [Q115786628](https://www.wikidata.org/wiki/Q115786628) (CC0) |
| Wikidata class | fortification |
| Types | prison\|watchtower |
| Administrative area | Weikersheim |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-weikersheim.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 45, road 139, zone 18, waterway 9, water 5, wall 10, building 90, retaining-wall 1).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 2, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28232803 historic=castle Q504517 92 m from ledger point
- origin moved 93 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.48026/9.8967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; prison\|watchtower; sitelinks=1; wikidata:Q115786628 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/blaukappenturm-q115786628.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
