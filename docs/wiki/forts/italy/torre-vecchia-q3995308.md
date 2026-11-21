# Torre Vecchia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-vecchia-q3995308` |
| Coordinates | 43.43067, 9.89305 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.43067/9.89305)) |
| Wikidata | [Q3995308](https://www.wikidata.org/wiki/Q3995308) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Livorno |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, coastline 1, road 3, building 1, waterway 1, zone 9, cliff 1, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/443678834 historic=castle 8 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":17,"medianInside":0.1,"medianOutside":162.8}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.43067/9.89305) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=3; wikidata:Q3995308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/torre-vecchia-q3995308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
