# Bastione Molino a Vento

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastione-molino-a-vento-q3636111` |
| Coordinates | 42.75981, 11.11059 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.75981/11.11059)) |
| Wikidata | [Q3636111](https://www.wikidata.org/wiki/Q3636111) (CC0) |
| Wikidata class | fort |
| Types | fortification\|bastion |
| Administrative area | Grosseto |
| Inception | 1571 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 3, road 151, building 189, retaining-wall 9, zone 22, wall 32).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 6, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13124877 historic=castle Q3636107 567 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 189 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 561 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.75981/11.11059) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|bastion; sitelinks=3; wikidata:Q3636111 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/bastione-molino-a-vento-q3636111.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
