# Dindigul

> India · Tamil Nadu · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dindigul` |
| Coordinates | 10.360556, 77.963056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.360556/77.963056)) |
| Wikidata | [Q3534110](https://www.wikidata.org/wiki/Q3534110) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Dindigul |
| Inception | 1605 |
| Designations | Monument of National Importance |
| Wikipedia language editions | 8 |
| Programme catalogue | confidence high, significance rank 235; sources catalogue:dindigul;wikidata:Q3534110;smith-newton:r136 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, marker 2, road 41, zone 11, wall 1, water 7, building 3, cliff 2).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/555498571 historic=castle Q3534110 21 m from ledger point
- origin moved 31 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.360556/77.963056) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/dindigul-pass.md](../../../research/dindigul-pass.md)

## Ledger note

Alpha-D batch (2026-11-14): 10 forts spread across A-Z starting at D (batch-alpha-D.csv). coords from wikidata (was 10.363,77.963). Research pass 1 done: docs/research/dindigul-pass.md. Blocked on geometry (requested) and a plan; rock height conflicts (270 m vs 280 ft), no elevations drawn. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/dindigul.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
