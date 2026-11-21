# Eiringsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eiringsburg-q1310634` |
| Coordinates | 50.1725, 10.0692 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1725/10.0692)) |
| Wikidata | [Q1310634](https://www.wikidata.org/wiki/Q1310634) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|circular rampart |
| Administrative area | Bad Kissingen |
| Designations | archaeological heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ringfort |
| OSM `heritage` | no |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 14, waterway 2, zone 3).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/386359902 historic=archaeological_site Q1310634 13 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1725/10.0692) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|circular rampart; sitelinks=2; wikidata:Q1310634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/eiringsburg-q1310634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
