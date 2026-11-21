# Valdemar's Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `valdemar-s-castle-q1785445` |
| Coordinates | 55.02233, 10.65306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.02233/10.65306)) |
| Wikidata | [Q1785445](https://www.wikidata.org/wiki/Q1785445) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house\|maritime museum |
| Administrative area | Svendborg Municipality |
| Inception | 1643 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://valdemarsslot.dk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 78 elements (outline 1, road 31, building 15, zone 12, water 5, wall 10, waterway 3, coastline 1).

Evidence: documented 0, mapped 78, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154547849 historic=castle Q1785445 8 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":1.5,"medianOutside":3}
- 226 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.02233/10.65306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house\|maritime museum; sitelinks=13; wikidata:Q1785445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 78 elements); data/traces/valdemar-s-castle-q1785445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
