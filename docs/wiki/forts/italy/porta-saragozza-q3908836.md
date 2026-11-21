# Porta Saragozza

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-saragozza-q3908836` |
| Coordinates | 44.49052, 11.32989 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.49052/11.32989)) |
| Wikidata | [Q3908836](https://www.wikidata.org/wiki/Q3908836) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|historic building |
| Administrative area | Bologna |
| Inception | 1300 |
| Wikipedia language editions | 9 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 3, road 176, building 214, wall 3, zone 22).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1195313337 historic=ruins 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.49052/11.32989) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|historic building; sitelinks=9; wikidata:Q3908836 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/porta-saragozza-q3908836.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
