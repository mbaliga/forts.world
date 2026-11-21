# Fort Anjediva

> India · Karwar · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-anjediva-q5470736` |
| Coordinates | 14.7864, 74.12 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.7864/74.12)) |
| Wikidata | [Q5470736](https://www.wikidata.org/wiki/Q5470736) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Karwar |
| Inception | 1505 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence high, significance rank 3263; sources wikidata:Q5470736;smith-newton:r243 |

## What the model contains

Tier **T1**, status `location-only`, 10 elements (road 7, zone 1, coastline 1, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":21,"medianInside":-0.9,"medianOutside":3.1}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.7864/74.12) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

type=fort; confidence=high; rank=3263; sources=2 Alpha-H batch (2026-11-14): 10 forts spread across A-Z starting at H, distinct from batch 0 and every other alpha batch. \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/fort-anjediva-q5470736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 500 m radius (14 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 10 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
