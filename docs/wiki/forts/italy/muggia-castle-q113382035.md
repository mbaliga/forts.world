# Muggia Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muggia-castle-q113382035` |
| Coordinates | 45.60468, 13.76606 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.60468/13.76606)) |
| Wikidata | [Q113382035](https://www.wikidata.org/wiki/Q113382035) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Muggia |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, road 144, building 167, zone 6, waterway 1, coastline 1, wall 3, water 3).

Evidence: documented 0, mapped 326, inferred 0, derived 3; heights documented 162, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4782747 historic=castle Q113382035 14 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":0,"medianOutside":10.2}
- sea-1: DEM check ok {"cells":40,"medianInside":2.5,"medianOutside":10.8}
- sea-2: DEM check ok {"cells":9,"medianInside":-0.5,"medianOutside":9.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.60468/13.76606) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q113382035 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/muggia-castle-q113382035.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
