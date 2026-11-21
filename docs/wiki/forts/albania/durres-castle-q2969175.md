# Durrës Castle

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `durres-castle-q2969175` |
| Coordinates | 41.3097, 19.447 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3097/19.447)) |
| Wikidata | [Q2969175](https://www.wikidata.org/wiki/Q2969175) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic site |
| Administrative area | Durrës County |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 9 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, marker 10, coastline 1, road 70, wall 6, building 106, zone 1, water 1).

Evidence: documented 0, mapped 196, inferred 0, derived 1; heights documented 6, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/307034649 historic=monument 199 m from ledger point
- origin moved 199 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":376,"medianInside":0,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3097/19.447) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic site; sitelinks=9; wikidata:Q2969175 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/durres-castle-q2969175.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
