# Citadel of Bonifacio

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-bonifacio-q22949605` |
| Coordinates | 41.38778, 9.15946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38778/9.15946)) |
| Wikidata | [Q22949605](https://www.wikidata.org/wiki/Q22949605) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Bonifacio |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 2, road 129, zone 20, coastline 5, building 265, wall 10, cliff 3, retaining-wall 5, water 4).

Evidence: documented 0, mapped 299, inferred 0, derived 4; heights documented 1, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66658955 historic=building 49 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 265 mapped (trace size budget); the rest of the town is not drawn
- origin moved 50 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":80,"medianInside":0.4,"medianOutside":9.9}
- sea-1: DEM check ok {"cells":400,"medianInside":6.6,"medianOutside":10.7}
- sea-2: DEM check ok {"cells":400,"medianInside":6.6,"medianOutside":10.7}
- sea-3: DEM check ok {"cells":92,"medianInside":0.3,"medianOutside":11.3}
- 49 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38778/9.15946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q22949605 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/citadel-of-bonifacio-q22949605.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
