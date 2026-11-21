# Skarkos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skarkos-q1495996` |
| Coordinates | 36.73158, 25.28308 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.73158/25.28308)) |
| Wikidata | [Q1495996](https://www.wikidata.org/wiki/Q1495996) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|archaeological site |
| Administrative area | Ios Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 10 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `website` | https://www.thebestinheritage.com/presentations/2009/xxi-ephorate-of-prehistoric-and-clasical-antiquites-of-the-hellenic-ministry-of-culture-and-tourism,30.html |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, road 24, building 49, wall 297, waterway 3).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 0, inferred 0, unknown 346.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11065407 historic=archaeological_site Q1495996 8 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.73158/25.28308) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|archaeological site; sitelinks=10; wikidata:Q1495996 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/skarkos-q1495996.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
