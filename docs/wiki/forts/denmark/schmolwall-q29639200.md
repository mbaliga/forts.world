# Schmölwall

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schmolwall-q29639200` |
| Coordinates | 54.89806, 9.67236 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.89806/9.67236)) |
| Wikidata | [Q29639200](https://www.wikidata.org/wiki/Q29639200) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Sønderborg Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, road 15, zone 7, building 17).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/509862351 historic=archaeological_site Q29639200 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.89806/9.67236) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=2; wikidata:Q29639200 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 40 elements); data/traces/schmolwall-q29639200.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
