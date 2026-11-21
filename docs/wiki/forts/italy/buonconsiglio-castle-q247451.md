# Buonconsiglio Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buonconsiglio-castle-q247451` |
| Coordinates | 46.07157, 11.12704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.07157/11.12704)) |
| Wikidata | [Q247451](https://www.wikidata.org/wiki/Q247451) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trento |
| Designations | Italian national heritage |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, marker 23, road 498, building 368, waterway 8, wall 82, zone 14, cliff 2, retaining-wall 3).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 23, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1173222628 historic=castle Q247451 52 m from ledger point
- pruned to the outline plus 150 m: 999 -> 640 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 344 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.07157/11.12704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q247451 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/buonconsiglio-castle-q247451.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
