# Alburquerque Castle and Outworks

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alburquerque-castle-and-outworks-q18361888` |
| Coordinates | 39.21731, -7.00249 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.21731/-7.00249)) |
| Wikidata | [Q18361888](https://www.wikidata.org/wiki/Q18361888) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Alburquerque |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, road 73, wall 6, building 179).

Evidence: documented 0, mapped 259, inferred 0, derived 0; heights documented 35, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35778263 historic=castle Q18629193 17 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.21731/-7.00249) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=1; wikidata:Q18361888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/alburquerque-castle-and-outworks-q18361888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
