# Castello svevo angioino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-svevo-angioino-q3662673` |
| Coordinates | 41.63042, 15.92227 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.63042/15.92227)) |
| Wikidata | [Q3662673](https://www.wikidata.org/wiki/Q3662673) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Manfredonia |
| Inception | 1279 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 181 elements (outline 1, marker 4, road 75, wall 13, building 85, coastline 1, water 2).

Evidence: documented 0, mapped 181, inferred 0, derived 2; heights documented 0, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16626451 historic=castle Q3662673 36 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":31,"medianInside":0,"medianOutside":7.6}
- sea-1: DEM check ok {"cells":110,"medianInside":0,"medianOutside":9.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.63042/15.92227) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q3662673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 181 elements); data/traces/castello-svevo-angioino-q3662673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
