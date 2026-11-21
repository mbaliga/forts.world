# Bastion V Lubicz

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-v-lubicz-q11687502` |
| Coordinates | 50.066, 19.9591 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.066/19.9591)) |
| Wikidata | [Q11687502](https://www.wikidata.org/wiki/Q11687502) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kraków |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 1, road 435, building 124, zone 117, retaining-wall 22, wall 16).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 24, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4029850 historic=fort Q11687502 43 m from ledger point
- pruned to the outline plus 150 m: 716 -> 480 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 65 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 306 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.066/19.9591) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q11687502 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/bastion-v-lubicz-q11687502.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
