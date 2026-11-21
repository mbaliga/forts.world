# North Berwick

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `north-berwick-q1012054` |
| Coordinates | 56.058, -2.717 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.058/-2.717)) |
| Wikidata | [Q1012054](https://www.wikidata.org/wiki/Q1012054) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | East Lothian |
| Wikipedia language editions | 27 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 2, road 83, zone 3, building 195, wall 4, coastline 1, water 1).

Evidence: documented 0, mapped 290, inferred 0, derived 1; heights documented 10, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/365727679 historic=ruins 111 m from ledger point
- origin moved 108 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":3.5,"medianOutside":14.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.058/-2.717) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=27; wikidata:Q1012054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/north-berwick-q1012054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
