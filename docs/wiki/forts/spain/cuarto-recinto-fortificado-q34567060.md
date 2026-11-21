# Cuarto Recinto Fortificado

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cuarto-recinto-fortificado-q34567060` |
| Coordinates | 35.29548, -2.93755 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.29548/-2.93755)) |
| Wikidata | [Q34567060](https://www.wikidata.org/wiki/Q34567060) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Melilla |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 7, road 152, building 92, coastline 1, wall 13, zone 4, cliff 1, retaining-wall 6, water 2).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 10, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1000373847 historic=fort 71 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 72 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.29548/-2.93755) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q34567060 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/cuarto-recinto-fortificado-q34567060.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
