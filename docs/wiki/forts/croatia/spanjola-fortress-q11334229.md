# Španjola Fortress

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spanjola-fortress-q11334229` |
| Coordinates | 43.17475, 16.442 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.17475/16.442)) |
| Wikidata | [Q11334229](https://www.wikidata.org/wiki/Q11334229) (CC0) |
| Wikidata class | fort |
| Types | building\|fortress |
| Administrative area | Hvar |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, road 77, building 267, zone 3, wall 6, coastline 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 1, inferred 0, unknown 272.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164912693 historic=castle Q42020849 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.17475/16.442) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; building\|fortress; sitelinks=5; wikidata:Q11334229 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/spanjola-fortress-q11334229.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
