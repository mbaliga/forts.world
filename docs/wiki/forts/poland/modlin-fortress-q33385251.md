# Modlin Fortress

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `modlin-fortress-q33385251` |
| Coordinates | 52.43735, 20.6808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.43735/20.6808)) |
| Wikidata | [Q33385251](https://www.wikidata.org/wiki/Q33385251) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Nowy Dwór Mazowiecki |
| Inception | 1900 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.twierdzamodlin.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 8, water 1, road 521, zone 249, building 81, waterway 1, wall 18, retaining-wall 5).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 23, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44445826 historic=castle Q47796 479 m from ledger point
- pruned to the outline plus 60 m: 885 -> 884 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 81 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 521 mapped (trace size budget); minor lanes are not drawn
- origin moved 488 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.43735/20.6808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=0; wikidata:Q33385251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/modlin-fortress-q33385251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
