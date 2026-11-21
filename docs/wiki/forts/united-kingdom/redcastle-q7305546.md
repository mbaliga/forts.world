# Redcastle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redcastle-q7305546` |
| Coordinates | 57.51346, -4.36573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.51346/-4.36573)) |
| Wikidata | [Q7305546](https://www.wikidata.org/wiki/Q7305546) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Highland |
| Designations | category B listed building |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, road 21, building 13, waterway 1, coastline 1, zone 2, water 2).

Evidence: documented 0, mapped 41, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172235571 historic=castle Q7305546 1 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":18,"medianInside":5.1,"medianOutside":18.4}
- sea-1: DEM check ok {"cells":22,"medianInside":6.7,"medianOutside":19.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.51346/-4.36573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=4; wikidata:Q7305546 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 41 elements); data/traces/redcastle-q7305546.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
