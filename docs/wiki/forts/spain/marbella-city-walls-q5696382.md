# Marbella city walls

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marbella-city-walls-q5696382` |
| Coordinates | 36.51136, -4.88387 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.51136/-4.88387)) |
| Wikidata | [Q5696382](https://www.wikidata.org/wiki/Q5696382) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Marbella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 183 elements (outline 1, marker 1, road 98, coastline 1, building 59, wall 1, water 13, waterway 2, retaining-wall 7).

Evidence: documented 0, mapped 183, inferred 0, derived 1; heights documented 2, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/962272111 historic=fort Q97633173 485 m from ledger point
- origin moved 486 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":151,"medianInside":0,"medianOutside":15.9}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.51136/-4.88387) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=5; wikidata:Q5696382 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 183 elements); data/traces/marbella-city-walls-q5696382.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
