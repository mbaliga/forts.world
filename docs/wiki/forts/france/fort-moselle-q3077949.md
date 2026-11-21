# Fort Moselle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-moselle-q3077949` |
| Coordinates | 49.1266, 6.1673 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1266/6.1673)) |
| Wikidata | [Q3077949](https://www.wikidata.org/wiki/Q3077949) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Metz |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, road 174, water 3, building 226, waterway 4, zone 8, retaining-wall 5, wall 10).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 5, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149866959 historic=fort 522 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 526 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1266/6.1673) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3077949 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/fort-moselle-q3077949.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
