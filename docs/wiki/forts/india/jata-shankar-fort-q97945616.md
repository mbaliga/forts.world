# Jata Shankar Fort

> India · Damoh district · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jata-shankar-fort-q97945616` |
| Coordinates | 23.823056, 79.449167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.823056/79.449167)) |
| Wikidata | [Q97945616](https://www.wikidata.org/wiki/Q97945616) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Damoh district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence high, significance rank 832; sources wikidata:Q97945616;smith-newton:r1385 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (road 20).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.823056/79.449167) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 6/10), checked against all other batch files at push time. type=fort; confidence=high; rank=832; sources=2 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 21 elements); data/traces/jata-shankar-fort-q97945616.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 800 m radius (190 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 20 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
