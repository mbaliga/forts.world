# Duchcov Chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duchcov-chateau-q1416937` |
| Coordinates | 50.60214, 13.74419 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.60214/13.74419)) |
| Wikidata | [Q1416937](https://www.wikidata.org/wiki/Q1416937) (CC0) |
| Wikidata class | castle |
| Types | château\|fortified house |
| Administrative area | Duchcov |
| Inception | 2000 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `website` | https://www.zamek-duchcov.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 9, road 86, building 284, water 2, waterway 4, wall 5, zone 2).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 93, inferred 0, unknown 196.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31859121 historic=castle Q1416937 58 m from ledger point
- origin moved 57 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.60214/13.74419) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|fortified house; sitelinks=11; wikidata:Q1416937 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/duchcov-chateau-q1416937.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
