# Schloss Dwasieden

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-dwasieden-q1478679` |
| Coordinates | 54.50478, 13.62459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.50478/13.62459)) |
| Wikidata | [Q1478679](https://www.wikidata.org/wiki/Q1478679) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|manor\|castle\|ruins\|château |
| Administrative area | Sassnitz |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `castle_type` | manor |
| OSM `ruins` | castle |
| OSM `website` | https://www.dwasieden.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 7, coastline 1, building 8, wall 1, waterway 1, cliff 2, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/511341980 historic=ruins Q1478679 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":107,"medianInside":10.9,"medianOutside":30.1}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.50478/13.62459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|manor\|castle\|ruins\|château; sitelinks=4; wikidata:Q1478679 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/schloss-dwasieden-q1478679.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
