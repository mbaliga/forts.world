# Fatehgarh Fort

> India · Ajmer district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fatehgarh-fort-q24943841` |
| Coordinates | 26.13207, 75.02699 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.13207/75.02699)) |
| Wikidata | [Q24943841](https://www.wikidata.org/wiki/Q24943841) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ajmer district |
| Designations | State Protected Monument |
| Wikipedia language editions | 1 |
| Programme catalogue | confidence high, significance rank 687; sources wikidata:Q24943841;smith-newton:r2395 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, road 4).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/562442047 historic=castle 27 m from ledger point
- origin moved 25 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.13207/75.02699) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-X batch (2026-11-14): geometry requested. type=fort; confidence=high; rank=687; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/fatehgarh-fort-q24943841.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 600 m radius (7 elements), terrain tiles unchanged, auto-T1 rebuilt (outline-only, 5 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
