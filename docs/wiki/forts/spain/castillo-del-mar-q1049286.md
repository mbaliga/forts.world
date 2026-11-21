# Castillo del Mar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-del-mar-q1049286` |
| Coordinates | 28.20554, -17.25277 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.20554/-17.25277)) |
| Wikidata | [Q1049286](https://www.wikidata.org/wiki/Q1049286) (CC0) |
| Wikidata class | ruin |
| Types | ruins |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `website` | http://www.castillo-del-mar.com |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, coastline 5, building 1, zone 1, road 2, waterway 1, water 2).

Evidence: documented 0, mapped 13, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122233182 historic=ruins Q1049286 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":201,"medianInside":0,"medianOutside":86.1}
- sea-1: DEM check failed {"cells":400,"medianInside":1.2,"medianOutside":0}
- 32 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.20554/-17.25277) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins; sitelinks=1; wikidata:Q1049286 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/castillo-del-mar-q1049286.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
