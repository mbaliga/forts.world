# Smiths Hill Fort

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `smiths-hill-fort-q7545575` |
| Coordinates | -34.4163, 150.902 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-34.4163/150.902)) |
| Wikidata | [Q7545575](https://www.wikidata.org/wiki/Q7545575) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | New South Wales |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Grounds of the Old Wollongong Court House |

## What the model contains

Tier **T1**, status `outline-only`, 109 elements (outline 1, road 68, zone 1, building 34, coastline 1, waterway 2, water 2).

Evidence: documented 0, mapped 109, inferred 0, derived 2; heights documented 25, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/932677725 historic=yes 698 m from ledger point
- origin moved 696 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":397,"medianInside":11.1,"medianOutside":6.4}
- sea-1: DEM check ok {"cells":57,"medianInside":8.5,"medianOutside":11}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-34.4163/150.902) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q7545575 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 109 elements); data/traces/smiths-hill-fort-q7545575.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
