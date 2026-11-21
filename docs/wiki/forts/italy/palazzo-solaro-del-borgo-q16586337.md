# Palazzo Solaro del Borgo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-solaro-del-borgo-q16586337` |
| Coordinates | 45.06746, 7.68336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.06746/7.68336)) |
| Wikidata | [Q16586337](https://www.wikidata.org/wiki/Q16586337) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Turin |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 14, road 280, building 268, zone 5, wall 1, water 2).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 8, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16695376 historic=castle Q16586337 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 268 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 280 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.06746/7.68336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q16586337 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/palazzo-solaro-del-borgo-q16586337.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
