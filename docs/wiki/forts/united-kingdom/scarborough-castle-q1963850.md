# Scarborough Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `scarborough-castle-q1963850` |
| Coordinates | 54.2869, -0.38803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.2869/-0.38803)) |
| Wikidata | [Q1963850](https://www.wikidata.org/wiki/Q1963850) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Scarborough |
| Inception | 1130 |
| Designations | scheduled monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/scarborough-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 6, coastline 2, road 227, zone 5, wall 68, building 331, cliff 1, retaining-wall 5, water 4).

Evidence: documented 0, mapped 362, inferred 0, derived 4; heights documented 16, inferred 0, unknown 177.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148829580 historic=castle Q1963850 99 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 227 mapped (trace size budget); minor lanes are not drawn
- origin moved 99 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":2.9,"medianOutside":15.3}
- sea-1: DEM check ok {"cells":155,"medianInside":-2.1,"medianOutside":16.6}
- sea-2: DEM check ok {"cells":19,"medianInside":0.4,"medianOutside":15.6}
- sea-3: DEM check ok {"cells":1740,"medianInside":-1.5,"medianOutside":28.3}
- 0 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.2869/-0.38803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=18; wikidata:Q1963850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/scarborough-castle-q1963850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
