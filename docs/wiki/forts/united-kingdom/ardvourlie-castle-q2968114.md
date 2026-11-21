# Ardvourlie Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ardvourlie-castle-q2968114` |
| Coordinates | 57.9948, -6.75815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.9948/-6.75815)) |
| Wikidata | [Q2968114](https://www.wikidata.org/wiki/Q2968114) (CC0) |
| Wikidata class | castle |
| Types | castle\|country house |
| Administrative area | Outer Hebrides |
| Designations | category B listed building |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, coastline 1, zone 7, building 4, road 16, wall 1, waterway 7, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/534824296 historic=castle Q2968114 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":99,"medianInside":74.9,"medianOutside":15.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.9948/-6.75815) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|country house; sitelinks=5; wikidata:Q2968114 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/ardvourlie-castle-q2968114.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
