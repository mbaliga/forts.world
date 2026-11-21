# Dorotka Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dorotka-tower-q33017733` |
| Coordinates | 51.76384, 18.09355 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.76384/18.09355)) |
| Wikidata | [Q33017733](https://www.wikidata.org/wiki/Q33017733) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kalisz |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 21, road 269, waterway 4, building 179, zone 30, water 6, wall 47, retaining-wall 102).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 4, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/335982513 historic=citywalls 7 m from ledger point
- pruned to the outline plus 150 m: 659 -> 367 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 72 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.76384/18.09355) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q33017733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/dorotka-tower-q33017733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
