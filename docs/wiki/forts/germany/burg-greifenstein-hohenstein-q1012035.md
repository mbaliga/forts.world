# Burg Greifenstein (Hohenstein)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-greifenstein-hohenstein-q1012035` |
| Coordinates | 50.1947, 8.05688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1947/8.05688)) |
| Wikidata | [Q1012035](https://www.wikidata.org/wiki/Q1012035) (CC0) |
| Wikidata class | castle |
| Types | archaeological site\|deserted castle site |
| Administrative area | Burg-Hohenstein |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://hohenstein-hessen.de/tourismus/sehenswuerdigkeiten/burg-hohenstein/ |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, road 31, waterway 1, zone 1, building 70, cliff 2).

Evidence: documented 0, mapped 107, inferred 0, derived 0; heights documented 0, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97583757 historic=castle Q1012447 66 m from ledger point
- origin moved 64 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1947/8.05688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; archaeological site\|deserted castle site; sitelinks=2; wikidata:Q1012035 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/burg-greifenstein-hohenstein-q1012035.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
