# Leonine City

> Vatican City · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leonine-city-q370350` |
| Coordinates | 41.90306, 12.45972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.90306/12.45972)) |
| Wikidata | [Q370350](https://www.wikidata.org/wiki/Q370350) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Rome |
| Wikipedia language editions | 22 |
| OSM `historic` | citywalls |
| OSM `description` | Corridoio corazzato di comunicazione fra Vaticano e Castel Sant'Angelo |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 130, road 1732, building 452, wall 72, retaining-wall 57, water 12, zone 78, waterway 1).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 13, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12043626 historic=citywalls Q1329589 70 m from ledger point
- pruned to the outline plus 80 m: 2535 -> 492 elements
- roads capped: kept the 80 longest of 292 mapped (trace size budget); minor lanes are not drawn
- origin moved 76 m from the ledger point to the outline centroid
- 38 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.90306/12.45972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=22; wikidata:Q370350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/leonine-city-q370350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/vatican-city.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
