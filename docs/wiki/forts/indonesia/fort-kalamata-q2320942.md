# Fort Kalamata

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-kalamata-q2320942` |
| Coordinates | 0.7625, 127.37296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/0.7625/127.37296)) |
| Wikidata | [Q2320942](https://www.wikidata.org/wiki/Q2320942) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort |
| Administrative area | Ternate |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, road 22, building 180, coastline 1, wall 1, water 1).

Evidence: documented 0, mapped 206, inferred 0, derived 1; heights documented 1, inferred 0, unknown 180.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/391482441 historic=fort 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":167,"medianInside":1.1,"medianOutside":7.1}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/0.7625/127.37296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort; sitelinks=6; wikidata:Q2320942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/fort-kalamata-q2320942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
