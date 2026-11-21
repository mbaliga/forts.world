# Dudelange Castle

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dudelange-castle-q5311708` |
| Coordinates | 49.4905, 6.06033 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4905/6.06033)) |
| Wikidata | [Q5311708](https://www.wikidata.org/wiki/Q5311708) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Dudelange |
| Inception | 1460 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 120 elements (outline 1, marker 3, zone 4, road 63, building 4, retaining-wall 5, wall 36, cliff 4).

Evidence: documented 0, mapped 120, inferred 0, derived 0; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/366555754 historic=castle Q3029261 18 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4905/6.06033) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=5; wikidata:Q5311708 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 120 elements); data/traces/dudelange-castle-q5311708.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
