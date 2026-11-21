# Fort Schuyler

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-schuyler-q5471994` |
| Coordinates | 40.80556, -73.79194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.80556/-73.79194)) |
| Wikidata | [Q5471994](https://www.wikidata.org/wiki/Q5471994) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | The Bronx |
| Designations | New York City Landmark\|National Register of Historic Places listed place |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 82 elements (road 31, building 20, waterway 1, coastline 5, retaining-wall 4, zone 19, water 2).

Evidence: documented 0, mapped 82, inferred 0, derived 2; heights documented 19, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":123,"medianInside":0.1,"medianOutside":3.6}
- sea-1: DEM check ok {"cells":11,"medianInside":2.8,"medianOutside":3}
- 44 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.80556/-73.79194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5471994 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 82 elements); data/traces/fort-schuyler-q5471994.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
