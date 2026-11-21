# Spynie Palace

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spynie-palace-q1127580` |
| Coordinates | 57.6761, -3.29139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.6761/-3.29139)) |
| Wikidata | [Q1127580](https://www.wikidata.org/wiki/Q1127580) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Moray |
| Inception | 1150 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `website` | http://www.historic-scotland.gov.uk/propertyresults/propertyoverview.htm?PropID=PL_247 |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, road 9, waterway 2, building 1, wall 2, zone 3).

Evidence: documented 0, mapped 18, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5369390 historic=castle Q1127580 37 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.6761/-3.29139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1127580 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/spynie-palace-q1127580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
