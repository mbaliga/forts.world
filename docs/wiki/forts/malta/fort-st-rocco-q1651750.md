# Fort St. Rocco

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-st-rocco-q1651750` |
| Coordinates | 35.8925, 14.53778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8925/14.53778)) |
| Wikidata | [Q1651750](https://www.wikidata.org/wiki/Q1651750) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kalkara |
| Inception | 1872 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `description` | Built on the site of the Battry of St. Rocco during the Revolution against the French. Construction of the fort started in 1872/1873 and is the first polygonal fort of its kind to be built by the British in Malta. |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, road 71, zone 8, wall 33, building 26, coastline 1, water 2).

Evidence: documented 0, mapped 142, inferred 0, derived 2; heights documented 0, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/907304159 historic=fort Q1651750 10 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":4.5,"medianOutside":27}
- sea-1: DEM check ok {"cells":11,"medianInside":6.5,"medianOutside":27}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8925/14.53778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q1651750 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/fort-st-rocco-q1651750.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
