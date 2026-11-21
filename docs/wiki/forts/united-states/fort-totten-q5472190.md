# Fort Totten

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-totten-q5472190` |
| Coordinates | 40.79203, -73.77608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.79203/-73.77608)) |
| Wikidata | [Q5472190](https://www.wikidata.org/wiki/Q5472190) (CC0) |
| Wikidata class | fort |
| Types | artillery fort |
| Administrative area | Queens |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 105 elements (outline 1, road 70, building 29, coastline 1, zone 2, water 2).

Evidence: documented 0, mapped 105, inferred 0, derived 2; heights documented 29, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284637850 historic=fort 468 m from ledger point
- origin moved 468 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":276,"medianInside":0.1,"medianOutside":12.9}
- sea-1: DEM check ok {"cells":44,"medianInside":0.7,"medianOutside":6.2}
- 334 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.79203/-73.77608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort; sitelinks=4; wikidata:Q5472190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 105 elements); data/traces/fort-totten-q5472190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
