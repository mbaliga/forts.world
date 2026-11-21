# Rēzekne Castle

> Latvia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rezekne-castle-q7386890` |
| Coordinates | 56.50243, 27.33464 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.50243/27.33464)) |
| Wikidata | [Q7386890](https://www.wikidata.org/wiki/Q7386890) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rēzekne |
| Inception | 1285 |
| Designations | National architectural monument of Latvia |
| Wikipedia language editions | 9 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, waterway 3, road 103, building 111, retaining-wall 1, wall 1, zone 26, water 3).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 18, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/722721072 historic=ruins 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.50243/27.33464) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q7386890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/rezekne-castle-q7386890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/latvia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
