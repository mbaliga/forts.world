# Torre de los Anda

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-los-anda-q18571356` |
| Coordinates | 42.85113, -2.6729 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.85113/-2.6729)) |
| Wikidata | [Q18571356](https://www.wikidata.org/wiki/Q18571356) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|tower |
| Administrative area | Vitoria-Gasteiz |
| Inception | C15 |
| Designations | Basque government heritage site |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | La casa más antigua de Vitoria-Gasteiz |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 9, road 174, building 282, zone 18, wall 14, water 1, retaining-wall 5).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 1, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42093735 historic=castle Q18571356 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 282 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.85113/-2.6729) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|tower; sitelinks=3; wikidata:Q18571356 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/torre-de-los-anda-q18571356.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
