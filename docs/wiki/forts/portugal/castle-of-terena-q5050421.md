# Castle of Terena

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-terena-q5050421` |
| Coordinates | 38.62167, -7.40722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.62167/-7.40722)) |
| Wikidata | [Q5050421](https://www.wikidata.org/wiki/Q5050421) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Terena |
| Inception | 1262 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 161 elements (outline 1, marker 1, road 44, wall 3, building 110, zone 2).

Evidence: documented 0, mapped 161, inferred 0, derived 0; heights documented 0, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/488102694 historic=castle Q5050421 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 42 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.62167/-7.40722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q5050421 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 161 elements); data/traces/castle-of-terena-q5050421.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
