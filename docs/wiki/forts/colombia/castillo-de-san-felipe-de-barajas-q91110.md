# Castillo de San Felipe de Barajas

> Colombia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-felipe-de-barajas-q91110` |
| Coordinates | 10.42222, -75.53806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.42222/-75.53806)) |
| Wikidata | [Q91110](https://www.wikidata.org/wiki/Q91110) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cartagena |
| Inception | 1536 |
| Designations | National Monuments of Colombia |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 2, road 190, water 2, building 83, zone 17, retaining-wall 7).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 14, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/49551791 historic=castle Q91110 112 m from ledger point
- origin moved 110 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.42222/-75.53806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q91110 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/castillo-de-san-felipe-de-barajas-q91110.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/colombia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
