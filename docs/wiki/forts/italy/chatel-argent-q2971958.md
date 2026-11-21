# Châtel-Argent

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chatel-argent-q2971958` |
| Coordinates | 45.70207, 7.21123 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.70207/7.21123)) |
| Wikidata | [Q2971958](https://www.wikidata.org/wiki/Q2971958) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Villeneuve |
| Inception | 1176 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, marker 1, road 46, waterway 2, water 1, building 39, zone 1, cliff 8, wall 5).

Evidence: documented 0, mapped 104, inferred 0, derived 0; heights documented 0, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/365395705 historic=castle Q2971958 18 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.70207/7.21123) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2971958 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/chatel-argent-q2971958.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
