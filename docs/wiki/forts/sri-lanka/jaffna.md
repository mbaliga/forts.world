# Jaffna Fort

> Sri Lanka · Northern · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jaffna` |
| Coordinates | 9.662, 80.009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.662/80.009)) |
| Wikidata | [Q2756663](https://www.wikidata.org/wiki/Q2756663) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Jaffna |
| Inception | 1625 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 11 |
| Programme catalogue | confidence medium, significance rank 302; sources catalogue:jaffna;wikidata:Q2756663 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 168 elements (outline 1, marker 1, road 65, coastline 1, water 6, building 63, waterway 11, zone 5, wall 15).

Evidence: documented 0, mapped 168, inferred 0, derived 2; heights documented 1, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99282968 historic=ruins Q2756663 81 m from ledger point
- origin moved 79 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":10,"medianInside":2.4,"medianOutside":4.2}
- sea-1: DEM check ok {"cells":641,"medianInside":0.5,"medianOutside":5.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.662/80.009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 168 elements); data/traces/jaffna.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
