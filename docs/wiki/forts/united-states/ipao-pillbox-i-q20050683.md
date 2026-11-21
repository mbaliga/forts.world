# Ipao Pillbox I

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ipao-pillbox-i-q20050683` |
| Coordinates | 13.5061, 144.784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.5061/144.784)) |
| Wikidata | [Q20050683](https://www.wikidata.org/wiki/Q20050683) (CC0) |
| Wikidata class | fortification |
| Types | pillbox |
| Administrative area | Guam |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 23 elements (road 12, building 9, coastline 1, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 1, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":19,"medianInside":5.8,"medianOutside":24.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.5061/144.784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; pillbox; sitelinks=3; wikidata:Q20050683 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/ipao-pillbox-i-q20050683.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
