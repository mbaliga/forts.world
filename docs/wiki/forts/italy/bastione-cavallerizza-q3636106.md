# Bastione Cavallerizza

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastione-cavallerizza-q3636106` |
| Coordinates | 42.75829, 11.11431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.75829/11.11431)) |
| Wikidata | [Q3636106](https://www.wikidata.org/wiki/Q3636106) (CC0) |
| Wikidata class | fort |
| Types | fortification\|bastion |
| Administrative area | Grosseto |
| Inception | 1574 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 3, road 161, building 231, retaining-wall 9, zone 22, wall 32).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 6, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13124877 historic=castle Q3636107 437 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 231 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 431 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.75829/11.11431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|bastion; sitelinks=3; wikidata:Q3636106 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/bastione-cavallerizza-q3636106.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
