# Karim Khan Citadel

> Iran · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karim-khan-citadel-q206220` |
| Coordinates | 29.6174, 52.5446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/29.6174/52.5446)) |
| Wikidata | [Q206220](https://www.wikidata.org/wiki/Q206220) (CC0) |
| Wikidata class | fort |
| Types | citadel\|cultural property\|architectural landmark |
| Administrative area | Fars Province |
| Designations | Tentative World Heritage Site\|Iranian National Heritage |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, marker 1, road 130, wall 192, building 406, water 1, waterway 1, zone 20).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1082541 historic=castle Q206220 24 m from ledger point
- pruned to the outline plus 80 m: 752 -> 203 elements
- origin moved 23 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/29.6174/52.5446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|cultural property\|architectural landmark; sitelinks=22; wikidata:Q206220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/karim-khan-citadel-q206220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/iran.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
