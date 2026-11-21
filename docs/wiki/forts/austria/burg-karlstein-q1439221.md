# Burg Karlstein

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-karlstein-q1439221` |
| Coordinates | 48.8817, 15.4016 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8817/15.4016)) |
| Wikidata | [Q1439221](https://www.wikidata.org/wiki/Q1439221) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Karlstein an der Thaya |
| Inception | 1112 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `heritage` | 2 |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 111 elements (outline 1, waterway 3, road 48, water 1, building 37, wall 7, cliff 2, zone 11, retaining-wall 1).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 2, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1677042 historic=castle Q1439221 94 m from ledger point
- origin moved 92 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8817/15.4016) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q1439221 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 111 elements); data/traces/burg-karlstein-q1439221.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
