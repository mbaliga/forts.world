# Qal’at al Bahrain

> Bahrain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qal-at-al-bahrain-q740104` |
| Coordinates | 26.23303, 50.52091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.23303/50.52091)) |
| Wikidata | [Q740104](https://www.wikidata.org/wiki/Q740104) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|archaeological site\|cultural heritage |
| Administrative area | Manama |
| Designations | Heritage of Portuguese Influence\|World Heritage Site |
| UNESCO WHC id | 1192 |
| Wikipedia language editions | 50 |
| OSM `historic` | castle |
| OSM `fortification_type` | hill_fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, marker 2, road 46, wall 1, coastline 1, building 4, retaining-wall 1, zone 2, water 3).

Evidence: documented 0, mapped 62, inferred 0, derived 3; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89370342 historic=castle 96 m from ledger point
- origin moved 96 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":45,"medianInside":1.2,"medianOutside":7}
- sea-1: DEM check ok {"cells":1,"medianInside":2.6,"medianOutside":6.7}
- sea-2: DEM check ok {"cells":2,"medianInside":2.9,"medianOutside":6.8}
- 32 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.23303/50.52091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|archaeological site\|cultural heritage; sitelinks=50; wikidata:Q740104 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/qal-at-al-bahrain-q740104.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bahrain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
