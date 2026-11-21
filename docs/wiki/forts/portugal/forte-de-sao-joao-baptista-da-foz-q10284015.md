# Forte de São João Baptista da Foz

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-joao-baptista-da-foz-q10284015` |
| Coordinates | 41.14889, -8.67444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14889/-8.67444)) |
| Wikidata | [Q10284015](https://www.wikidata.org/wiki/Q10284015) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Aldoar, Foz do Douro e Nevogilde |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 1, road 102, building 287, retaining-wall 10, coastline 3, zone 8, wall 8, water 2).

Evidence: documented 0, mapped 255, inferred 0, derived 2; heights documented 4, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20304825 historic=fort Q10284015 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":65,"medianInside":0,"medianOutside":7.7}
- sea-1: DEM check ok {"cells":10,"medianInside":0,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14889/-8.67444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q10284015 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/forte-de-sao-joao-baptista-da-foz-q10284015.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
