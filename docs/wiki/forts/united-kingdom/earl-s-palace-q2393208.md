# Earl's Palace

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `earl-s-palace-q2393208` |
| Coordinates | 59.13, -3.32 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.13/-3.32)) |
| Wikidata | [Q2393208](https://www.wikidata.org/wiki/Q2393208) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Orkney Islands |
| Inception | 1569 |
| Designations | scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 136 elements (outline 1, marker 1, road 33, building 69, water 2, wall 20, zone 9, coastline 1).

Evidence: documented 0, mapped 136, inferred 0, derived 1; heights documented 1, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8519446 historic=castle Q2393208 266 m from ledger point
- origin moved 268 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":338,"medianInside":0.1,"medianOutside":6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.13/-3.32) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2393208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 136 elements); data/traces/earl-s-palace-q2393208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
