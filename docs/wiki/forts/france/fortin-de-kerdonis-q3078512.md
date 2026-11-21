# Fortin de Kerdonis

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortin-de-kerdonis-q3078512` |
| Coordinates | 47.3085, -3.05744 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3085/-3.05744)) |
| Wikidata | [Q3078512](https://www.wikidata.org/wiki/Q3078512) (CC0) |
| Wikidata class | fort |
| Types | blockhouse |
| Administrative area | Locmaria |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, building 3, road 15, wall 4, coastline 3, zone 5, water 2).

Evidence: documented 0, mapped 33, inferred 0, derived 2; heights documented 3, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63735189 historic=fort Q3078512 9 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":17,"medianInside":0.3,"medianOutside":7.9}
- sea-1: DEM check ok {"cells":121,"medianInside":0,"medianOutside":19.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3085/-3.05744) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse; sitelinks=2; wikidata:Q3078512 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/fortin-de-kerdonis-q3078512.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
