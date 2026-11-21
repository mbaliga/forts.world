# Sant Nicolau Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sant-nicolau-castle-q6150471` |
| Coordinates | 39.99568, 3.82578 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.99568/3.82578)) |
| Wikidata | [Q6150471](https://www.wikidata.org/wiki/Q6150471) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Ciutadella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, road 14, coastline 3, building 26, wall 1, water 3).

Evidence: documented 0, mapped 48, inferred 0, derived 3; heights documented 27, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/571114785 historic=castle Q6150471 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":400,"medianInside":0.8,"medianOutside":3.9}
- sea-1: DEM check ok {"cells":392,"medianInside":0.8,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":274,"medianInside":0.1,"medianOutside":7.3}
- 85 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.99568/3.82578) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=5; wikidata:Q6150471 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/sant-nicolau-castle-q6150471.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
