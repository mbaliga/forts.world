# Fort La Tour

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-la-tour-q3077906` |
| Coordinates | 45.27278, -66.07222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.27278/-66.07222)) |
| Wikidata | [Q3077906](https://www.wikidata.org/wiki/Q3077906) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint John |
| Designations | provincial heritage place\|national historic site of Canada |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 94 elements (outline 1, marker 2, road 64, building 8, coastline 1, zone 12, water 3, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 94, inferred 0, derived 1; heights documented 2, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/488899072 historic=fort Q3077906 12 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":160,"medianInside":1,"medianOutside":6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.27278/-66.07222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3077906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 94 elements); data/traces/fort-la-tour-q3077906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
