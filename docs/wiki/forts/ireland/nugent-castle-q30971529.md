# Nugent Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nugent-castle-q30971529` |
| Coordinates | 53.6112, -7.0936 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.6112/-7.0936)) |
| Wikidata | [Q30971529](https://www.wikidata.org/wiki/Q30971529) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Castletowndelvin |
| Designations | national monument of Ireland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, road 38, wall 14, building 129, zone 18).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 40, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207970289 historic=castle Q30971529 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.6112/-7.0936) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=4; wikidata:Q30971529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/nugent-castle-q30971529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
