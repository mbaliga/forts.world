# Hendy Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hendy-castle-q20589840` |
| Coordinates | 51.7098, -4.05069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7098/-4.05069)) |
| Wikidata | [Q20589840](https://www.wikidata.org/wiki/Q20589840) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Llanedi |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, road 8, building 1, coastline 2, waterway 1, water 2).

Evidence: documented 0, mapped 15, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1554190553 historic=archaeological_site 616 m from ledger point
- origin moved 617 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":382,"medianInside":9.3,"medianOutside":4.9}
- sea-1: DEM check ok {"cells":34,"medianInside":5.1,"medianOutside":9.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7098/-4.05069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=3; wikidata:Q20589840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/hendy-castle-q20589840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
