# Castillo de Fuste

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-fuste-q24023391` |
| Coordinates | 28.39348, -13.85526 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.39348/-13.85526)) |
| Wikidata | [Q24023391](https://www.wikidata.org/wiki/Q24023391) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort\|monument |
| Administrative area | Antigua |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 152 elements (outline 1, marker 1, road 28, coastline 4, building 115, water 3).

Evidence: documented 0, mapped 152, inferred 0, derived 3; heights documented 0, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/249834942 historic=castle Q24023391 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":152,"medianInside":0,"medianOutside":3.5}
- sea-1: DEM check ok {"cells":17,"medianInside":0.1,"medianOutside":1}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.39348/-13.85526) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort\|monument; sitelinks=5; wikidata:Q24023391 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 152 elements); data/traces/castillo-de-fuste-q24023391.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
