# Fort Jefferson

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-jefferson-q88428` |
| Coordinates | 24.62778, -82.87306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.62778/-82.87306)) |
| Wikidata | [Q88428](https://www.wikidata.org/wiki/Q88428) (CC0) |
| Wikidata class | fort |
| Types | island\|sea fort |
| Administrative area | Monroe County |
| Inception | 1847 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 11 |
| OSM `historic` | fort |
| OSM `website` | https://www.nps.gov/drto/learn/historyculture/fort-jefferson.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, coastline 8, zone 4, building 8, road 23, wall 6, water 1).

Evidence: documented 0, mapped 51, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2080589 historic=fort Q88428 96 m from ledger point
- origin moved 94 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":706,"medianInside":0.9,"medianOutside":0.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.62778/-82.87306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|sea fort; sitelinks=11; wikidata:Q88428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/fort-jefferson-q88428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
