# Brocavum

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brocavum-q16824574` |
| Coordinates | 54.654, -2.7191 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.654/-2.7191)) |
| Wikidata | [Q16824574](https://www.wikidata.org/wiki/Q16824574) (CC0) |
| Wikidata class | fortification |
| Types | ancient Roman structure\|castrum |
| Administrative area | Brougham |
| Designations | part of a Scheduled Monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/brougham-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, marker 1, road 23, building 15, zone 2, waterway 7, wall 1).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204998520 historic=castle Q2968700 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.654/-2.7191) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ancient Roman structure\|castrum; sitelinks=4; wikidata:Q16824574 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/brocavum-q16824574.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
