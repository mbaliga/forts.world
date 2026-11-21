# Fortified settlement (Azov)

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortified-settlement-azov-q28842283` |
| Coordinates | 47.11291, 39.42445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.11291/39.42445)) |
| Wikidata | [Q28842283](https://www.wikidata.org/wiki/Q28842283) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|hillfort |
| Administrative area | Azov |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 6, road 48, building 131, wall 2, waterway 1, zone 9, retaining-wall 2).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 38, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1249290051 historic=castle 385 m from ledger point
- origin moved 386 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.11291/39.42445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|hillfort; sitelinks=4; wikidata:Q28842283 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/fortified-settlement-azov-q28842283.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
