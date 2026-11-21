# Pałac Królewski na Łobzowie

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pa-ac-krolewski-na-obzowie-q11814791` |
| Coordinates | 50.07557, 19.90926 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.07557/19.90926)) |
| Wikidata | [Q11814791](https://www.wikidata.org/wiki/Q11814791) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural heritage monument |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, road 167, zone 180, building 89, wall 3).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 17, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233355299 historic=yes 439 m from ledger point
- pruned to the outline plus 150 m: 440 -> 313 elements
- roads capped: kept the 80 longest of 116 mapped (trace size budget); minor lanes are not drawn
- origin moved 440 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.07557/19.90926) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural heritage monument; sitelinks=5; wikidata:Q11814791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/pa-ac-krolewski-na-obzowie-q11814791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
