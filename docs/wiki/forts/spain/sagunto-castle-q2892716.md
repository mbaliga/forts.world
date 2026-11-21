# Sagunto Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sagunto-castle-q2892716` |
| Coordinates | 39.67583, -0.2775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.67583/-0.2775)) |
| Wikidata | [Q2892716](https://www.wikidata.org/wiki/Q2892716) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sagunto |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 10, road 394, building 1323, wall 170, zone 10, retaining-wall 32, cliff 3).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 24, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16216725 historic=castle Q2892716 179 m from ledger point
- pruned to the outline plus 150 m: 1943 -> 644 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 312 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 180 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.67583/-0.2775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2892716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/sagunto-castle-q2892716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
