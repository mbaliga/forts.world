# Caernarfon Town Walls

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caernarfon-town-walls-q5016914` |
| Coordinates | 53.14096, -4.27619 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.14096/-4.27619)) |
| Wikidata | [Q5016914](https://www.wikidata.org/wiki/Q5016914) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Caernarfon |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 9, coastline 2, road 427, building 382, zone 29, wall 52, waterway 1, retaining-wall 2, water 3).

Evidence: documented 0, mapped 370, inferred 0, derived 3; heights documented 59, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1493703310 historic=citywalls Q5016914 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 382 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 427 mapped (trace size budget); minor lanes are not drawn
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":960,"medianInside":8.3,"medianOutside":2}
- sea-1: DEM check ok {"cells":410,"medianInside":2.6,"medianOutside":11.2}
- sea-2: DEM check ok {"cells":908,"medianInside":8.1,"medianOutside":9.6}
- 126 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.14096/-4.27619) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=6; wikidata:Q5016914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/caernarfon-town-walls-q5016914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
