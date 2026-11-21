# Vesting Zaltbommel

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vesting-zaltbommel-q17449383` |
| Coordinates | 51.81238, 5.25022 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.81238/5.25022)) |
| Wikidata | [Q17449383](https://www.wikidata.org/wiki/Q17449383) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|bastion |
| Administrative area | Zaltbommel |
| Designations | Rijksmonument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 26, road 414, building 1579, zone 140, water 11, retaining-wall 2, wall 18, waterway 9).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 2, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/959119996 historic=castle Q17449383 56 m from ledger point
- pruned to the outline plus 150 m: 2200 -> 2062 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 1494 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 393 mapped (trace size budget); minor lanes are not drawn
- origin moved 55 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.81238/5.25022) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|bastion; sitelinks=0; wikidata:Q17449383 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/vesting-zaltbommel-q17449383.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
