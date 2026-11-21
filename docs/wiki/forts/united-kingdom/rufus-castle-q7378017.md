# Rufus Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rufus-castle-q7378017` |
| Coordinates | 50.5385, -2.42949 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5385/-2.42949)) |
| Wikidata | [Q7378017](https://www.wikidata.org/wiki/Q7378017) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Portland |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 2, coastline 1, road 63, building 123, zone 6, wall 5, cliff 2, water 1).

Evidence: documented 0, mapped 204, inferred 0, derived 1; heights documented 18, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/973048364 historic=castle Q7378017 143 m from ledger point
- origin moved 145 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":123,"medianInside":-0.6,"medianOutside":56.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5385/-2.42949) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q7378017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/rufus-castle-q7378017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
