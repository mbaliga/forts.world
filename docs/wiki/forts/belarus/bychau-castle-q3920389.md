# Bychaŭ Castle

> Belarus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bychau-castle-q3920389` |
| Coordinates | 53.51808, 30.25927 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.51808/30.25927)) |
| Wikidata | [Q3920389](https://www.wikidata.org/wiki/Q3920389) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Bychaŭ |
| Inception | 1610 |
| Designations | Cultural heritage of Belarus |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://bykhov.gov.by/region/istoricheskie-ob-ekty/itemlist/category/677-zamok |

## What the model contains

Tier **T1**, status `outline+walls`, 120 elements (outline 1, marker 3, road 40, building 55, zone 17, waterway 2, wall 1, water 1).

Evidence: documented 0, mapped 120, inferred 0, derived 0; heights documented 55, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/370853847 historic=castle Q3920389 10 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.51808/30.25927) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=5; wikidata:Q3920389 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 120 elements); data/traces/bychau-castle-q3920389.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belarus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
