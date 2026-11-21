# Achipse Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `achipse-fortress-q4073373` |
| Coordinates | 43.68243, 40.27592 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.68243/40.27592)) |
| Wikidata | [Q4073373](https://www.wikidata.org/wiki/Q4073373) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|protected area of Russia\|castle ruin |
| Administrative area | Krasnaya Polyana |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, marker 1, road 21, building 10, waterway 2, wall 1, zone 1).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 8, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/785714921 historic=ruins 188 m from ledger point
- origin moved 188 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.68243/40.27592) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|protected area of Russia\|castle ruin; sitelinks=4; wikidata:Q4073373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/achipse-fortress-q4073373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
