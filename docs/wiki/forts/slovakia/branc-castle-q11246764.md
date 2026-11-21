# Branč Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `branc-castle-q11246764` |
| Coordinates | 48.73319, 17.46719 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.73319/17.46719)) |
| Wikidata | [Q11246764](https://www.wikidata.org/wiki/Q11246764) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Podbranč |
| Inception | 1300 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, marker 2, road 25, wall 1, zone 1, building 73).

Evidence: documented 0, mapped 104, inferred 0, derived 0; heights documented 0, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35102292 historic=castle Q11246764 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.73319/17.46719) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q11246764 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/branc-castle-q11246764.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
