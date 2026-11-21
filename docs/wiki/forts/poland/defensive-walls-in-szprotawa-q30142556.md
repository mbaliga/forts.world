# Defensive walls in Szprotawa

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-szprotawa-q30142556` |
| Coordinates | 51.56558, 15.53719 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.56558/15.53719)) |
| Wikidata | [Q30142556](https://www.wikidata.org/wiki/Q30142556) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Szprotawa |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 17, road 230, waterway 9, building 119, water 3, zone 21, wall 1).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 26, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/570883596 historic=yes 142 m from ledger point
- roads capped: kept the 150 longest of 230 mapped (trace size budget); minor lanes are not drawn
- origin moved 142 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.56558/15.53719) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30142556 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/defensive-walls-in-szprotawa-q30142556.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
