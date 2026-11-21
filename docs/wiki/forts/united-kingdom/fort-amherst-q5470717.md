# Fort Amherst

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-amherst-q5470717` |
| Coordinates | 51.3869, 0.52542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3869/0.52542)) |
| Wikidata | [Q5470717](https://www.wikidata.org/wiki/Q5470717) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum\|independent museum |
| Administrative area | Medway |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://fortamherst.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 10, road 390, zone 31, building 87, waterway 2, wall 84, coastline 3, cliff 9, retaining-wall 2, water 2).

Evidence: documented 0, mapped 381, inferred 0, derived 2; heights documented 20, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31140277 historic=fort Q5470717 25 m from ledger point
- roads capped: kept the 150 longest of 390 mapped (trace size budget); minor lanes are not drawn
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":281,"medianInside":-1.1,"medianOutside":17.8}
- sea-1: DEM check failed {"cells":1154,"medianInside":9.7,"medianOutside":4.3}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3869/0.52542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum\|independent museum; sitelinks=2; wikidata:Q5470717 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/fort-amherst-q5470717.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
