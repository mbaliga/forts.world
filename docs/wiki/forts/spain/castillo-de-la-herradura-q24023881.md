# Castillo de la Herradura

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-la-herradura-q24023881` |
| Coordinates | 36.73886, -3.74751 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.73886/-3.74751)) |
| Wikidata | [Q24023881](https://www.wikidata.org/wiki/Q24023881) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Almuñécar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 127 elements (outline 1, marker 4, coastline 1, road 38, waterway 5, building 66, zone 9, water 2, retaining-wall 1).

Evidence: documented 0, mapped 127, inferred 0, derived 1; heights documented 57, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10398427 historic=fort Q24023881 9 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":37,"medianInside":0,"medianOutside":7.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.73886/-3.74751) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=4; wikidata:Q24023881 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 127 elements); data/traces/castillo-de-la-herradura-q24023881.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
