# Curtius Palace

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `curtius-palace-q3360847` |
| Coordinates | 50.6472, 5.58405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6472/5.58405)) |
| Wikidata | [Q3360847](https://www.wikidata.org/wiki/Q3360847) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Liège |
| Inception | 1600 |
| Designations | protected heritage property in Wallonia\|Exceptional heritage property of Wallonia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 5, road 134, building 388, zone 4, waterway 1, retaining-wall 4, wall 15).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 37, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145598106 historic=castle Q3360847 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 388 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6472/5.58405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q3360847 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/curtius-palace-q3360847.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
