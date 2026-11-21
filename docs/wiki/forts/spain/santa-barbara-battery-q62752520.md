# Santa Bárbara Battery

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `santa-barbara-battery-q62752520` |
| Coordinates | 28.41836, -16.54961 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.41836/-16.54961)) |
| Wikidata | [Q62752520](https://www.wikidata.org/wiki/Q62752520) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Puerto de la Cruz |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 188 elements (outline 1, marker 9, road 110, wall 10, building 53, zone 2, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 188, inferred 0, derived 1; heights documented 10, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88243170 historic=building 48 m from ledger point
- origin moved 49 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":116,"medianInside":0,"medianOutside":12.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.41836/-16.54961) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q62752520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 188 elements); data/traces/santa-barbara-battery-q62752520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
