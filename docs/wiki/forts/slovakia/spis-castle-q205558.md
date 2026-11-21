# Spiš Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spis-castle-q205558` |
| Coordinates | 49.00056, 20.76833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.00056/20.76833)) |
| Wikidata | [Q205558](https://www.wikidata.org/wiki/Q205558) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Žehra |
| Inception | 1200 |
| Designations | World Heritage Site |
| UNESCO WHC id | 620rev-001 |
| Wikipedia language editions | 49 |
| OSM `historic` | citywalls |
| OSM `description` | 13th-century rampart |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 132 elements (outline 1, marker 4, road 40, wall 67, building 10, zone 8, cliff 1).

Evidence: documented 0, mapped 132, inferred 0, derived 0; heights documented 11, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1559860585 historic=citywalls 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 83 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.00056/20.76833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=49; wikidata:Q205558 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/spis-castle-q205558.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
