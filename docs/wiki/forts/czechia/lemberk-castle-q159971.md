# Lemberk Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lemberk-castle-q159971` |
| Coordinates | 50.77744, 14.78788 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.77744/14.78788)) |
| Wikidata | [Q159971](https://www.wikidata.org/wiki/Q159971) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Lvová |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `website` | https://www.zamek-lemberk.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, road 30, water 1, waterway 3, building 19, wall 3, zone 1).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 5, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1714528 historic=castle Q159971 5 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.77744/14.78788) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=10; wikidata:Q159971 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 58 elements); data/traces/lemberk-castle-q159971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
