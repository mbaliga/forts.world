# Porta Marina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-marina-q87760963` |
| Coordinates | 43.20901, 13.28767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.20901/13.28767)) |
| Wikidata | [Q87760963](https://www.wikidata.org/wiki/Q87760963) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Tolentino |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, waterway 1, road 95, water 1, building 413, wall 4, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/304168406 historic=yes 190 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 413 mapped (trace size budget); the rest of the town is not drawn
- origin moved 190 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.20901/13.28767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q87760963 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/porta-marina-q87760963.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
