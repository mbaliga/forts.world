# Battery du Roc

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-du-roc-q22975759` |
| Coordinates | 48.8347, -1.61245 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8347/-1.61245)) |
| Wikidata | [Q22975759](https://www.wikidata.org/wiki/Q22975759) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Granville |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 85 elements (outline 1, marker 3, road 32, cliff 1, building 18, retaining-wall 5, zone 16, coastline 1, wall 6, water 2).

Evidence: documented 0, mapped 85, inferred 0, derived 1; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/715836842 historic=yes Q3378231 46 m from ledger point
- origin moved 46 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":244,"medianInside":0,"medianOutside":19.4}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8347/-1.61245) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q22975759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 85 elements); data/traces/battery-du-roc-q22975759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
