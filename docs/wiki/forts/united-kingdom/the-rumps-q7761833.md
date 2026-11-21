# The Rumps

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `the-rumps-q7761833` |
| Coordinates | 50.59279, -4.92038 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.59279/-4.92038)) |
| Wikidata | [Q7761833](https://www.wikidata.org/wiki/Q7761833) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | St Minver Highlands |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, coastline 5, road 18, zone 14, wall 1, cliff 4, water 2).

Evidence: documented 0, mapped 45, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1078274033 historic=archaeological_site 71 m from ledger point
- island ring (1284 m2) cut out of sea-0
- origin moved 72 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1518,"medianInside":-3.3,"medianOutside":-2.8}
- sea-1: DEM check ok {"cells":1031,"medianInside":-3.4,"medianOutside":38.1}
- 3892 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.59279/-4.92038) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=4; wikidata:Q7761833 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/the-rumps-q7761833.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
