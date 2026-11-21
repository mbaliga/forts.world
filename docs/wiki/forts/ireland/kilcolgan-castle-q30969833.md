# Kilcolgan Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kilcolgan-castle-q30969833` |
| Coordinates | 53.20906, -8.88028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.20906/-8.88028)) |
| Wikidata | [Q30969833](https://www.wikidata.org/wiki/Q30969833) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kilcolgan |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, road 27, coastline 2, waterway 1, zone 3, building 22, wall 1, water 2).

Evidence: documented 0, mapped 59, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/565921868 historic=castle Q30969833 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":138,"medianInside":0.9,"medianOutside":3.7}
- sea-1: DEM check failed {"cells":367,"medianInside":2.8,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.20906/-8.88028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q30969833 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/kilcolgan-castle-q30969833.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
