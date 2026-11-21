# Kilitbahir Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kilitbahir-castle-q6058053` |
| Coordinates | 40.14766, 26.37957 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.14766/26.37957)) |
| Wikidata | [Q6058053](https://www.wikidata.org/wiki/Q6058053) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Çanakkale Province |
| Inception | 1452 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `website` | https://www.kulturportali.gov.tr/turkiye/canakkale/gezilecekyer/kilitbahir-kalesi |

## What the model contains

Tier **T1**, status `outline+walls`, 164 elements (outline 1, coastline 1, road 16, wall 5, zone 2, building 138, water 1).

Evidence: documented 0, mapped 164, inferred 0, derived 1; heights documented 0, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7330312 historic=castle Q6058053 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":538,"medianInside":0,"medianOutside":19.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.14766/26.37957) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=8; wikidata:Q6058053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 164 elements); data/traces/kilitbahir-castle-q6058053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
