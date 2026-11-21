# Carlota Fort

> Cape Verde · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carlota-fort-q55754230` |
| Coordinates | 14.8927, -24.50101 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.8927/-24.50101)) |
| Wikidata | [Q55754230](https://www.wikidata.org/wiki/Q55754230) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | São Filipe |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 114 elements (outline 1, road 38, cliff 1, zone 2, building 60, wall 8, waterway 2, coastline 1, water 1).

Evidence: documented 0, mapped 114, inferred 0, derived 1; heights documented 1, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194262687 historic=ruins Q55754230 7 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":152,"medianInside":33.8,"medianOutside":36.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.8927/-24.50101) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q55754230 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 114 elements); data/traces/carlota-fort-q55754230.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cape-verde.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
