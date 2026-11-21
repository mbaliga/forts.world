# Benifaió Plaça Tower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `benifaio-placa-tower-q2894773` |
| Coordinates | 39.285, -0.42715 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.285/-0.42715)) |
| Wikidata | [Q2894773](https://www.wikidata.org/wiki/Q2894773) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Benifaió |
| Inception | 2000 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, road 206, building 828, wall 293).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 58, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17532267 historic=castle Q2894773 4 m from ledger point
- pruned to the outline plus 150 m: 1328 -> 597 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 131 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.285/-0.42715) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q2894773 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/benifaio-placa-tower-q2894773.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
