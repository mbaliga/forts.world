# Vesting Hulst

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vesting-hulst-q17406359` |
| Coordinates | 51.28064, 4.05422 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.28064/4.05422)) |
| Wikidata | [Q17406359](https://www.wikidata.org/wiki/Q17406359) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|sconce\|fortification |
| Administrative area | Hulst |
| Inception | 1618 |
| Designations | Rijksmonument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 383 elements (outline 1, marker 9, road 433, water 14, zone 68, retaining-wall 11, building 1551, wall 6, waterway 4).

Evidence: documented 0, mapped 383, inferred 0, derived 0; heights documented 0, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/989234168 historic=castle Q17406359 115 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1551 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 433 mapped (trace size budget); minor lanes are not drawn
- origin moved 115 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.28064/4.05422) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortification; sitelinks=0; wikidata:Q17406359 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 383 elements); data/traces/vesting-hulst-q17406359.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
