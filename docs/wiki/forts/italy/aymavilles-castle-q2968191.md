# Aymavilles Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aymavilles-castle-q2968191` |
| Coordinates | 45.70239, 7.24818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.70239/7.24818)) |
| Wikidata | [Q2968191](https://www.wikidata.org/wiki/Q2968191) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum of a public entity\|palazzo museum |
| Administrative area | Aymavilles |
| Inception | 1287 |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Il castello è stato riaperto definitivamente sabato 14 maggio 2022. |
| OSM `website` | https://www.comune.aymavilles.ao.it/turismo/territorio/castelli-e-dintorni/castello-di-aymavilles |

## What the model contains

Tier **T1**, status `outline+walls`, 136 elements (outline 1, road 40, water 1, building 83, zone 7, wall 3, waterway 1).

Evidence: documented 0, mapped 136, inferred 0, derived 0; heights documented 1, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180736202 historic=castle Q2968191 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.70239/7.24818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum of a public entity\|palazzo museum; sitelinks=7; wikidata:Q2968191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 136 elements); data/traces/aymavilles-castle-q2968191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
