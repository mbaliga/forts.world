# Palazzo Roma

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-roma-q18419664` |
| Coordinates | 45.54555, 11.5442 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54555/11.5442)) |
| Wikidata | [Q18419664](https://www.wikidata.org/wiki/Q18419664) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Vicenza |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 235 elements (outline 1, road 108, waterway 3, water 2, building 608, zone 1).

Evidence: documented 0, mapped 235, inferred 0, derived 0; heights documented 5, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138894830 historic=castle Q18419664 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 608 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54555/11.5442) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q18419664 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 235 elements); data/traces/palazzo-roma-q18419664.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
