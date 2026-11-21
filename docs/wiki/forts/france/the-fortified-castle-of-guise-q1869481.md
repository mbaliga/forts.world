# The fortified castle of Guise

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `the-fortified-castle-of-guise-q1869481` |
| Coordinates | 49.896, 3.623 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.896/3.623)) |
| Wikidata | [Q1869481](https://www.wikidata.org/wiki/Q1869481) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Guise |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `website` | https://www.chateaudeguise.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 4, road 137, waterway 6, building 751, water 7, zone 14, retaining-wall 11, wall 2).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 3, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/967542105 historic=castle 93 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 751 mapped (trace size budget); the rest of the town is not drawn
- origin moved 91 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.896/3.623) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1869481 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/the-fortified-castle-of-guise-q1869481.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
