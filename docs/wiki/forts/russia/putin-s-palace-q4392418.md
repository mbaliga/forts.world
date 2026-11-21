# Putin's Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `putin-s-palace-q4392418` |
| Coordinates | 44.41921, 38.2052 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.41921/38.2052)) |
| Wikidata | [Q4392418](https://www.wikidata.org/wiki/Q4392418) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|residenz\|estate |
| Administrative area | Gelendzhik District |
| Inception | 2005 |
| Wikipedia language editions | 31 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 122 elements (outline 1, road 73, building 6, coastline 1, water 2, zone 28, cliff 9, retaining-wall 2).

Evidence: documented 0, mapped 122, inferred 0, derived 1; heights documented 2, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12217206 historic=castle Q4392418 10 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":30,"medianInside":1.9,"medianOutside":62.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.41921/38.2052) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|residenz\|estate; sitelinks=31; wikidata:Q4392418 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 122 elements); data/traces/putin-s-palace-q4392418.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
