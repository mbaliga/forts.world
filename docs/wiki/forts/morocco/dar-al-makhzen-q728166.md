# Dar al-Makhzen

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dar-al-makhzen-q728166` |
| Coordinates | 34.00104, -6.84079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.00104/-6.84079)) |
| Wikidata | [Q728166](https://www.wikidata.org/wiki/Q728166) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace |
| Administrative area | Rabat |
| Inception | 1864 |
| Designations | Moroccan cultural heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, road 241, building 148, wall 16, zone 38, retaining-wall 2).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 36, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1383706700 historic=castle Q728166 71 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 148 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 241 mapped (trace size budget); minor lanes are not drawn
- origin moved 81 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.00104/-6.84079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace; sitelinks=11; wikidata:Q728166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/dar-al-makhzen-q728166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
