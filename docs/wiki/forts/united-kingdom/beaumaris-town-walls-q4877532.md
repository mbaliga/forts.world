# Beaumaris Town Walls

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beaumaris-town-walls-q4877532` |
| Coordinates | 53.2647, -4.09401 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.2647/-4.09401)) |
| Wikidata | [Q4877532](https://www.wikidata.org/wiki/Q4877532) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Beaumaris |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 3, road 85, zone 9, building 140, water 2, wall 10, coastline 1).

Evidence: documented 0, mapped 251, inferred 0, derived 1; heights documented 34, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1720376 historic=castle 282 m from ledger point
- origin moved 282 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":2.5,"medianOutside":7.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.2647/-4.09401) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q4877532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/beaumaris-town-walls-q4877532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
