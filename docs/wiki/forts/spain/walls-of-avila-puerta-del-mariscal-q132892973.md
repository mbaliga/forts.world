# Walls of Ávila, Puerta del Mariscal

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-avila-puerta-del-mariscal-q132892973` |
| Coordinates | 40.65843, -4.69932 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.65843/-4.69932)) |
| Wikidata | [Q132892973](https://www.wikidata.org/wiki/Q132892973) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ávila |
| Designations | World Heritage Site |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 369 elements (outline 1, marker 15, road 506, building 1027, wall 29, zone 40, retaining-wall 11, water 2).

Evidence: documented 0, mapped 369, inferred 0, derived 0; heights documented 1, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45976728 historic=citywalls Q3050235 301 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1027 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 506 mapped (trace size budget); minor lanes are not drawn
- origin moved 301 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.65843/-4.69932) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q132892973 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 369 elements); data/traces/walls-of-avila-puerta-del-mariscal-q132892973.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
