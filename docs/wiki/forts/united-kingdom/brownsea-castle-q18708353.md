# Brownsea Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brownsea-castle-q18708353` |
| Coordinates | 50.6883, -1.95826 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6883/-1.95826)) |
| Wikidata | [Q18708353](https://www.wikidata.org/wiki/Q18708353) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Studland |
| Inception | 1545 |
| Designations | Grade II listed building |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, coastline 1, building 17, road 25, zone 4, wall 3, retaining-wall 4, water 1).

Evidence: documented 0, mapped 56, inferred 0, derived 1; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122219687 historic=castle Q18708353 15 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":603,"medianInside":-1.2,"medianOutside":0.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6883/-1.95826) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=10; wikidata:Q18708353 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 56 elements); data/traces/brownsea-castle-q18708353.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
