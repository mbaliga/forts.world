# Palais Trautson

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-trautson-q471908` |
| Coordinates | 48.20575, 16.35529 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20575/16.35529)) |
| Wikidata | [Q471908](https://www.wikidata.org/wiki/Q471908) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|city palace |
| Administrative area | Neubau |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 16, road 421, building 114, zone 56, retaining-wall 3, wall 2).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 94, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/57997 historic=castle Q471908 7 m from ledger point
- roads capped: kept the 150 longest of 421 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20575/16.35529) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|city palace; sitelinks=10; wikidata:Q471908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/palais-trautson-q471908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
