# Cardiff town walls

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cardiff-town-walls-q5038498` |
| Coordinates | 51.4833, -3.18084 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4833/-3.18084)) |
| Wikidata | [Q5038498](https://www.wikidata.org/wiki/Q5038498) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Castle |
| Inception | 1111 |
| Designations | National Monument of Wales |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 6, road 503, water 8, building 208, waterway 17, zone 50, retaining-wall 5, wall 36).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 12, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1093259587 historic=castle Q1035742 107 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 208 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 503 mapped (trace size budget); minor lanes are not drawn
- origin moved 106 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4833/-3.18084) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q5038498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/cardiff-town-walls-q5038498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
