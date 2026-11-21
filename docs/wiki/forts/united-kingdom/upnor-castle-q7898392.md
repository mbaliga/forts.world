# Upnor Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `upnor-castle-q7898392` |
| Coordinates | 51.4069, 0.52686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4069/0.52686)) |
| Wikidata | [Q7898392](https://www.wikidata.org/wiki/Q7898392) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum |
| Administrative area | Frindsbury Extra |
| Inception | 1567 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, road 27, zone 3, waterway 1, coastline 2, building 3, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297495786 historic=castle Q7898392 16 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":768,"medianInside":-1.9,"medianOutside":14.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4069/0.52686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum; sitelinks=15; wikidata:Q7898392 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/upnor-castle-q7898392.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
