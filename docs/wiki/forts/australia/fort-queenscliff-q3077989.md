# Fort Queenscliff

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-queenscliff-q3077989` |
| Coordinates | -38.27226, 144.66028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-38.27226/144.66028)) |
| Wikidata | [Q3077989](https://www.wikidata.org/wiki/Q3077989) (CC0) |
| Wikidata class | fort |
| Types | military museum\|fort |
| Administrative area | Victoria |
| Designations | listed on the Commonwealth Heritage List |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, road 56, wall 2, coastline 1, building 121, cliff 1, waterway 1, water 1).

Evidence: documented 0, mapped 184, inferred 0, derived 1; heights documented 4, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/109350356 historic=fort 62 m from ledger point
- origin moved 60 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":361,"medianInside":2.8,"medianOutside":18}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-38.27226/144.66028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military museum\|fort; sitelinks=3; wikidata:Q3077989 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 184 elements); data/traces/fort-queenscliff-q3077989.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
