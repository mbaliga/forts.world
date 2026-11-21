# Palais Caprara-Geymüller

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-caprara-geymuller-q1773036` |
| Coordinates | 48.2104, 16.36632 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2104/16.36632)) |
| Wikidata | [Q1773036](https://www.wikidata.org/wiki/Q1773036) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|city palace |
| Administrative area | Innere Stadt |
| Inception | 1698 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 28, road 317, building 76, wall 9, zone 5, retaining-wall 15).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 65, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1532140 historic=castle Q1773036 12 m from ledger point
- roads capped: kept the 150 longest of 317 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2104/16.36632) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|city palace; sitelinks=4; wikidata:Q1773036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/palais-caprara-geymuller-q1773036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
