# Fort Levett

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-levett-q5471510` |
| Coordinates | 43.64306, -70.19528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.64306/-70.19528)) |
| Wikidata | [Q5471510](https://www.wikidata.org/wiki/Q5471510) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Portland |
| Inception | 1898 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, road 41, coastline 1, building 41, zone 12, wall 2, cliff 5, water 2, waterway 2).

Evidence: documented 0, mapped 107, inferred 0, derived 1; heights documented 0, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/978578084 historic=fort 269 m from ledger point
- origin moved 237 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":408,"medianInside":-9,"medianOutside":22.6}
- 2452 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.64306/-70.19528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q5471510 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/fort-levett-q5471510.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
