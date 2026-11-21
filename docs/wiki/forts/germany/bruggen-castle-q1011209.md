# Brüggen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bruggen-castle-q1011209` |
| Coordinates | 51.2403, 6.18593 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2403/6.18593)) |
| Wikidata | [Q1011209](https://www.wikidata.org/wiki/Q1011209) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Brüggen |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |
| OSM `description` | 3-geschossige Hauptburg mit Walmdach und seitlichem Rundturm, Reste der Vorburg C15. Torhaus auf quadratischem Grundriß Mit Torbogen und Ringmauer; Aufstockung der Hauptburg und Überarbeitung der Gesamtanlage C17 |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, road 100, waterway 10, building 339, zone 23, water 13, wall 1).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 5, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173239660 historic=castle Q1011209 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 339 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2403/6.18593) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=5; wikidata:Q1011209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/bruggen-castle-q1011209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
