# Fort Porto Buso

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-porto-buso-q113381064` |
| Coordinates | 45.71551, 13.25216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.71551/13.25216)) |
| Wikidata | [Q113381064](https://www.wikidata.org/wiki/Q113381064) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Grado |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 12 elements (building 6, waterway 1, coastline 1, road 3, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 6, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":171,"medianInside":0,"medianOutside":0}
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.71551/13.25216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q113381064 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 12 elements); data/traces/fort-porto-buso-q113381064.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
