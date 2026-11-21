# Pointe du Toulinguet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pointe-du-toulinguet-q3393734` |
| Coordinates | 48.28028, -4.62889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.28028/-4.62889)) |
| Wikidata | [Q3393734](https://www.wikidata.org/wiki/Q3393734) (CC0) |
| Wikidata class | fort |
| Types | fortification\|cape |
| Administrative area | Camaret-sur-Mer |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, marker 1, road 10, building 3, wall 4, retaining-wall 16, cliff 2, zone 4, coastline 2, water 2).

Evidence: documented 0, mapped 45, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255407219 historic=fort 282 m from ledger point
- origin moved 287 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":84,"medianInside":0,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":53,"medianInside":0,"medianOutside":0.9}
- 48 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.28028/-4.62889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|cape; sitelinks=6; wikidata:Q3393734 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/pointe-du-toulinguet-q3393734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
