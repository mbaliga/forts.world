# Walls of Ávila, Puerta del Puente

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-avila-puerta-del-puente-q132892668` |
| Coordinates | 40.65745, -4.70733 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.65745/-4.70733)) |
| Wikidata | [Q132892668](https://www.wikidata.org/wiki/Q132892668) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ávila |
| Designations | World Heritage Site |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 10, road 442, waterway 2, building 806, wall 18, zone 28, water 1, retaining-wall 9).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 0, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45976728 historic=citywalls Q3050235 442 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 806 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 442 mapped (trace size budget); minor lanes are not drawn
- origin moved 441 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.65745/-4.70733) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q132892668 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/walls-of-avila-puerta-del-puente-q132892668.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
