# Dunyvaig Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunyvaig-castle-q1266322` |
| Coordinates | 55.6336, -6.12306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6336/-6.12306)) |
| Wikidata | [Q1266322](https://www.wikidata.org/wiki/Q1266322) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, building 10, road 3, waterway 1, wall 2, coastline 4, cliff 1, retaining-wall 1, water 2).

Evidence: documented 0, mapped 25, inferred 0, derived 2; heights documented 6, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/355385332 historic=castle Q1266322 5 m from ledger point
- island ring (1809 m2) cut out of sea-0
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1561,"medianInside":6,"medianOutside":7.4}
- sea-1: DEM check failed {"cells":1216,"medianInside":13,"medianOutside":3.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6336/-6.12306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1266322 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/dunyvaig-castle-q1266322.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
