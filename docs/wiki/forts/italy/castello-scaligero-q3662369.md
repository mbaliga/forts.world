# Castello Scaligero

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-scaligero-q3662369` |
| Coordinates | 45.76617, 10.80848 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.76617/10.80848)) |
| Wikidata | [Q3662369](https://www.wikidata.org/wiki/Q3662369) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Malcesine |
| Designations | Italian national heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 218 elements (outline 1, marker 1, road 89, building 101, wall 22, cliff 3).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 14, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284673470 historic=castle Q3662369 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.76617/10.80848) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q3662369 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 218 elements); data/traces/castello-scaligero-q3662369.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
