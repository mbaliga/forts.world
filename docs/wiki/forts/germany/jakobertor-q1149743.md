# Jakobertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jakobertor-q1149743` |
| Coordinates | 48.3704, 10.9088 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3704/10.9088)) |
| Wikidata | [Q1149743](https://www.wikidata.org/wiki/Q1149743) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Augsburg |
| Inception | 1400 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, road 199, water 3, building 267, waterway 3, zone 19, wall 20, retaining-wall 3).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 57, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72511158 historic=castle 197 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 267 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 202 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3704/10.9088) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q1149743 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/jakobertor-q1149743.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
