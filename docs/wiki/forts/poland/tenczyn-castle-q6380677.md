# Tenczyn Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tenczyn-castle-q6380677` |
| Coordinates | 50.10224, 19.58184 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.10224/19.58184)) |
| Wikidata | [Q6380677](https://www.wikidata.org/wiki/Q6380677) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rudno |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://zamki.res.pl/rudno.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 84 elements (outline 1, road 45, zone 6, cliff 3, building 26, wall 3).

Evidence: documented 0, mapped 84, inferred 0, derived 0; heights documented 6, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/661329738 historic=castle Q6380677 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.10224/19.58184) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q6380677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 84 elements); data/traces/tenczyn-castle-q6380677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
