# UAE Presidential Palace

> United Arab Emirates · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uae-presidential-palace-q61973220` |
| Coordinates | 24.46329, 54.30544 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.46329/54.30544)) |
| Wikidata | [Q61973220](https://www.wikidata.org/wiki/Q61973220) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building of public administration |
| Administrative area | Emirate of Abu Dhabi |
| Inception | 2015 |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | UAE Presidential Palace |
| OSM `website` | https://www.qasralwatan.ae/ |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, coastline 1, road 114, building 25, water 7, wall 3, zone 2).

Evidence: documented 0, mapped 153, inferred 0, derived 4; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7232861 historic=castle Q61973220 49 m from ledger point
- origin moved 52 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":38,"medianInside":0,"medianOutside":3.2}
- sea-1: DEM check ok {"cells":36,"medianInside":1.2,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":18,"medianInside":0.9,"medianOutside":3.1}
- sea-3: DEM check ok {"cells":19,"medianInside":2.9,"medianOutside":3.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.46329/54.30544) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building of public administration; sitelinks=12; wikidata:Q61973220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/uae-presidential-palace-q61973220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-arab-emirates.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
