# Burg Zbiroh

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-zbiroh-q1014673` |
| Coordinates | 50.6237, 15.1907 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6237/15.1907)) |
| Wikidata | [Q1014673](https://www.wikidata.org/wiki/Q1014673) (CC0) |
| Wikidata class | ruin |
| Types | rock castle\|castle ruin |
| Administrative area | Zbirohy |
| Inception | 1400 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, road 23, waterway 4, building 24, cliff 9, retaining-wall 2, wall 4, zone 8, water 1).

Evidence: documented 0, mapped 76, inferred 0, derived 0; heights documented 8, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13823851 historic=castle Q1014673 19 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6237/15.1907) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; rock castle\|castle ruin; sitelinks=3; wikidata:Q1014673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/burg-zbiroh-q1014673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
