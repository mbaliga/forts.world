# Macduff's Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `macduff-s-castle-q4185848` |
| Coordinates | 56.1627, -3.05786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.1627/-3.05786)) |
| Wikidata | [Q4185848](https://www.wikidata.org/wiki/Q4185848) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Designations | category B listed building\|scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, coastline 1, road 43, zone 8, building 24, wall 2, water 1).

Evidence: documented 0, mapped 80, inferred 0, derived 1; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/391754430 historic=ruins Q4185848 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":98,"medianInside":10.8,"medianOutside":26}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.1627/-3.05786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q4185848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/macduff-s-castle-q4185848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
