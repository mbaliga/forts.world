# Çırağan Sarayı Geçidi

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `c-ragan-saray-gecidi-q122987748` |
| Coordinates | 41.04427, 29.01515 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.04427/29.01515)) |
| Wikidata | [Q122987748](https://www.wikidata.org/wiki/Q122987748) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|thoroughfare |
| Administrative area | Beşiktaş |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 131 elements (outline 1, road 95, zone 16, building 13, coastline 1, wall 2, water 2, waterway 1).

Evidence: documented 0, mapped 131, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/895150392 historic=castle Q122987748 1 m from ledger point
- sea-0: DEM check ok {"cells":62,"medianInside":0,"medianOutside":23}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.04427/29.01515) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|thoroughfare; sitelinks=1; wikidata:Q122987748 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 131 elements); data/traces/c-ragan-saray-gecidi-q122987748.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
