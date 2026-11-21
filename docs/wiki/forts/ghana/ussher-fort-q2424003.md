# Ussher Fort

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ussher-fort-q2424003` |
| Coordinates | 5.5385, -0.2082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.5385/-0.2082)) |
| Wikidata | [Q2424003](https://www.wikidata.org/wiki/Q2424003) (CC0) |
| Wikidata class | fort |
| Types | factory\|fort |
| Administrative area | Greater Accra Region |
| Inception | 1649 |
| Designations | Ghana’s material cultural heritage |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, coastline 2, road 30, building 246, wall 7, water 2).

Evidence: documented 0, mapped 288, inferred 0, derived 2; heights documented 139, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177958818 historic=castle Q5471403 621 m from ledger point
- origin moved 620 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":200,"medianInside":2.2,"medianOutside":12.6}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":10.4}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.5385/-0.2082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; factory\|fort; sitelinks=10; wikidata:Q2424003 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/ussher-fort-q2424003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
