# Palazzo Eccheli-Baisi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-eccheli-baisi-q66058158` |
| Coordinates | 45.81666, 10.95418 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.81666/10.95418)) |
| Wikidata | [Q66058158](https://www.wikidata.org/wiki/Q66058158) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Brentonico |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 1, road 168, waterway 1, building 186, wall 53, zone 115, retaining-wall 55, cliff 1).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 1, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1319431928 historic=castle Q66058158 2 m from ledger point
- pruned to the outline plus 150 m: 581 -> 404 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 148 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 119 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.81666/10.95418) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q66058158 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/palazzo-eccheli-baisi-q66058158.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
