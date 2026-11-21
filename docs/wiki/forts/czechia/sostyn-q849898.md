# Šostýn

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sostyn-q849898` |
| Coordinates | 49.58637, 18.15731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.58637/18.15731)) |
| Wikidata | [Q849898](https://www.wikidata.org/wiki/Q849898) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Kopřivnice |
| Inception | 1300 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, road 32, water 1, zone 1, waterway 17, wall 1).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/430409616 historic=ruins Q849898 37 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.58637/18.15731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=6; wikidata:Q849898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/sostyn-q849898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
