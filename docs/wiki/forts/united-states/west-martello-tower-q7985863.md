# West Martello Tower

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `west-martello-tower-q7985863` |
| Coordinates | 24.54694, -81.78611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.54694/-81.78611)) |
| Wikidata | [Q7985863](https://www.wikidata.org/wiki/Q7985863) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | Florida |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 82 elements (road 50, building 24, wall 3, waterway 1, zone 1, coastline 2, water 1).

Evidence: documented 0, mapped 82, inferred 0, derived 1; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":221,"medianInside":1.5,"medianOutside":0.7}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.54694/-81.78611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=2; wikidata:Q7985863 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 82 elements); data/traces/west-martello-tower-q7985863.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
