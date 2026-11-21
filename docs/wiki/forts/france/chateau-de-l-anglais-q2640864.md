# Château de l'Anglais

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-l-anglais-q2640864` |
| Coordinates | 43.68805, 7.29512 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.68805/7.29512)) |
| Wikidata | [Q2640864](https://www.wikidata.org/wiki/Q2640864) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Nice |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, road 62, coastline 2, building 181, zone 1, wall 2, water 3).

Evidence: documented 0, mapped 252, inferred 0, derived 3; heights documented 135, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138295865 historic=(none; chosen by its Wikidata id) Q2640864 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":25.1,"medianOutside":70.3}
- sea-1: DEM check ok {"cells":123,"medianInside":0,"medianOutside":49}
- sea-2: DEM check ok {"cells":5,"medianInside":2,"medianOutside":28}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.68805/7.29512) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2640864 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 247 elements); data/traces/chateau-de-l-anglais-q2640864.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 252 elements; outline osm:way/138295865 historic=(none; chosen by its Wikidata id) Q2640864 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
