# Castell de Cadaqués

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-cadaques-q17596017` |
| Coordinates | 42.28751, 3.27722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.28751/3.27722)) |
| Wikidata | [Q17596017](https://www.wikidata.org/wiki/Q17596017) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cadaqués |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, road 131, building 360, zone 4, coastline 4, wall 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 263, inferred 0, derived 1; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/372597380 historic=castle Q17596620 423 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 360 mapped (trace size budget); the rest of the town is not drawn
- origin moved 424 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":21,"medianInside":-0.2,"medianOutside":30.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.28751/3.27722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q17596017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/castell-de-cadaques-q17596017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
