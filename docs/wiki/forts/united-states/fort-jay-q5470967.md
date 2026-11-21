# Fort Jay

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-jay-q5470967` |
| Coordinates | 40.69111, -74.01639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.69111/-74.01639)) |
| Wikidata | [Q5470967](https://www.wikidata.org/wiki/Q5470967) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Manhattan |
| Inception | 1794 |
| Designations | New York City Landmark\|National Register of Historic Places listed place\|National Register of Historic Places contributing property |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 7, coastline 3, road 432, building 99, zone 169, wall 9, retaining-wall 11, waterway 1, water 2).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 34, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1388461669 historic=fort Q5470967 54 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 734 -> 575 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 81 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 344 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the outline centroid
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.69111/-74.01639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q5470967 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/fort-jay-q5470967.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
