# Cava do Viriato

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cava-do-viriato-q17390127` |
| Coordinates | 40.66805, -7.90988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.66805/-7.90988)) |
| Wikidata | [Q17390127](https://www.wikidata.org/wiki/Q17390127) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|hillfort\|archaeological site |
| Administrative area | Viseu |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | earthworks |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 1, road 442, zone 49, building 432, water 5, wall 79, waterway 6, retaining-wall 14).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 0, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7112708 historic=archaeological_site Q17390127 106 m from ledger point
- pruned to the outline plus 150 m: 1029 -> 447 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 182 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 227 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.66805/-7.90988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|hillfort\|archaeological site; sitelinks=2; wikidata:Q17390127 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/cava-do-viriato-q17390127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
