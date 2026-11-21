# Sira Fortress

> Yemen · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sira-fortress-q1527588` |
| Coordinates | 12.78004, 45.04982 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.78004/45.04982)) |
| Wikidata | [Q1527588](https://www.wikidata.org/wiki/Q1527588) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Aden |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, road 4, building 2, coastline 4, zone 1, wall 2, water 2).

Evidence: documented 0, mapped 16, inferred 0, derived 2; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95428201 historic=castle Q1527588 121 m from ledger point
- origin moved 121 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":12,"medianInside":3,"medianOutside":16.4}
- sea-1: DEM check ok {"cells":75,"medianInside":7.9,"medianOutside":20.9}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.78004/45.04982) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q1527588 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/sira-fortress-q1527588.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/yemen.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
