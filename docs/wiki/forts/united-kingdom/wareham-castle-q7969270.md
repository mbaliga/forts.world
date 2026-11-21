# Wareham Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wareham-castle-q7969270` |
| Coordinates | 50.6842, -2.11216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6842/-2.11216)) |
| Wikidata | [Q7969270](https://www.wikidata.org/wiki/Q7969270) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Wareham |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, road 131, waterway 2, building 620, zone 5, wall 4).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 4, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18932587 historic=archaeological_site Q7969270 317 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 620 mapped (trace size budget); the rest of the town is not drawn
- origin moved 634 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6842/-2.11216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=4; wikidata:Q7969270 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/wareham-castle-q7969270.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
