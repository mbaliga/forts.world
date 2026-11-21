# Myślewicki Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `myslewicki-palace-q651469` |
| Coordinates | 52.21551, 21.03827 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.21551/21.03827)) |
| Wikidata | [Q651469](https://www.wikidata.org/wiki/Q651469) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|no\|palace\|architectural heritage monument |
| Administrative area | Warsaw |
| Inception | 1775 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `ruins` | no |
| OSM `website` | https://www.lazienki-krolewskie.pl/pl/architektura/palac-myslewicki |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 5, road 233, water 1, building 59, retaining-wall 7, zone 123, wall 90, waterway 1).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 28, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25748436 historic=castle Q651469 2 m from ledger point
- pruned to the outline plus 150 m: 520 -> 272 elements
- roads capped: kept the 80 longest of 127 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.21551/21.03827) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|no\|palace\|architectural heritage monument; sitelinks=10; wikidata:Q651469 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/myslewicki-palace-q651469.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
