# Schloss Offenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-offenberg-q1232273` |
| Coordinates | 48.86295, 12.86189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.86295/12.86189)) |
| Wikidata | [Q1232273](https://www.wikidata.org/wiki/Q1232273) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château\|archaeological site |
| Administrative area | Offenberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `website` | https://www.schloss-offenberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, marker 1, zone 5, road 22, building 56, waterway 4, water 1, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 1, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5392893 historic=castle Q1232273 12 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.86295/12.86189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château\|archaeological site; sitelinks=2; wikidata:Q1232273 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/schloss-offenberg-q1232273.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
