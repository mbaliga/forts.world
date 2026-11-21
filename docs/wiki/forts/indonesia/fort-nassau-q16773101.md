# Fort Nassau

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-nassau-q16773101` |
| Coordinates | -4.52813, 129.89756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-4.52813/129.89756)) |
| Wikidata | [Q16773101](https://www.wikidata.org/wiki/Q16773101) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort |
| Administrative area | Ternate |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `ruins` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, road 27, building 66, zone 2, coastline 1, wall 4, water 2).

Evidence: documented 0, mapped 103, inferred 0, derived 2; heights documented 0, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1018549157 historic=fort 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":112,"medianInside":2.3,"medianOutside":9.6}
- sea-1: DEM check ok {"cells":3,"medianInside":0.8,"medianOutside":8.8}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-4.52813/129.89756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort; sitelinks=6; wikidata:Q16773101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 103 elements); data/traces/fort-nassau-q16773101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
