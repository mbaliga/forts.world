# Vrana Palace

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vrana-palace-q2465811` |
| Coordinates | 42.64004, 23.43226 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.64004/23.43226)) |
| Wikidata | [Q2465811](https://www.wikidata.org/wiki/Q2465811) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|urban park\|museum |
| Administrative area | Sofia |
| Inception | 1912 |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://place.bg/%D0%BF%D0%B0%D1%80%D0%BA-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%B2%D1%80%D0%B0%D0%BD%D0%B0/ |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, road 30, building 3, waterway 1, zone 2, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/256189968 historic=castle Q2465811 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.64004/23.43226) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|urban park\|museum; sitelinks=15; wikidata:Q2465811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/vrana-palace-q2465811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
