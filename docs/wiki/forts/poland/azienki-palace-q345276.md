# Łazienki Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `azienki-palace-q345276` |
| Coordinates | 52.21506, 21.03581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.21506/21.03581)) |
| Wikidata | [Q345276](https://www.wikidata.org/wiki/Q345276) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum\|architectural heritage monument |
| Administrative area | Śródmieście |
| Inception | 1689 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.lazienki-krolewskie.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 9, water 4, road 226, building 32, waterway 8, retaining-wall 5, wall 90, zone 103).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 7, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1325609735 historic=castle Q345276 1 m from ledger point
- pruned to the outline plus 150 m: 478 -> 365 elements
- roads capped: kept the 80 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.21506/21.03581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum\|architectural heritage monument; sitelinks=26; wikidata:Q345276 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/azienki-palace-q345276.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
