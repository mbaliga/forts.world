# Dunvegan Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunvegan-castle-q1266330` |
| Coordinates | 57.4485, -6.59004 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.4485/-6.59004)) |
| Wikidata | [Q1266330](https://www.wikidata.org/wiki/Q1266330) (CC0) |
| Wikidata class | castle |
| Types | castle\|country house |
| Administrative area | Highland |
| Inception | 1220 |
| Designations | category A listed building\|category B listed building |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.dunvegancastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, coastline 3, road 114, building 7, zone 15, waterway 15, wall 17, cliff 4, water 3).

Evidence: documented 0, mapped 179, inferred 0, derived 1; heights documented 3, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124283879 historic=castle Q1266330 13 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":572,"medianInside":23,"medianOutside":16.7}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.4485/-6.59004) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|country house; sitelinks=22; wikidata:Q1266330 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 179 elements); data/traces/dunvegan-castle-q1266330.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
