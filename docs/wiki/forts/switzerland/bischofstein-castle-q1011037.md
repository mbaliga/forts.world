# Bischofstein Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bischofstein-castle-q1011037` |
| Coordinates | 47.47464, 7.82705 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.47464/7.82705)) |
| Wikidata | [Q1011037](https://www.wikidata.org/wiki/Q1011037) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|ridge castle\|castle ruin |
| Administrative area | Sissach |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, marker 1, road 21, wall 9, cliff 4).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33054997 historic=castle Q1011037 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.47464/7.82705) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|ridge castle\|castle ruin; sitelinks=4; wikidata:Q1011037 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/bischofstein-castle-q1011037.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
