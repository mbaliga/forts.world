# Tower of Llanes

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-llanes-q3896966` |
| Coordinates | 43.42131, -4.75506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.42131/-4.75506)) |
| Wikidata | [Q3896966](https://www.wikidata.org/wiki/Q3896966) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|monument |
| Administrative area | Llanes |
| Designations | part of UNESCO World Heritage Site\|bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 1, road 181, waterway 1, coastline 3, building 262, zone 6, wall 14, retaining-wall 3, water 2).

Evidence: documented 0, mapped 301, inferred 0, derived 2; heights documented 32, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113818781 historic=castle Q3896966 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":2,"medianOutside":14.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":13.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.42131/-4.75506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|monument; sitelinks=6; wikidata:Q3896966 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/tower-of-llanes-q3896966.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
