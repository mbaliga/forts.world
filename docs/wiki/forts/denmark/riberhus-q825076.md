# Riberhus

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `riberhus-q825076` |
| Coordinates | 55.33087, 8.75656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.33087/8.75656)) |
| Wikidata | [Q825076](https://www.wikidata.org/wiki/Q825076) (CC0) |
| Wikidata class | ruin |
| Types | château\|castle ruin |
| Administrative area | Esbjerg Municipality |
| Inception | 1260 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 182 elements (outline 1, marker 1, road 46, water 4, waterway 4, zone 7, building 117, wall 2).

Evidence: documented 0, mapped 182, inferred 0, derived 0; heights documented 3, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/307108637 historic=archaeological_site Q825076 9 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.33087/8.75656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; château\|castle ruin; sitelinks=6; wikidata:Q825076 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 182 elements); data/traces/riberhus-q825076.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
