# Hawick

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hawick-q407183` |
| Coordinates | 55.42472, -2.78444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.42472/-2.78444)) |
| Wikidata | [Q407183](https://www.wikidata.org/wiki/Q407183) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Scottish Borders |
| Wikipedia language editions | 26 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 1, waterway 1, road 196, building 166, wall 17, water 2, zone 23).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 5, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/837802582 historic=building 310 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 196 mapped (trace size budget); minor lanes are not drawn
- origin moved 310 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.42472/-2.78444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=26; wikidata:Q407183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/hawick-q407183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
