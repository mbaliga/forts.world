# Château de la Napoule

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-napoule-q2971334` |
| Coordinates | 43.52333, 6.94306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.52333/6.94306)) |
| Wikidata | [Q2971334](https://www.wikidata.org/wiki/Q2971334) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum |
| Administrative area | Mandelieu-la-Napoule |
| Inception | 1358 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | ornemental |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 2, road 128, coastline 5, building 193, zone 1, wall 3, waterway 1, water 4).

Evidence: documented 0, mapped 338, inferred 0, derived 4; heights documented 50, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1780627 historic=castle Q2971334 27 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":0,"medianOutside":4.6}
- sea-1: DEM check ok {"cells":185,"medianInside":0,"medianOutside":8.3}
- sea-2: DEM check ok {"cells":23,"medianInside":0,"medianOutside":5}
- sea-3: DEM check failed {"cells":521,"medianInside":4.8,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.52333/6.94306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum; sitelinks=5; wikidata:Q2971334 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/chateau-de-la-napoule-q2971334.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
