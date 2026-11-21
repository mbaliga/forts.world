# Arco de los Blancos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-de-los-blancos-q97688641` |
| Coordinates | 36.52833, -6.29306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.52833/-6.29306)) |
| Wikidata | [Q97688641](https://www.wikidata.org/wiki/Q97688641) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|theatre building |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 11, road 164, building 374, water 2, zone 4, wall 2, coastline 2, retaining-wall 1).

Evidence: documented 0, mapped 293, inferred 0, derived 1; heights documented 30, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/698881371 historic=building Q97688641 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 374 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 41 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":45,"medianInside":0,"medianOutside":17.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.52833/-6.29306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|theatre building; sitelinks=6; wikidata:Q97688641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/arco-de-los-blancos-q97688641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
