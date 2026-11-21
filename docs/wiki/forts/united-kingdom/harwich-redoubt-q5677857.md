# Harwich Redoubt

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harwich-redoubt-q5677857` |
| Coordinates | 51.9419, 1.2889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9419/1.2889)) |
| Wikidata | [Q5677857](https://www.wikidata.org/wiki/Q5677857) (CC0) |
| Wikidata class | fort |
| Types | redoubt\|military museum |
| Administrative area | Harwich |
| Designations | Grade II* listed building |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://harwich-society.co.uk/heritage-trail/redoubt.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, road 46, zone 5, building 313, coastline 1, wall 11, water 1).

Evidence: documented 0, mapped 378, inferred 0, derived 1; heights documented 24, inferred 0, unknown 300.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112316195 historic=fort Q5677857 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":72,"medianInside":-0.2,"medianOutside":4.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9419/1.2889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt\|military museum; sitelinks=2; wikidata:Q5677857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/harwich-redoubt-q5677857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
