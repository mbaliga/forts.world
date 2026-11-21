# Snežnik Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sneznik-castle-q3397542` |
| Coordinates | 45.68268, 14.46917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.68268/14.46917)) |
| Wikidata | [Q3397542](https://www.wikidata.org/wiki/Q3397542) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Loška Dolina Municipality |
| Designations | monument of national significance |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.nms.si/si/nacrtujte-obisk/kje-smo/grad-sneznik |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, road 49, waterway 5, zone 21, water 1, building 17, wall 1).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 10, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19400044 historic=castle Q3397542 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.68268/14.46917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q3397542 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 95 elements); data/traces/sneznik-castle-q3397542.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
