# Fort Michie

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-michie-q5471676` |
| Coordinates | 41.20222, -72.11861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.20222/-72.11861)) |
| Wikidata | [Q5471676](https://www.wikidata.org/wiki/Q5471676) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1897 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | military |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, coastline 2, building 19, road 8, wall 1, zone 5, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 2; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/331242603 historic=ruins 8 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":160,"medianInside":0,"medianOutside":1.8}
- sea-1: DEM check failed {"cells":107,"medianInside":1,"medianOutside":0}
- 377 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.20222/-72.11861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q5471676 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/fort-michie-q5471676.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
