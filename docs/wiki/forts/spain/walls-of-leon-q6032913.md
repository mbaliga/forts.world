# Walls of León

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-leon-q6032913` |
| Coordinates | 42.60222, -5.56747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.60222/-5.56747)) |
| Wikidata | [Q6032913](https://www.wikidata.org/wiki/Q6032913) (CC0) |
| Wikidata class | fortification |
| Types | monument\|city walls |
| Administrative area | León |
| Designations | bien de interés cultural |
| UNESCO WHC id | 669-1534 |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 2, road 167, zone 6, wall 11, building 344).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 6, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44808520 historic=citywalls 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.60222/-5.56747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|city walls; sitelinks=4; wikidata:Q6032913 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/walls-of-leon-q6032913.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
