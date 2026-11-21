# Eastbourne Redoubt

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eastbourne-redoubt-q3422926` |
| Coordinates | 50.77397, 0.30044 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.77397/0.30044)) |
| Wikidata | [Q3422926](https://www.wikidata.org/wiki/Q3422926) (CC0) |
| Wikidata class | fort |
| Types | redoubt\|military museum |
| Administrative area | Eastbourne |
| Designations | Grade II listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 1, road 52, building 226, zone 5, coastline 1, wall 10, water 1).

Evidence: documented 0, mapped 297, inferred 0, derived 1; heights documented 1, inferred 0, unknown 235.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1221451048 historic=castle Q3422926 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":126,"medianInside":-2,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.77397/0.30044) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt\|military museum; sitelinks=3; wikidata:Q3422926 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/eastbourne-redoubt-q3422926.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
