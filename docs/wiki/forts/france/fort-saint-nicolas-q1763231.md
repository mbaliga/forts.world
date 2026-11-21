# Fort Saint-Nicolas

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-nicolas-q1763231` |
| Coordinates | 43.29083, 5.3625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.29083/5.3625)) |
| Wikidata | [Q1763231](https://www.wikidata.org/wiki/Q1763231) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | 7th arrondissement of Marseille |
| Inception | 1660 |
| Designations | monument selected by the mission to identify immovable heritage in danger (2018)\|classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 6, road 230, coastline 5, building 261, water 6, wall 25, zone 16, retaining-wall 18, cliff 5).

Evidence: documented 0, mapped 352, inferred 0, derived 3; heights documented 3, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27254413 historic=fort Q1763231 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 261 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 230 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":5.8,"medianOutside":21.4}
- sea-1: DEM check failed {"cells":573,"medianInside":21.4,"medianOutside":2.1}
- sea-2: DEM check ok {"cells":34,"medianInside":3,"medianOutside":22}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.29083/5.3625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q1763231 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/fort-saint-nicolas-q1763231.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
