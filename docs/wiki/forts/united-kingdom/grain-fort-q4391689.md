# Grain Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grain-fort-q4391689` |
| Coordinates | 51.4572, 0.7197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4572/0.7197)) |
| Wikidata | [Q4391689](https://www.wikidata.org/wiki/Q4391689) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kent |
| Inception | 1861 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 146 elements (outline 1, road 41, building 98, coastline 1, zone 3, wall 1, water 1).

Evidence: documented 0, mapped 146, inferred 0, derived 1; heights documented 0, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1237238535 historic=fort Q4391689 18 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":196,"medianInside":0.7,"medianOutside":11.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4572/0.7197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q4391689 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 146 elements); data/traces/grain-fort-q4391689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
