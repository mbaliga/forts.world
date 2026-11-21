# Terrace Sets

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terrace-sets-q96327560` |
| Coordinates | -41.09283, 174.84833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-41.09283/174.84833)) |
| Wikidata | [Q96327560](https://www.wikidata.org/wiki/Q96327560) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Porirua City |
| Designations | Heritage New Zealand Category 2 historic place listing |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (road 3, cliff 1, zone 1, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 1, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":14,"medianInside":2.2,"medianOutside":49.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-41.09283/174.84833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=0; wikidata:Q96327560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/terrace-sets-q96327560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
