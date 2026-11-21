# Palais Windisch-Graetz

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-windisch-graetz-q2047219` |
| Coordinates | 48.21262, 16.36761 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21262/16.36761)) |
| Wikidata | [Q2047219](https://www.wikidata.org/wiki/Q2047219) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|city palace |
| Administrative area | Innere Stadt |
| Inception | 1702 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 29, road 334, waterway 1, building 102, retaining-wall 13, zone 13, water 2, wall 11).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 91, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6528729 historic=castle Q2047219 0 m from ledger point
- roads capped: kept the 150 longest of 334 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21262/16.36761) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|city palace; sitelinks=4; wikidata:Q2047219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/palais-windisch-graetz-q2047219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
