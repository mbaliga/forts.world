# Palazzo Visconti di Modrone

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-visconti-di-modrone-q3891095` |
| Coordinates | 45.46635, 9.19947 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.46635/9.19947)) |
| Wikidata | [Q3891095](https://www.wikidata.org/wiki/Q3891095) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|Palazzo |
| Administrative area | Milan |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 4, road 327, building 142, wall 14, water 2, waterway 1, zone 3).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 56, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6647477 historic=castle Q3891095 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 142 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 327 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.46635/9.19947) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|Palazzo; sitelinks=3; wikidata:Q3891095 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/palazzo-visconti-di-modrone-q3891095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
