# Fort San Antonio Abad

> Philippines · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-antonio-abad-q5471974` |
| Coordinates | 14.56264, 120.98683 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.56264/120.98683)) |
| Wikidata | [Q5471974](https://www.wikidata.org/wiki/Q5471974) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1584 |
| Designations | National Cultural Treasure |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 181 elements (outline 1, marker 6, road 119, building 41, waterway 4, coastline 4, zone 4, water 2).

Evidence: documented 0, mapped 181, inferred 0, derived 2; heights documented 11, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105689933 historic=fort Q5471974 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":13,"medianInside":5.8,"medianOutside":7.9}
- sea-1: DEM check ok {"cells":14,"medianInside":2.3,"medianOutside":7.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.56264/120.98683) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q5471974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 181 elements); data/traces/fort-san-antonio-abad-q5471974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
