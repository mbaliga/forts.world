# Entrenchment complex FS 3

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `entrenchment-complex-fs-3-q30161381` |
| Coordinates | 50.05659, 19.8974 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05659/19.8974)) |
| Wikidata | [Q30161381](https://www.wikidata.org/wiki/Q30161381) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 7, road 199, waterway 1, building 56, zone 56, water 1, wall 62, retaining-wall 19, cliff 2).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 2, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1326099938 historic=fort Q11698486 362 m from ledger point
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 362 m from the ledger point to the outline centroid
- 78 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05659/19.8974) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q30161381 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/entrenchment-complex-fs-3-q30161381.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
