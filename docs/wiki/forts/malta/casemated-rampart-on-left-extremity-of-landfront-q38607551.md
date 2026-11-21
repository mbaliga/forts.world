# Casemated rampart on left extremity of landfront (il- Macina) - Senglea

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casemated-rampart-on-left-extremity-of-landfront-q38607551` |
| Coordinates | 35.8854, 14.52017 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8854/14.52017)) |
| Wikidata | [Q38607551](https://www.wikidata.org/wiki/Q38607551) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Senglea |
| Designations | Grade 1 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 6, road 154, wall 60, building 166, coastline 1, retaining-wall 4, zone 14, water 1).

Evidence: documented 0, mapped 358, inferred 0, derived 1; heights documented 98, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/691730690 historic=citywalls 294 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 291 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":9.8,"medianOutside":23.3}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8854/14.52017) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q38607551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/casemated-rampart-on-left-extremity-of-landfront-q38607551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
