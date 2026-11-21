# Fort Knox

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-knox-q4492003` |
| Coordinates | 44.56619, -68.80242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.56619/-68.80242)) |
| Wikidata | [Q4492003](https://www.wikidata.org/wiki/Q4492003) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Prospect |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, marker 3, road 39, retaining-wall 6, building 10, waterway 1, wall 12).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 8, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12951351 historic=fort 38 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 46 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.56619/-68.80242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q4492003 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/fort-knox-q4492003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
