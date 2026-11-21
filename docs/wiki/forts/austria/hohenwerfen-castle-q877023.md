# Hohenwerfen Castle

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hohenwerfen-castle-q877023` |
| Coordinates | 47.48292, 13.18851 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.48292/13.18851)) |
| Wikidata | [Q877023](https://www.wikidata.org/wiki/Q877023) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|fortress |
| Administrative area | Werfen |
| Inception | 1075 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, road 37, waterway 1, wall 13, building 21, zone 19, cliff 5).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 0, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1324604 historic=castle Q877023 27 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.48292/13.18851) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|fortress; sitelinks=26; wikidata:Q877023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/hohenwerfen-castle-q877023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
