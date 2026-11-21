# Fort Hubberstone

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-hubberstone-q5471372` |
| Coordinates | 51.7086, -5.05431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7086/-5.05431)) |
| Wikidata | [Q5471372](https://www.wikidata.org/wiki/Q5471372) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Milford Haven |
| Inception | 1860 |
| Designations | Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, road 27, coastline 1, building 5, wall 2, water 1).

Evidence: documented 0, mapped 37, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1037849410 historic=fort Q5471372 83 m from ledger point
- origin moved 80 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":345,"medianInside":6.4,"medianOutside":26.8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7086/-5.05431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5471372 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/fort-hubberstone-q5471372.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
