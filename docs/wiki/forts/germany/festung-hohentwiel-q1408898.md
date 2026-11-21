# Festung Hohentwiel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `festung-hohentwiel-q1408898` |
| Coordinates | 47.76472, 8.81889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.76472/8.81889)) |
| Wikidata | [Q1408898](https://www.wikidata.org/wiki/Q1408898) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|castle ruin |
| Administrative area | Singen |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |
| OSM `description` | Bastionen |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, marker 10, zone 23, road 87, wall 51, building 3, cliff 2).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 2, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27886016 historic=ruins 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 41 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.76472/8.81889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|castle ruin; sitelinks=6; wikidata:Q1408898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/festung-hohentwiel-q1408898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
