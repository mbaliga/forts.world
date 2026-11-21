# Castle of Santa Severina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-santa-severina-q30889812` |
| Coordinates | 39.14679, 16.91446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.14679/16.91446)) |
| Wikidata | [Q30889812](https://www.wikidata.org/wiki/Q30889812) (CC0) |
| Wikidata class | castle |
| Types | castle\|historical park museum\|military museum building\|museum of a public entity |
| Administrative area | Santa Severina |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 3, road 123, wall 91, retaining-wall 17, building 297, cliff 3, zone 4).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 1, inferred 0, unknown 227.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18058225 historic=castle Q30889812 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 297 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.14679/16.91446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historical park museum\|military museum building\|museum of a public entity; sitelinks=5; wikidata:Q30889812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/castle-of-santa-severina-q30889812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
