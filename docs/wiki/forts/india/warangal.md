# Warangal Fort

> India · Telangana · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warangal` |
| Coordinates | 17.957, 79.613 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.957/79.613)) |
| Programme catalogue | confidence high, significance rank 228; sources catalogue:warangal;wikidata:Q7968796;smith-newton:r66 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 8, retaining-wall 1, wall 10, road 211, water 2, zone 15, building 1464).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280178528 historic=castle 247 m from ledger point
- pruned to the outline plus 30 m: 1712 -> 707 elements
- present-day buildings capped: kept the 120 nearest the outline centre of 602 mapped (trace size budget); the rest of the town is not drawn
- origin moved 259 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.957/79.613) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

Alpha-K batch (2026-11-11): 10 forts spread across A-Z starting at K, distinct from batch 0; do after batch 0. Auto-T1 built 2026-11-15 from OSM+Terrarium (data/traces/warangal.trace.json). window/pruning set by build-options (inner wall ring, 120 nearest buildings of 602); outer 2.3 km ring mostly outside window. T2 needs plans/surveys/photos; none researched yet. docs/research/alpha-K-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
