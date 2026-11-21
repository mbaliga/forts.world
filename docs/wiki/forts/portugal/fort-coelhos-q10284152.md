# Fort Coelhos

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-coelhos-q10284152` |
| Coordinates | 38.64417, -27.1075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.64417/-27.1075)) |
| Wikidata | [Q10284152](https://www.wikidata.org/wiki/Q10284152) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 48 elements (road 15, coastline 1, building 27, retaining-wall 2, zone 2, water 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":242,"medianInside":0,"medianOutside":9.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.64417/-27.1075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q10284152 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 48 elements); data/traces/fort-coelhos-q10284152.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
