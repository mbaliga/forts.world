# Paşalimanı Guardhouse

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pasaliman-guardhouse-q133504507` |
| Coordinates | 41.03172, 29.02196 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.03172/29.02196)) |
| Wikidata | [Q133504507](https://www.wikidata.org/wiki/Q133504507) (CC0) |
| Wikidata class | fortification |
| Types | public building\|outpost\|historic building |
| Administrative area | Üsküdar |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, road 29, building 26, wall 7, coastline 1, zone 1, water 2).

Evidence: documented 0, mapped 67, inferred 0, derived 1; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/444944498 historic=ruins 106 m from ledger point
- origin moved 105 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":141,"medianInside":0,"medianOutside":17.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.03172/29.02196) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; public building\|outpost\|historic building; sitelinks=1; wikidata:Q133504507 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/pasaliman-guardhouse-q133504507.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
