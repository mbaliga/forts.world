# Fort Bowyer

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-bowyer-q5470844` |
| Coordinates | 30.22806, -88.02306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.22806/-88.02306)) |
| Wikidata | [Q5470844](https://www.wikidata.org/wiki/Q5470844) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 73 elements (outline 1, road 41, coastline 2, retaining-wall 9, building 16, waterway 1, water 3).

Evidence: documented 0, mapped 73, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/64529 historic=fort 15 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":7,"medianInside":-10,"medianOutside":3.1}
- 80 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.22806/-88.02306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5470844 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 73 elements); data/traces/fort-bowyer-q5470844.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
