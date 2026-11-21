# Fort Sewall

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sewall-q5472016` |
| Coordinates | 42.50856, -70.84158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.50856/-70.84158)) |
| Wikidata | [Q5472016](https://www.wikidata.org/wiki/Q5472016) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Marblehead |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 81 elements (marker 1, road 30, coastline 3, zone 4, building 40, cliff 1, water 2).

Evidence: documented 0, mapped 81, inferred 0, derived 2; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":400,"medianInside":1.9,"medianOutside":0.4}
- sea-1: DEM check ok {"cells":294,"medianInside":1.3,"medianOutside":3.1}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.50856/-70.84158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5472016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 81 elements); data/traces/fort-sewall-q5472016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
