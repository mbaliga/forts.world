# Broch of West Burrafirth

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `broch-of-west-burrafirth-q508036` |
| Coordinates | 60.29822, -1.53845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.29822/-1.53845)) |
| Wikidata | [Q508036](https://www.wikidata.org/wiki/Q508036) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, road 2, wall 4, coastline 2, waterway 2, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19174319 historic=archaeological_site Q508036 6 m from ledger point
- island ring (1332 m2) cut out of sea-0
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":289,"medianInside":13.9,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.29822/-1.53845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=5; wikidata:Q508036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 12 elements); data/traces/broch-of-west-burrafirth-q508036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
