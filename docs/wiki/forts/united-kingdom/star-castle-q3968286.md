# Star Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `star-castle-q3968286` |
| Coordinates | 49.9154, -6.32103 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9154/-6.32103)) |
| Wikidata | [Q3968286](https://www.wikidata.org/wiki/Q3968286) (CC0) |
| Wikidata class | fort |
| Types | hotel\|fortification |
| Administrative area | St. Mary's |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 6, road 42, zone 7, wall 43, building 97, coastline 3, retaining-wall 3, water 2).

Evidence: documented 0, mapped 204, inferred 0, derived 2; heights documented 1, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72499436 historic=castle Q3968286 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":35,"medianInside":-1.3,"medianOutside":26.2}
- sea-1: DEM check ok {"cells":30,"medianInside":-0.8,"medianOutside":26}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9154/-6.32103) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hotel\|fortification; sitelinks=4; wikidata:Q3968286 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/star-castle-q3968286.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
