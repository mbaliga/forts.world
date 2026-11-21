# Freising Fortifications

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `freising-fortifications-q15848800` |
| Coordinates | 48.40275, 11.74649 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40275/11.74649)) |
| Wikidata | [Q15848800](https://www.wikidata.org/wiki/Q15848800) (CC0) |
| Wikidata class | fort |
| Types | fortification\|city walls |
| Administrative area | Freising |
| Inception | 1000 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `description` | Nach Plänen von Theodor Ganzenmüller und den Gebrüdern Rank errichtetes schlossartiges Brauhaus, 1912, reich gegliederte, monumentale Baugruppe in barockisierendem Jugendstil |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 1, waterway 3, road 338, building 195, zone 43, wall 17, retaining-wall 8, water 1).

Evidence: documented 0, mapped 344, inferred 0, derived 0; heights documented 77, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/49042660 historic=building Q1551459 368 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 338 mapped (trace size budget); minor lanes are not drawn
- origin moved 367 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40275/11.74649) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|city walls; sitelinks=2; wikidata:Q15848800 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 344 elements); data/traces/freising-fortifications-q15848800.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
