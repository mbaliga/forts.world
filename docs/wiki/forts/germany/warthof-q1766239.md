# Warthof

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warthof-q1766239` |
| Coordinates | 49.019, 9.41324 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.019/9.41324)) |
| Wikidata | [Q1766239](https://www.wikidata.org/wiki/Q1766239) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Aspach |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ring_ditch |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, road 11, building 7, zone 9, waterway 3, wall 4, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 2, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1097004740 historic=archaeological_site 24 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.019/9.41324) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1766239 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/warthof-q1766239.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
