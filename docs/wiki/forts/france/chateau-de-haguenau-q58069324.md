# Château de Haguenau

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-haguenau-q58069324` |
| Coordinates | 48.8158, 7.78842 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8158/7.78842)) |
| Wikidata | [Q58069324](https://www.wikidata.org/wiki/Q58069324) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Haguenau |
| Inception | 1200 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 2, road 272, building 620, waterway 4, water 2, retaining-wall 2, wall 6, zone 5).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48653188 historic=building Q15952153 215 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 620 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 272 mapped (trace size budget); minor lanes are not drawn
- origin moved 215 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8158/7.78842) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q58069324 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/chateau-de-haguenau-q58069324.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
