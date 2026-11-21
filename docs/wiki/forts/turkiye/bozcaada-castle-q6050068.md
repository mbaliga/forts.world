# Bozcaada Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bozcaada-castle-q6050068` |
| Coordinates | 39.83333, 26.06667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.83333/26.06667)) |
| Wikidata | [Q6050068](https://www.wikidata.org/wiki/Q6050068) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|military base |
| Administrative area | Çanakkale Province |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 1, coastline 1, road 53, building 189, zone 2, wall 25, water 4).

Evidence: documented 0, mapped 276, inferred 0, derived 4; heights documented 0, inferred 0, unknown 214.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1536604394 historic=fort 568 m from ledger point
- origin moved 568 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":441,"medianInside":5.7,"medianOutside":null}
- sea-1: DEM check failed {"cells":6,"medianInside":7.4,"medianOutside":5.6}
- sea-2: DEM check ok {"cells":71,"medianInside":0.1,"medianOutside":7.4}
- sea-3: DEM check ok {"cells":136,"medianInside":0,"medianOutside":8.4}
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.83333/26.06667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|military base; sitelinks=5; wikidata:Q6050068 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/bozcaada-castle-q6050068.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
