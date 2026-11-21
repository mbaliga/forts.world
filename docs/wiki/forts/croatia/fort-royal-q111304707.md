# Fort Royal

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-royal-q111304707` |
| Coordinates | 42.62997, 18.11674 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.62997/18.11674)) |
| Wikidata | [Q111304707](https://www.wikidata.org/wiki/Q111304707) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Dubrovnik |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, coastline 1, road 26, wall 1, zone 4, water 3).

Evidence: documented 0, mapped 36, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171795142 historic=castle Q111304707 0 m from ledger point
- sea-0: DEM check ok {"cells":2,"medianInside":0.2,"medianOutside":45.3}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":45.3}
- sea-2: DEM check ok {"cells":24,"medianInside":0,"medianOutside":46.5}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.62997/18.11674) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q111304707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/fort-royal-q111304707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
