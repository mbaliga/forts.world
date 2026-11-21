# Yarmouth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yarmouth-castle-q8049393` |
| Coordinates | 50.7066, -1.50005 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7066/-1.50005)) |
| Wikidata | [Q8049393](https://www.wikidata.org/wiki/Q8049393) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort\|military museum |
| Administrative area | Yarmouth |
| Inception | 1547 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, road 118, building 74, coastline 3, zone 3, wall 2, waterway 1, water 1).

Evidence: documented 0, mapped 203, inferred 0, derived 1; heights documented 1, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108538775 historic=castle Q8049393 11 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":712,"medianInside":-0.9,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7066/-1.50005) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort\|military museum; sitelinks=12; wikidata:Q8049393 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/yarmouth-castle-q8049393.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
