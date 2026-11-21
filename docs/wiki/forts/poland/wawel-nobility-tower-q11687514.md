# Wawel Nobility Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wawel-nobility-tower-q11687514` |
| Coordinates | 50.0533, 19.9356 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0533/19.9356)) |
| Wikidata | [Q11687514](https://www.wikidata.org/wiki/Q11687514) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kraków |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | fortification |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, marker 58, road 242, building 71, wall 72, waterway 1, zone 116, retaining-wall 2).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 55, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85151345 historic=fortification Q9166786 8 m from ledger point
- pruned to the outline plus 150 m: 563 -> 253 elements
- roads capped: kept the 80 longest of 106 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid
- 34 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0533/19.9356) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q11687514 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/wawel-nobility-tower-q11687514.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
