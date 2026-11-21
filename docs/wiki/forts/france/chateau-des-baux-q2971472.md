# Château des Baux

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-des-baux-q2971472` |
| Coordinates | 43.74444, 4.79694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.74444/4.79694)) |
| Wikidata | [Q2971472](https://www.wikidata.org/wiki/Q2971472) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum |
| Administrative area | Les Baux-de-Provence |
| Designations | classified historical monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 383 elements (outline 1, marker 8, road 271, building 176, cliff 20, zone 96, wall 88, retaining-wall 54, pit 1).

Evidence: documented 0, mapped 383, inferred 0, derived 0; heights documented 32, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/329862230 historic=castle Q2971472 52 m from ledger point
- pruned to the outline plus 150 m: 715 -> 653 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 51 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.74444/4.79694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum; sitelinks=10; wikidata:Q2971472 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 383 elements); data/traces/chateau-des-baux-q2971472.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
