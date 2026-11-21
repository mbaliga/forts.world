# Storgosia

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `storgosia-q743271` |
| Coordinates | 43.38367, 24.62696 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.38367/24.62696)) |
| Wikidata | [Q743271](https://www.wikidata.org/wiki/Q743271) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fortress\|ancient city |
| Administrative area | Pleven |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |
| OSM `ruins` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, marker 1, road 57, water 2, zone 2, waterway 3, cliff 2, building 11, wall 12).

Evidence: documented 0, mapped 91, inferred 0, derived 0; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117948219 historic=ruins Q743271 121 m from ledger point
- origin moved 121 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.38367/24.62696) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fortress\|ancient city; sitelinks=7; wikidata:Q743271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/storgosia-q743271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
