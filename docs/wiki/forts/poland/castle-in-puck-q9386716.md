# Castle in Puck

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-puck-q9386716` |
| Coordinates | 54.7217, 18.4086 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7217/18.4086)) |
| Wikidata | [Q9386716](https://www.wikidata.org/wiki/Q9386716) (CC0) |
| Wikidata class | castle |
| Types | Ordensburg |
| Administrative area | Puck |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 5, coastline 1, road 76, building 170, wall 22, zone 9, retaining-wall 1, water 1).

Evidence: documented 0, mapped 286, inferred 0, derived 1; heights documented 115, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17885944 historic=ruins Q9386716 72 m from ledger point
- origin moved 75 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":55,"medianInside":5,"medianOutside":2.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7217/18.4086) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Ordensburg; sitelinks=2; wikidata:Q9386716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/castle-in-puck-q9386716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
