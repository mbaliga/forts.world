# Vologda Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vologda-kremlin-q4123703` |
| Coordinates | 59.22367, 39.88243 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.22367/39.88243)) |
| Wikidata | [Q4123703](https://www.wikidata.org/wiki/Q4123703) (CC0) |
| Wikidata class | fort |
| Types | kremlin\|protected area of Russia\|architectural landmark |
| Administrative area | Vologda |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 8, road 160, building 66, waterway 1, water 1, retaining-wall 2, wall 13, zone 3).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 59, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46431511 historic=castle Q4123703 20 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.22367/39.88243) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; kremlin\|protected area of Russia\|architectural landmark; sitelinks=5; wikidata:Q4123703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/vologda-kremlin-q4123703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
