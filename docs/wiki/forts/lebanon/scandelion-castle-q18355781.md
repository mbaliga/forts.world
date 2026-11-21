# Scandelion Castle

> Lebanon · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `scandelion-castle-q18355781` |
| Coordinates | 33.1558, 35.1639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.1558/35.1639)) |
| Wikidata | [Q18355781](https://www.wikidata.org/wiki/Q18355781) (CC0) |
| Wikidata class | castle |
| Types | crusader castle |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 11 elements (road 6, retaining-wall 1, building 2, coastline 1, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":76,"medianInside":1.5,"medianOutside":10.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.1558/35.1639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; crusader castle; sitelinks=4; wikidata:Q18355781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 11 elements); data/traces/scandelion-castle-q18355781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lebanon.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
