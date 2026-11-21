# Äußeres Einlasstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `au-eres-einlasstor-q15136314` |
| Coordinates | 48.1339, 11.57456 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1339/11.57456)) |
| Wikidata | [Q15136314](https://www.wikidata.org/wiki/Q15136314) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Munich |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 10, road 313, building 239, water 2, wall 4, waterway 1, zone 4, retaining-wall 1).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 68, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2360164 historic=building Q106540515 170 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 239 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 169 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1339/11.57456) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q15136314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/au-eres-einlasstor-q15136314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
