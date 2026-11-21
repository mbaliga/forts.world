# Fort Mason

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mason-q948933` |
| Coordinates | 37.80778, -122.42972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.80778/-122.42972)) |
| Wikidata | [Q948933](https://www.wikidata.org/wiki/Q948933) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | San Francisco |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 8 |
| OSM `historic` | fortification |

## What the model contains

Tier **T1**, status `outline-only`, 187 elements (outline 1, marker 4, road 135, coastline 2, zone 4, retaining-wall 6, building 33, water 2).

Evidence: documented 0, mapped 187, inferred 0, derived 2; heights documented 26, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422270538 historic=fortification 125 m from ledger point
- origin moved 126 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":130,"medianInside":-4.7,"medianOutside":20.2}
- sea-1: DEM check ok {"cells":8,"medianInside":-5.6,"medianOutside":5.6}
- 449 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.80778/-122.42972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q948933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 187 elements); data/traces/fort-mason-q948933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
