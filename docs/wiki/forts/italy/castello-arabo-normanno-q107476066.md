# Castello Arabo Normanno

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-arabo-normanno-q107476066` |
| Coordinates | 38.03058, 12.88169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.03058/12.88169)) |
| Wikidata | [Q107476066](https://www.wikidata.org/wiki/Q107476066) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Castellammare del Golfo |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 85 elements (outline 1, road 36, coastline 1, building 40, retaining-wall 5, wall 1, water 1).

Evidence: documented 0, mapped 85, inferred 0, derived 1; heights documented 1, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106750131 historic=castle Q107476066 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":307,"medianInside":0,"medianOutside":0.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.03058/12.88169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q107476066 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 85 elements); data/traces/castello-arabo-normanno-q107476066.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
