# Kirchenburg Merklingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kirchenburg-merklingen-q124376912` |
| Coordinates | 48.76925, 8.85115 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.76925/8.85115)) |
| Wikidata | [Q124376912](https://www.wikidata.org/wiki/Q124376912) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|church building |
| Administrative area | Weil der Stadt |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, road 66, waterway 1, zone 6, building 461, wall 9).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 8, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34868122 historic=castle Q124376912 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 461 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.76925/8.85115) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|church building; sitelinks=1; wikidata:Q124376912 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/kirchenburg-merklingen-q124376912.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
