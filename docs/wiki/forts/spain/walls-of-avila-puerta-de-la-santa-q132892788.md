# Walls of Ávila, Puerta de La Santa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-avila-puerta-de-la-santa-q132892788` |
| Coordinates | 40.65491, -4.70299 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.65491/-4.70299)) |
| Wikidata | [Q132892788](https://www.wikidata.org/wiki/Q132892788) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ávila |
| Designations | World Heritage Site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 4, wall 15, road 132, building 273, zone 5, retaining-wall 3).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 7, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5383728 historic=castle Q16641813 144 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 273 mapped (trace size budget); the rest of the town is not drawn
- origin moved 145 m from the ledger point to the outline centroid
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.65491/-4.70299) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q132892788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/walls-of-avila-puerta-de-la-santa-q132892788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
