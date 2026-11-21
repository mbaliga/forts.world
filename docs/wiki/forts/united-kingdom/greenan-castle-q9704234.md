# Greenan Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `greenan-castle-q9704234` |
| Coordinates | 55.4386, -4.67022 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.4386/-4.67022)) |
| Wikidata | [Q9704234](https://www.wikidata.org/wiki/Q9704234) (CC0) |
| Wikidata class | castle |
| Types | castle\|promontory fort |
| Administrative area | South Ayrshire |
| Designations | category B listed building\|scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, road 9, coastline 1, zone 2, cliff 2, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/418903489 historic=castle Q9704234 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":203,"medianInside":18,"medianOutside":12.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.4386/-4.67022) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|promontory fort; sitelinks=4; wikidata:Q9704234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/greenan-castle-q9704234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
