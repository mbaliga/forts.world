# Torre Picada

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-picada-q2444541` |
| Coordinates | 39.80664, 2.69717 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.80664/2.69717)) |
| Wikidata | [Q2444541](https://www.wikidata.org/wiki/Q2444541) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Sóller |
| Inception | 1700 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 12, cliff 1, zone 1, coastline 1, wall 5, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 3, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121391426 historic=yes 37 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":93,"medianInside":0,"medianOutside":107.3}
- 69 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.80664/2.69717) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=5; wikidata:Q2444541 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/torre-picada-q2444541.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
