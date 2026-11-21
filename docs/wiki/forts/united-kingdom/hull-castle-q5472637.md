# Hull Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hull-castle-q5472637` |
| Coordinates | 53.74339, -0.32668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.74339/-0.32668)) |
| Wikidata | [Q5472637](https://www.wikidata.org/wiki/Q5472637) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | City of Kingston upon Hull |
| Inception | 1542 |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 8, waterway 1, road 275, building 502, water 5, coastline 1, wall 7, zone 6).

Evidence: documented 0, mapped 299, inferred 0, derived 2; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1064539611 historic=archaeological_site 235 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 502 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 275 mapped (trace size budget); minor lanes are not drawn
- origin moved 233 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1237,"medianInside":-2.3,"medianOutside":4.9}
- sea-1: DEM check ok {"cells":8,"medianInside":2.9,"medianOutside":4.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.74339/-0.32668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q5472637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/hull-castle-q5472637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
