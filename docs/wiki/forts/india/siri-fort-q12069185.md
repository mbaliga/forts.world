# Siri Fort

> India · South Delhi district · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `siri-fort-q12069185` |
| Coordinates | 28.5524, 77.2235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.5524/77.2235)) |
| Wikidata | [Q12069185](https://www.wikidata.org/wiki/Q12069185) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | South Delhi district |
| Inception | 1303 |
| Designations | Monument of National Importance |
| Wikipedia language editions | 11 |
| Programme catalogue | confidence high, significance rank 345; sources wikidata:Q12069185;smith-newton:r3678 |

## What the model contains

Tier **T1**, status `location-only`, 10 elements (marker 1, wall 1, road 6, building 2).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.5524/77.2235) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 9/10), checked against all other batch files at push time. type=fort; confidence=high; rank=345; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/siri-fort-q12069185.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 800 m radius (864 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 10 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
