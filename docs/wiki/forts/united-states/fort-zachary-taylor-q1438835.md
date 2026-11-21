# Fort Zachary Taylor

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-zachary-taylor-q1438835` |
| Coordinates | 24.5475, -81.81 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.5475/-81.81)) |
| Wikidata | [Q1438835](https://www.wikidata.org/wiki/Q1438835) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Florida |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, road 118, waterway 2, building 44, wall 8, water 3, zone 6, coastline 4).

Evidence: documented 0, mapped 186, inferred 0, derived 2; heights documented 2, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/524088621 historic=fort 52 m from ledger point
- origin moved 55 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":6,"medianInside":0.4,"medianOutside":2}
- sea-1: DEM check ok {"cells":71,"medianInside":1.2,"medianOutside":2.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.5475/-81.81) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q1438835 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/fort-zachary-taylor-q1438835.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
