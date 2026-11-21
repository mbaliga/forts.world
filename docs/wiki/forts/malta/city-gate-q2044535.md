# City Gate

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-gate-q2044535` |
| Coordinates | 35.89617, 14.50931 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.89617/14.50931)) |
| Wikidata | [Q2044535](https://www.wikidata.org/wiki/Q2044535) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Valletta |
| Inception | 2014 |
| Wikipedia language editions | 26 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 176 elements (outline 1, marker 2, road 93, building 22, retaining-wall 3, wall 42, coastline 2, water 4, zone 6).

Evidence: documented 0, mapped 176, inferred 0, derived 2; heights documented 3, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/690035448 historic=citywalls 313 m from ledger point
- origin moved 312 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":138,"medianInside":0.1,"medianOutside":30.2}
- sea-1: DEM check ok {"cells":16,"medianInside":3.3,"medianOutside":28.1}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.89617/14.50931) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=26; wikidata:Q2044535 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 176 elements); data/traces/city-gate-q2044535.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
