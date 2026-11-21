# Kojōyama Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kojoyama-castle-q11625281` |
| Coordinates | 33.51569, 135.82908 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.51569/135.82908)) |
| Wikidata | [Q11625281](https://www.wikidata.org/wiki/Q11625281) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kushimoto |
| Inception | 1581 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 81 elements (marker 1, road 13, coastline 2, building 63, water 2).

Evidence: documented 0, mapped 81, inferred 0, derived 2; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":21,"medianInside":0.6,"medianOutside":17.5}
- sea-1: DEM check ok {"cells":2,"medianInside":3.5,"medianOutside":14.6}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.51569/135.82908) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11625281 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 81 elements); data/traces/kojoyama-castle-q11625281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
