# Rabsztyn Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rabsztyn-castle-q9386720` |
| Coordinates | 50.3008, 19.5942 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3008/19.5942)) |
| Wikidata | [Q9386720](https://www.wikidata.org/wiki/Q9386720) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rabsztyn |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, marker 1, road 50, building 30, zone 7, wall 1).

Evidence: documented 0, mapped 90, inferred 0, derived 0; heights documented 2, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150068559 historic=castle Q9386720 177 m from ledger point
- origin moved 176 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3008/19.5942) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q9386720 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/rabsztyn-castle-q9386720.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
