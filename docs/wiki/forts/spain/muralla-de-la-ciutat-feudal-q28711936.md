# Muralla de la ciutat feudal

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-la-ciutat-feudal-q28711936` |
| Coordinates | 41.61675, 0.62495 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.61675/0.62495)) |
| Wikidata | [Q28711936](https://www.wikidata.org/wiki/Q28711936) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Lleida |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 24, road 744, waterway 1, wall 104, building 657, zone 18, retaining-wall 21).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 1, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48495187 historic=fort 82 m from ledger point
- pruned to the outline plus 150 m: 1570 -> 868 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 419 mapped (trace size budget); minor lanes are not drawn
- origin moved 84 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.61675/0.62495) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q28711936 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/muralla-de-la-ciutat-feudal-q28711936.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
