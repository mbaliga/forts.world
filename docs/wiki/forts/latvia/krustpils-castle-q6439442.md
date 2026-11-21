# Krustpils Castle

> Latvia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `krustpils-castle-q6439442` |
| Coordinates | 56.51111, 25.85917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.51111/25.85917)) |
| Wikidata | [Q6439442](https://www.wikidata.org/wiki/Q6439442) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Jēkabpils |
| Designations | archaeological monument of state importance in Latvia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | yes |
| OSM `website` | http://jekabpilsmuzejs.lv/lv/krustpils-pils-192461 |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 2, road 57, waterway 9, water 2, building 35, wall 2, zone 44, retaining-wall 2).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10961004 historic=castle Q6439442 17 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.51111/25.85917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q6439442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/krustpils-castle-q6439442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/latvia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
