# Citadelle de Saint-Florent

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-de-saint-florent-q18214401` |
| Coordinates | 42.68278, 9.30167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.68278/9.30167)) |
| Wikidata | [Q18214401](https://www.wikidata.org/wiki/Q18214401) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Saint-Florent |
| Inception | 1440 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 193 elements (outline 1, road 49, coastline 1, building 138, wall 2, water 2).

Evidence: documented 0, mapped 193, inferred 0, derived 2; heights documented 1, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/364936091 historic=castle Q18214401 14 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":148,"medianInside":0,"medianOutside":8.5}
- sea-1: DEM check ok {"cells":2,"medianInside":0.1,"medianOutside":0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.68278/9.30167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=2; wikidata:Q18214401 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 193 elements); data/traces/citadelle-de-saint-florent-q18214401.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
