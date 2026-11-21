# Castello Estense

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-estense-q1048836` |
| Coordinates | 44.83763, 11.61943 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.83763/11.61943)) |
| Wikidata | [Q1048836](https://www.wikidata.org/wiki/Q1048836) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum\|history museum\|historical park museum\|military museum building\|museum of a public entity |
| Administrative area | Ferrara |
| Inception | 1350 |
| Designations | Italian national heritage |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `ruins` | no |
| OSM `website` | https://www.castelloestense.it |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 14, road 198, building 118, zone 22, wall 20, water 1).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 48, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1549744 historic=castle Q1048836 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.83763/11.61943) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum\|history museum\|historical park museum\|military museum building\|museum of a public entity; sitelinks=22; wikidata:Q1048836 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/castello-estense-q1048836.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
