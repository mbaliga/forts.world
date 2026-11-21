# Picasso Museum

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `picasso-museum-q1368360` |
| Coordinates | 43.58075, 7.1283 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.58075/7.1283)) |
| Wikidata | [Q1368360](https://www.wikidata.org/wiki/Q1368360) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum |
| Administrative area | Antibes |
| Inception | 1966 |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.antibes-juanlespins.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 3, road 134, coastline 4, building 660, zone 2, wall 3, retaining-wall 1, water 2).

Evidence: documented 0, mapped 270, inferred 0, derived 2; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68051130 historic=castle Q1368360 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 660 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":166,"medianInside":0,"medianOutside":10.9}
- sea-1: DEM check failed {"cells":398,"medianInside":7.9,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.58075/7.1283) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum; sitelinks=14; wikidata:Q1368360 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/picasso-museum-q1368360.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
