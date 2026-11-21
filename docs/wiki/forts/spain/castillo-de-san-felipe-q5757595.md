# Castillo de San Felipe

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-felipe-q5757595` |
| Coordinates | 43.46068, -3.80668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.46068/-3.80668)) |
| Wikidata | [Q5757595](https://www.wikidata.org/wiki/Q5757595) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |
| OSM `barrier` | kerb |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 6, road 220, water 3, building 122, coastline 1, wall 1).

Evidence: documented 0, mapped 354, inferred 0, derived 1; heights documented 115, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/578145759 historic=monument Q58467290 311 m from ledger point
- origin moved 311 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":103,"medianInside":0,"medianOutside":10.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.46068/-3.80668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q5757595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/castillo-de-san-felipe-q5757595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
