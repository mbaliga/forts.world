# Sverresborg

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sverresborg-q2520943` |
| Coordinates | 60.40136, 5.32047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.40136/5.32047)) |
| Wikidata | [Q2520943](https://www.wikidata.org/wiki/Q2520943) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bergen Municipality |
| Inception | 1184 |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 3, road 237, coastline 3, building 284, retaining-wall 4, wall 4, zone 7, cliff 5, water 1).

Evidence: documented 0, mapped 298, inferred 0, derived 1; heights documented 63, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/488104937 historic=fort 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 284 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":31,"medianInside":0,"medianOutside":6.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.40136/5.32047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2520943 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/sverresborg-q2520943.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
