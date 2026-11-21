# Coast Defence Battery No. 4

> Estonia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coast-defence-battery-no-4-q20529172` |
| Coordinates | 59.46038, 24.57053 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.46038/24.57053)) |
| Wikidata | [Q20529172](https://www.wikidata.org/wiki/Q20529172) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Tallinn |
| Designations | architectural monument |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 122 elements (building 48, coastline 2, road 44, cliff 3, zone 24, water 1).

Evidence: documented 0, mapped 122, inferred 0, derived 1; heights documented 24, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":200,"medianInside":3.4,"medianOutside":12.7}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.46038/24.57053) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=1; wikidata:Q20529172 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 122 elements); data/traces/coast-defence-battery-no-4-q20529172.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
