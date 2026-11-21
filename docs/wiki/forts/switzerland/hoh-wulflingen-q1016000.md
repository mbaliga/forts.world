# Hoh-Wülflingen

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hoh-wulflingen-q1016000` |
| Coordinates | 47.49857, 8.68426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.49857/8.68426)) |
| Wikidata | [Q1016000](https://www.wikidata.org/wiki/Q1016000) (CC0) |
| Wikidata class | ruin |
| Types | castle\|deserted castle site\|castle ruin |
| Administrative area | Wülflingen |
| Inception | 1254 |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, road 53, waterway 6, building 1, water 4, wall 2, zone 1).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1272101010 historic=castle Q1015238 320 m from ledger point
- origin moved 322 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.49857/8.68426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|deserted castle site\|castle ruin; sitelinks=2; wikidata:Q1016000 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/hoh-wulflingen-q1016000.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
