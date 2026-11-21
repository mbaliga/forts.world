# Te Ika-a-maru Pā

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `te-ika-a-maru-pa-q79307811` |
| Coordinates | -41.24772, 174.66431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-41.24772/174.66431)) |
| Wikidata | [Q79307811](https://www.wikidata.org/wiki/Q79307811) (CC0) |
| Wikidata class | fortification |
| Types | pā |
| Administrative area | Wellington Region |
| Designations | Heritage New Zealand Category 2 historic place listing |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 7 elements (marker 1, cliff 1, road 3, coastline 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":27,"medianInside":4,"medianOutside":21.1}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-41.24772/174.66431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; pā; sitelinks=0; wikidata:Q79307811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/te-ika-a-maru-pa-q79307811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
