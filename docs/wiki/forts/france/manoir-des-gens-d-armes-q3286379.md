# Manoir des Gens d'armes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-des-gens-d-armes-q3286379` |
| Coordinates | 49.18536, -0.34231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.18536/-0.34231)) |
| Wikidata | [Q3286379](https://www.wikidata.org/wiki/Q3286379) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house |
| Administrative area | Caen |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 383 elements (outline 1, marker 2, water 4, road 178, waterway 5, building 123, zone 13, wall 80, retaining-wall 8).

Evidence: documented 0, mapped 383, inferred 0, derived 0; heights documented 0, inferred 0, unknown 208.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19234268 historic=castle Q3286379 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 123 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.18536/-0.34231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house; sitelinks=2; wikidata:Q3286379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 383 elements); data/traces/manoir-des-gens-d-armes-q3286379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
