# Mirjan

> India · Karnataka · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mirjan` |
| Coordinates | 14.4893, 74.4177 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.4893/74.4177)) |
| Programme catalogue | confidence medium, significance rank 266; sources catalogue:mirjan;wikidata:Q6873592 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, waterway 5, road 19, wall 5, water 1).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/394975110 historic=fort 13 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.4893/74.4177) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Research notes

- [docs/research/mirjan-mapped-fort-pass.md](../../../research/mirjan-mapped-fort-pass.md)

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/mirjan.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
