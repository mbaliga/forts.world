# Tour des Bouchers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-des-bouchers-q1780706` |
| Coordinates | 48.9742, 8.17705 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9742/8.17705)) |
| Wikidata | [Q1780706](https://www.wikidata.org/wiki/Q1780706) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lauterbourg |
| Inception | 1300 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 5, road 84, zone 3, building 324, retaining-wall 3, wall 3, cliff 2).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 11, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164846286 historic=yes Q1780706 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 324 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9742/8.17705) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q1780706 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/tour-des-bouchers-q1780706.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
