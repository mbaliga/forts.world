# Østre batteri

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stre-batteri-q108728424` |
| Coordinates | 58.13502, 8.00929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.13502/8.00929)) |
| Wikidata | [Q108728424](https://www.wikidata.org/wiki/Q108728424) (CC0) |
| Wikidata class | fort |
| Types | fortification\|artillery battery |
| Administrative area | Kristiansand Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, marker 1, building 13, road 33, coastline 6, water 3, zone 2, waterway 1, wall 1).

Evidence: documented 0, mapped 61, inferred 0, derived 2; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/777735202 historic=fort 140 m from ledger point
- island ring (1450 m2) cut out of sea-1
- island ring (1286 m2) cut out of sea-1
- origin moved 141 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":0.9,"medianOutside":23.8}
- sea-1: DEM check ok {"cells":64,"medianInside":0,"medianOutside":28.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.13502/8.00929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|artillery battery; sitelinks=0; wikidata:Q108728424 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/stre-batteri-q108728424.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
