# Jalore Fort

> India · Jalore district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jalore-fort-q98915208` |
| Coordinates | 25.336944, 72.616111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.336944/72.616111)) |
| Wikidata | [Q98915208](https://www.wikidata.org/wiki/Q98915208) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Jalore district |
| Designations | State Protected Monument |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence high, significance rank 830; sources wikidata:Q98915208;smith-newton:r248 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, wall 1, road 10, building 3).

Evidence: documented 0, mapped 15, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/535952432 historic=castle 18 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.336944/72.616111) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

Alpha-J batch (2026-11-14): 10 forts across A-Z starting at J, work order 1/10; distinct from batch 0 and every other alpha set. type=fort; confidence=high; rank=830; sources=2 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/jalore-fort-q98915208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
