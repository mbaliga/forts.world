# Kew Palace

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kew-palace-q1050082` |
| Coordinates | 51.48383, -0.29505 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48383/-0.29505)) |
| Wikidata | [Q1050082](https://www.wikidata.org/wiki/Q1050082) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|independent museum\|historic house museum |
| Administrative area | Greater London |
| Inception | 1631 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.hrp.org.uk/kew-palace/ |

## What the model contains

Tier **T1**, status `outline+walls`, 181 elements (outline 1, marker 3, road 129, building 33, waterway 3, water 2, zone 1, wall 9).

Evidence: documented 0, mapped 181, inferred 0, derived 0; heights documented 7, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/19830757 historic=castle Q1050082 2 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48383/-0.29505) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|independent museum\|historic house museum; sitelinks=22; wikidata:Q1050082 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 181 elements); data/traces/kew-palace-q1050082.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
