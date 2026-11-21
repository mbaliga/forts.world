# Cairnburgh Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cairnburgh-castle-q5017682` |
| Coordinates | 56.5183, -6.38111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.5183/-6.38111)) |
| Wikidata | [Q5017682](https://www.wikidata.org/wiki/Q5017682) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, coastline 2, zone 5, cliff 7, wall 4, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16660856 historic=castle Q5017682 122 m from ledger point
- island ring (37366 m2) cut out of sea-0
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":405,"medianInside":1,"medianOutside":4.4}
- 599 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.5183/-6.38111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5017682 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/cairnburgh-castle-q5017682.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
