# Fort Belan

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-belan-q3399299` |
| Coordinates | 53.1224, -4.33269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1224/-4.33269)) |
| Wikidata | [Q3399299](https://www.wikidata.org/wiki/Q3399299) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Llandwrog |
| Inception | 1775 |
| Designations | Grade I listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, coastline 2, wall 8, building 8, road 2, water 5, waterway 3).

Evidence: documented 0, mapped 29, inferred 0, derived 2; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88916983 historic=castle Q3399299 45 m from ledger point
- origin moved 42 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":24,"medianInside":3,"medianOutside":3.5}
- sea-1: DEM check ok {"cells":142,"medianInside":1.9,"medianOutside":4.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1224/-4.33269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q3399299 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/fort-belan-q3399299.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
