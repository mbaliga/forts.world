# Ablution Gate

> Palestinian Territories · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ablution-gate-q128903938` |
| Coordinates | 31.77799, 35.23435 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.77799/35.23435)) |
| Wikidata | [Q128903938](https://www.wikidata.org/wiki/Q128903938) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jerusalem |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, marker 66, building 2064, road 701, wall 100, zone 59, retaining-wall 19, water 2, waterway 1).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 0, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5862586 historic=citywalls Q213274 242 m from ledger point
- pruned to the outline plus 150 m: 3013 -> 3012 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 2064 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 701 mapped (trace size budget); minor lanes are not drawn
- origin moved 244 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.77799/35.23435) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q128903938 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/ablution-gate-q128903938.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/palestinian-territories.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
