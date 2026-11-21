# Porta Carmentalis

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-carmentalis-q1544611` |
| Coordinates | 41.8914, 12.4803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.8914/12.4803)) |
| Wikidata | [Q1544611](https://www.wikidata.org/wiki/Q1544611) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Wikipedia language editions | 17 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 5, road 294, zone 24, building 83, retaining-wall 45, wall 21, water 2, cliff 1, waterway 3).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 20, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111671157 historic=archaeological_site Q1241176 34 m from ledger point
- roads capped: kept the 150 longest of 294 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.8914/12.4803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=17; wikidata:Q1544611 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/porta-carmentalis-q1544611.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
