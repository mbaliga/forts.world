# Schlossberg Ulrichstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlossberg-ulrichstein-q1014328` |
| Coordinates | 50.57601, 9.1902 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.57601/9.1902)) |
| Wikidata | [Q1014328](https://www.wikidata.org/wiki/Q1014328) (CC0) |
| Wikidata class | ruin |
| Types | mountain\|castle ruin |
| Administrative area | Ulrichstein |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, road 68, wall 5, waterway 1, building 169, zone 9, water 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 0, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/73848938 historic=castle Q1014328 38 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.57601/9.1902) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; mountain\|castle ruin; sitelinks=6; wikidata:Q1014328 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/schlossberg-ulrichstein-q1014328.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
