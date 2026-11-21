# Camden Fort Meagher

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `camden-fort-meagher-q17143413` |
| Coordinates | 51.808, -8.279 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.808/-8.279)) |
| Wikidata | [Q17143413](https://www.wikidata.org/wiki/Q17143413) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Crosshaven |
| Designations | national monument of Ireland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | https://camdenfortmeagher.ie/ |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, marker 9, coastline 6, road 40, retaining-wall 16, building 43, zone 5, water 2, wall 8).

Evidence: documented 0, mapped 130, inferred 0, derived 1; heights documented 4, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7548127 historic=fort Q17143413 138 m from ledger point
- origin moved 161 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":560,"medianInside":10,"medianOutside":41.4}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.808/-8.279) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q17143413 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 130 elements); data/traces/camden-fort-meagher-q17143413.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
