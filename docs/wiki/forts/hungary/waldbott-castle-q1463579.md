# Waldbott Castle

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `waldbott-castle-q1463579` |
| Coordinates | 48.39363, 21.65548 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39363/21.65548)) |
| Wikidata | [Q1463579](https://www.wikidata.org/wiki/Q1463579) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Sátoraljaújhely |
| Inception | C18 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 6, road 115, waterway 1, building 367, wall 5, zone 8, retaining-wall 1).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 1, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/803891998 historic=castle Q1463579 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 367 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39363/21.65548) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q1463579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/waldbott-castle-q1463579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
