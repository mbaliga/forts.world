# Pathri Fort

> India · Parbhani district · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pathri-fort-q97142894` |
| Coordinates | 19.251111, 76.421389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.251111/76.421389)) |
| Wikidata | [Q97142894](https://www.wikidata.org/wiki/Q97142894) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Parbhani district |
| Designations | State Protected Monument |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence high, significance rank 867; sources wikidata:Q97142894;smith-newton:r2018 |

## What the model contains

Tier **T1**, status `location-only`, 3 elements (road 3).

Evidence: documented 0, mapped 3, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.251111/76.421389) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-O batch (2026-11-14): 10 forts across A-Z starting at O (O has no free fort, so work order starts at P), work order 1/10; distinct from batch 0 and every other alpha set. type=fort; confidence=high; rank=867; sources=2 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 3 elements); data/traces/pathri-fort-q97142894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 700 m radius (11 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 3 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
