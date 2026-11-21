# Horní brána

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `horni-brana-q66246635` |
| Coordinates | 49.18239, 15.45462 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.18239/15.45462)) |
| Wikidata | [Q66246635](https://www.wikidata.org/wiki/Q66246635) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vnitřní Město |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 21, road 150, wall 22, water 1, building 346, waterway 10, zone 12, retaining-wall 2).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 88, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/513261613 historic=yes 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 346 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.18239/15.45462) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q66246635 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/horni-brana-q66246635.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
