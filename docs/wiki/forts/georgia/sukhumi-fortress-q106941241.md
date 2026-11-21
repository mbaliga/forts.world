# Sukhumi fortress

> Georgia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sukhumi-fortress-q106941241` |
| Coordinates | 42.99526, 41.01739 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.99526/41.01739)) |
| Wikidata | [Q106941241](https://www.wikidata.org/wiki/Q106941241) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Sokhumi |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 66 elements (outline 1, coastline 1, road 13, building 48, wall 1, water 2).

Evidence: documented 0, mapped 66, inferred 0, derived 1; heights documented 2, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203904296 historic=archaeological_site 54 m from ledger point
- origin moved 56 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":217,"medianInside":0,"medianOutside":1}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.99526/41.01739) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q106941241 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 66 elements); data/traces/sukhumi-fortress-q106941241.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/georgia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
