# Starý a Nový zámek

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stary-a-novy-zamek-q1710540` |
| Coordinates | 49.7256, 18.07498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7256/18.07498)) |
| Wikidata | [Q1710540](https://www.wikidata.org/wiki/Q1710540) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building complex |
| Administrative area | Studénka |
| Inception | 2001- |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, marker 2, road 47, water 1, waterway 1, building 131, zone 42, wall 3).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 50, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102549300 historic=castle Q1710540 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7256/18.07498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building complex; sitelinks=4; wikidata:Q1710540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/stary-a-novy-zamek-q1710540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
