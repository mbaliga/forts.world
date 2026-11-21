# Fortino di Frontone

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortino-di-frontone-q113584057` |
| Coordinates | 40.90865, 12.96588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.90865/12.96588)) |
| Wikidata | [Q113584057](https://www.wikidata.org/wiki/Q113584057) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ponza |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 16 elements (marker 1, road 6, coastline 1, building 7, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":223,"medianInside":0,"medianOutside":35.5}
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.90865/12.96588) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q113584057 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 16 elements); data/traces/fortino-di-frontone-q113584057.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
