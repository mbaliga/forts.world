# Fort Provintia

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-provintia-q714431` |
| Coordinates | 22.9975, 120.20281 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.9975/120.20281)) |
| Wikidata | [Q714431](https://www.wikidata.org/wiki/Q714431) (CC0) |
| Wikidata class | fort |
| Types | building\|historic site\|fort\|architectural landmark |
| Administrative area | West Central District |
| Inception | 1653 |
| Designations | country-level monument |
| Wikipedia language editions | 15 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 2, road 136, wall 11, building 453, waterway 2, zone 6).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 2, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183052614 historic=building 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 453 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.9975/120.20281) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; building\|historic site\|fort\|architectural landmark; sitelinks=15; wikidata:Q714431 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/fort-provintia-q714431.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
