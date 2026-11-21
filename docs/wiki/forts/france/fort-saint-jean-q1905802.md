# Fort Saint-Jean

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-jean-q1905802` |
| Coordinates | 43.29472, 5.3625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.29472/5.3625)) |
| Wikidata | [Q1905802](https://www.wikidata.org/wiki/Q1905802) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | 2nd arrondissement of Marseille |
| Inception | 1660 |
| Designations | classified historical monument |
| Wikipedia language editions | 13 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 6, road 292, coastline 11, building 77, zone 9, retaining-wall 13, wall 13, water 3).

Evidence: documented 0, mapped 283, inferred 0, derived 3; heights documented 10, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1096341422 historic=fort Q1905802 88 m from ledger point
- roads capped: kept the 150 longest of 292 mapped (trace size budget); minor lanes are not drawn
- origin moved 90 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":601,"medianInside":0.9,"medianOutside":2}
- sea-1: DEM check ok {"cells":567,"medianInside":0.7,"medianOutside":8.3}
- sea-2: DEM check ok {"cells":363,"medianInside":0,"medianOutside":8.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.29472/5.3625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=13; wikidata:Q1905802 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/fort-saint-jean-q1905802.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
