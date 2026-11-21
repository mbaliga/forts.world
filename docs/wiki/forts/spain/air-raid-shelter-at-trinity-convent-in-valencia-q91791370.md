# Air raid shelter at Trinity Convent in Valencia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `air-raid-shelter-at-trinity-convent-in-valencia-q91791370` |
| Coordinates | 39.4803, -0.3722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.4803/-0.3722)) |
| Wikidata | [Q91791370](https://www.wikidata.org/wiki/Q91791370) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | La Saïdia |
| Designations | Property of Local Relevance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 3, road 200, building 337, zone 6, wall 43, water 3, retaining-wall 1).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 38, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11270791 historic=castle 500 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 493 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.4803/-0.3722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q91791370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/air-raid-shelter-at-trinity-convent-in-valencia-q91791370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
