# Palazzo Caetani

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-caetani-q3889745` |
| Coordinates | 41.59179, 12.82954 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.59179/12.82954)) |
| Wikidata | [Q3889745](https://www.wikidata.org/wiki/Q3889745) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|Palazzo |
| Administrative area | Cisterna di Latina |
| Inception | 1560 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, road 120, building 126, zone 2, waterway 1, wall 5).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 9, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/475867621 historic=castle Q3889745 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.59179/12.82954) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|Palazzo; sitelinks=3; wikidata:Q3889745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/palazzo-caetani-q3889745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
