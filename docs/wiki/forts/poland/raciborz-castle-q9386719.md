# Racibórz Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `raciborz-castle-q9386719` |
| Coordinates | 50.0961, 18.2206 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0961/18.2206)) |
| Wikidata | [Q9386719](https://www.wikidata.org/wiki/Q9386719) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Racibórz |
| Inception | 1300 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.zamekpiastowski.pl/site/start.html |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 2, road 202, zone 19, water 1, wall 2, building 105, waterway 2).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 27, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1334316727 historic=castle Q9386719 41 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0961/18.2206) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=7; wikidata:Q9386719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/raciborz-castle-q9386719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
