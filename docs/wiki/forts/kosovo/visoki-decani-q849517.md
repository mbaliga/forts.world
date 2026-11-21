# Visoki Dečani

> Kosovo · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `visoki-decani-q849517` |
| Coordinates | 42.54642, 20.26916 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.54642/20.26916)) |
| Wikidata | [Q849517](https://www.wikidata.org/wiki/Q849517) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortified_church\|archaeological site\|eastern orthodox monastery\|historic site |
| Administrative area | Deçan Municipality |
| Inception | 1335 |
| Designations | cultural heritage monument of Kosovo\|Immovable Cultural Heritage of Exceptional Importance\|World Heritage Site |
| UNESCO WHC id | 724-001 |
| Wikipedia language editions | 39 |
| OSM `historic` | castle |
| OSM `castle_type` | fortified_church |
| OSM `fortification_type` | defensive |
| OSM `heritage` | 1 |
| OSM `website` | https://www.decani.org/en/ |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, road 36, building 28, wall 7, zone 19, waterway 1).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/760904648 historic=castle Q849517 76 m from ledger point
- origin moved 72 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.54642/20.26916) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortified_church\|archaeological site\|eastern orthodox monastery\|historic site; sitelinks=39; wikidata:Q849517 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/visoki-decani-q849517.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/kosovo.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
