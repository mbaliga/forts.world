# Castell del Rei

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-del-rei-q8342667` |
| Coordinates | 39.92222, 3.01 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.92222/3.01)) |
| Wikidata | [Q8342667](https://www.wikidata.org/wiki/Q8342667) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Pollença |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, coastline 1, road 3, wall 1, building 1, cliff 1, zone 1).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/81058569 historic=castle Q8342667 20 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.92222/3.01) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=3; wikidata:Q8342667 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 9 elements); data/traces/castell-del-rei-q8342667.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
