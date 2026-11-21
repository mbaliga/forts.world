# Hajnáčka Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hajnacka-castle-q12018873` |
| Coordinates | 48.21806, 19.95528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21806/19.95528)) |
| Wikidata | [Q12018873](https://www.wikidata.org/wiki/Q12018873) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Rimavská Sobota District |
| Inception | 1300 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 74 elements (outline 1, road 20, building 41, waterway 1, cliff 8, wall 2, zone 1).

Evidence: documented 0, mapped 74, inferred 0, derived 0; heights documented 1, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/778861128 historic=castle Q12018873 32 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21806/19.95528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q12018873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 74 elements); data/traces/hajnacka-castle-q12018873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
