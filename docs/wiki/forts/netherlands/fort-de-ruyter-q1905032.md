# Fort de Ruyter

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-ruyter-q1905032` |
| Coordinates | 51.44166, 3.60975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.44166/3.60975)) |
| Wikidata | [Q1905032](https://www.wikidata.org/wiki/Q1905032) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fort |
| Administrative area | Vlissingen |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 114 elements (outline 1, marker 1, road 27, water 6, building 16, wall 24, coastline 1, zone 19, waterway 19).

Evidence: documented 0, mapped 114, inferred 0, derived 1; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1486844307 historic=castle 17 m from ledger point
- origin moved 26 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":240,"medianInside":-4,"medianOutside":-0.2}
- 647 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.44166/3.60975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fort; sitelinks=1; wikidata:Q1905032 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 114 elements); data/traces/fort-de-ruyter-q1905032.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
