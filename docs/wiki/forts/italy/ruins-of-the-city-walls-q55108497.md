# ruins of the city walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruins-of-the-city-walls-q55108497` |
| Coordinates | 43.78082, 7.67336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.78082/7.67336)) |
| Wikidata | [Q55108497](https://www.wikidata.org/wiki/Q55108497) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Bordighera |
| Inception | 1500 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `website` | https://www.villagarnier.it/ |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 3, road 83, building 149, retaining-wall 26, coastline 1, waterway 1, zone 2, wall 13, water 2).

Evidence: documented 0, mapped 281, inferred 0, derived 2; heights documented 39, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/201494908 historic=building Q20260518 215 m from ledger point
- origin moved 214 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":387,"medianInside":40.8,"medianOutside":0.9}
- sea-1: DEM check ok {"cells":105,"medianInside":0,"medianOutside":53}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.78082/7.67336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q55108497 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/ruins-of-the-city-walls-q55108497.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
