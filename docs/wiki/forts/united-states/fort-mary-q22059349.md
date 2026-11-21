# Fort Mary

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mary-q22059349` |
| Coordinates | 43.4479, -70.3571 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4479/-70.3571)) |
| Wikidata | [Q22059349](https://www.wikidata.org/wiki/Q22059349) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Maine |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 45 elements (marker 1, road 18, waterway 4, zone 6, coastline 4, building 7, retaining-wall 2, water 3).

Evidence: documented 0, mapped 45, inferred 0, derived 3; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":260,"medianInside":1.1,"medianOutside":4.4}
- sea-1: DEM check ok {"cells":377,"medianInside":1.9,"medianOutside":2.3}
- sea-2: DEM check ok {"cells":2,"medianInside":1.5,"medianOutside":2}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4479/-70.3571) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22059349 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/fort-mary-q22059349.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
