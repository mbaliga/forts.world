# Fort Obergrünewald

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-obergrunewald-q83788027` |
| Coordinates | 49.61528, 6.13756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61528/6.13756)) |
| Wikidata | [Q83788027](https://www.wikidata.org/wiki/Q83788027) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Luxembourg |
| Inception | 1688 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 3, building 60, road 106, wall 33, zone 10, retaining-wall 24, cliff 25, water 1, waterway 3).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 17, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/49908579 historic=fort Q83788027 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61528/6.13756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q83788027 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/fort-obergrunewald-q83788027.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
