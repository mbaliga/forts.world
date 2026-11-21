# Fortress Gripe

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-gripe-q15013540` |
| Coordinates | 43.50861, 16.44722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.50861/16.44722)) |
| Wikidata | [Q15013540](https://www.wikidata.org/wiki/Q15013540) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Split |
| Inception | 1700 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 1, building 358, road 166, zone 7, wall 2, retaining-wall 8, cliff 2).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 22, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/142932112 historic=castle Q15013540 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 358 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 166 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.50861/16.44722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=5; wikidata:Q15013540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/fortress-gripe-q15013540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
