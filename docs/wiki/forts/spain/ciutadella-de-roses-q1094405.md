# Ciutadella de Roses

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ciutadella-de-roses-q1094405` |
| Coordinates | 42.26694, 3.17 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.26694/3.17)) |
| Wikidata | [Q1094405](https://www.wikidata.org/wiki/Q1094405) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Roses |
| Inception | 1600 |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 2, road 216, waterway 10, building 350, wall 7, zone 11, coastline 2, water 1).

Evidence: documented 0, mapped 304, inferred 0, derived 1; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8308019 historic=castle Q1094405 32 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 350 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 216 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":257,"medianInside":0,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.26694/3.17) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=6; wikidata:Q1094405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/ciutadella-de-roses-q1094405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
