# Sarny Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sarny-palace-q30049512` |
| Coordinates | 50.54625, 16.46261 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.54625/16.46261)) |
| Wikidata | [Q30049512](https://www.wikidata.org/wiki/Q30049512) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|dwór |
| Inception | 1700 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://zameksarny.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, marker 1, road 41, waterway 12, building 40, zone 6, wall 3).

Evidence: documented 0, mapped 104, inferred 0, derived 0; heights documented 18, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220822560 historic=castle Q30049512 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.54625/16.46261) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|dwór; sitelinks=1; wikidata:Q30049512 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/sarny-palace-q30049512.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
