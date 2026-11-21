# Fort Fleur d'Épée

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-fleur-d-epee-q3077867` |
| Coordinates | 16.21667, -61.51306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.21667/-61.51306)) |
| Wikidata | [Q3077867](https://www.wikidata.org/wiki/Q3077867) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Le Gosier |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, marker 3, road 46, coastline 1, building 77, zone 5, wall 11, water 3).

Evidence: documented 0, mapped 147, inferred 0, derived 3; heights documented 2, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1287512984 historic=building 1 m from ledger point
- sea-0: DEM check failed {"cells":2,"medianInside":18.4,"medianOutside":15.5}
- sea-1: DEM check failed {"cells":1,"medianInside":17,"medianOutside":15.7}
- sea-2: DEM check ok {"cells":103,"medianInside":7.2,"medianOutside":22.3}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.21667/-61.51306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q3077867 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 147 elements); data/traces/fort-fleur-d-epee-q3077867.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
