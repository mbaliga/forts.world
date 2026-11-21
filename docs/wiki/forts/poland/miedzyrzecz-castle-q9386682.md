# Międzyrzecz Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `miedzyrzecz-castle-q9386682` |
| Coordinates | 52.4451, 15.57225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4451/15.57225)) |
| Wikidata | [Q9386682](https://www.wikidata.org/wiki/Q9386682) (CC0) |
| Wikidata class | castle |
| Types | castle\|Historical monument of Poland |
| Administrative area | Międzyrzecz |
| Designations | immovable monument in Poland\|Historical monument of Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, marker 9, waterway 12, road 117, building 44, water 3, wall 2, zone 11).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 13, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14923926 historic=castle Q9386682 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4451/15.57225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Historical monument of Poland; sitelinks=5; wikidata:Q9386682 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/miedzyrzecz-castle-q9386682.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
