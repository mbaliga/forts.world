# Al Fahidi Fort

> United Arab Emirates · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `al-fahidi-fort-q292826` |
| Coordinates | 25.26344, 55.29718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.26344/55.29718)) |
| Wikidata | [Q292826](https://www.wikidata.org/wiki/Q292826) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, road 120, building 162, waterway 1, coastline 2, zone 1, wall 1, water 1).

Evidence: documented 0, mapped 289, inferred 0, derived 1; heights documented 2, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7214772 historic=fort Q292826 17 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":5.1,"medianOutside":10}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.26344/55.29718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=6; wikidata:Q292826 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/al-fahidi-fort-q292826.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-arab-emirates.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
