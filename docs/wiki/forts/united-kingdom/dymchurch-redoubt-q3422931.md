# Dymchurch Redoubt

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dymchurch-redoubt-q3422931` |
| Coordinates | 51.049, 1.03632 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.049/1.03632)) |
| Wikidata | [Q3422931](https://www.wikidata.org/wiki/Q3422931) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Hythe |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, coastline 1, zone 5, building 21, road 15, waterway 7, water 2, retaining-wall 3, wall 1).

Evidence: documented 0, mapped 56, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297369262 historic=castle Q3422931 20 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":121,"medianInside":-2.4,"medianOutside":2.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.049/1.03632) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=3; wikidata:Q3422931 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 56 elements); data/traces/dymchurch-redoubt-q3422931.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
