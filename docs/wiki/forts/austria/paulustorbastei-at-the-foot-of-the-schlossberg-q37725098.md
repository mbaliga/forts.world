# Paulustorbastei at the foot of the Schlossberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paulustorbastei-at-the-foot-of-the-schlossberg-q37725098` |
| Coordinates | 47.07654, 15.44049 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.07654/15.44049)) |
| Wikidata | [Q37725098](https://www.wikidata.org/wiki/Q37725098) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Graz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Der Bau dieser gewaltigen Bastei mit mehr als 20 m hohen und bis zu 6 m starken Stützmauern begann 1544 und ersetzte ein an gleiche Stelle stehendes Vorwerk der mittelalterlichen Burg. Auf ihr standen Stallungen, die der Bastei ihren Namen gaben. Die hölz |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 23, road 550, building 83, waterway 30, retaining-wall 75, zone 42, wall 13, cliff 41).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 36, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83276833 historic=castle Q37724352 331 m from ledger point
- pruned to the outline plus 150 m: 858 -> 519 elements
- roads capped: kept the 80 longest of 329 mapped (trace size budget); minor lanes are not drawn
- origin moved 332 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.07654/15.44049) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=1; wikidata:Q37725098 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/paulustorbastei-at-the-foot-of-the-schlossberg-q37725098.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
