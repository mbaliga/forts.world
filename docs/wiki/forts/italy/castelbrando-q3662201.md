# CastelBrando

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelbrando-q3662201` |
| Coordinates | 45.96846, 12.13558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.96846/12.13558)) |
| Wikidata | [Q3662201](https://www.wikidata.org/wiki/Q3662201) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cison di Valmarino |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, road 20, building 11, zone 14, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178669970 historic=castle Q3662201 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.96846/12.13558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q3662201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/castelbrando-q3662201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
