# Dorneck Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dorneck-castle-q2175245` |
| Coordinates | 47.47999, 7.62808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.47999/7.62808)) |
| Wikidata | [Q2175245](https://www.wikidata.org/wiki/Q2175245) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Dornach |
| Inception | 1050 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, road 38, building 23, zone 4, cliff 1, wall 23).

Evidence: documented 0, mapped 90, inferred 0, derived 0; heights documented 0, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112245481 historic=castle Q2175245 10 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.47999/7.62808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=6; wikidata:Q2175245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/dorneck-castle-q2175245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
