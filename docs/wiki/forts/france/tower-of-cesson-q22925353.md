# Tower of Cesson

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-cesson-q22925353` |
| Coordinates | 48.5287, -2.72303 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.5287/-2.72303)) |
| Wikidata | [Q22925353](https://www.wikidata.org/wiki/Q22925353) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Saint-Brieuc |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |
| OSM `website` | https://www.baiedesaintbrieuc.com/sit/la-tour-de-cesson-et-son-domaine |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, road 25, building 38, coastline 2, zone 6, waterway 1, wall 1, water 2).

Evidence: documented 0, mapped 76, inferred 0, derived 2; heights documented 4, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/442036275 historic=building Q22925353 12 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":393,"medianInside":41.7,"medianOutside":14.1}
- sea-1: DEM check ok {"cells":64,"medianInside":1.1,"medianOutside":43.5}
- 38 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.5287/-2.72303) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22925353 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/tower-of-cesson-q22925353.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
