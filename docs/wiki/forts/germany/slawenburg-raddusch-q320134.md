# Slawenburg Raddusch

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `slawenburg-raddusch-q320134` |
| Coordinates | 51.8049, 14.0304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8049/14.0304)) |
| Wikidata | [Q320134](https://www.wikidata.org/wiki/Q320134) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Vetschau/Spreewald |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `website` | https://www.slawenburg-raddusch.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, road 15, water 3, zone 11).

Evidence: documented 0, mapped 30, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3271757 historic=archaeological_site Q320134 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8049/14.0304) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=5; wikidata:Q320134 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/slawenburg-raddusch-q320134.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
