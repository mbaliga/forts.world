# Gori Fortress

> Georgia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gori-fortress-q339097` |
| Coordinates | 41.98611, 44.10806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.98611/44.10806)) |
| Wikidata | [Q339097](https://www.wikidata.org/wiki/Q339097) (CC0) |
| Wikidata class | fort |
| Types | cultural property\|fortress |
| Administrative area | Shida Kartli |
| Designations | Cultural Monuments of National Importance of Georgia |
| Wikipedia language editions | 17 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 5, road 178, wall 19, zone 14, building 354, water 1, cliff 2, waterway 1).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 23, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121995390 historic=citywalls 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.98611/44.10806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural property\|fortress; sitelinks=17; wikidata:Q339097 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/gori-fortress-q339097.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/georgia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
