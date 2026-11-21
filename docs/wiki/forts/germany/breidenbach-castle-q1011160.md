# Breidenbach Castle

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `breidenbach-castle-q1011160` |
| Coordinates | 50.8847, 8.45528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8847/8.45528)) |
| Wikidata | [Q1011160](https://www.wikidata.org/wiki/Q1011160) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Breidenbach |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 275 elements (road 166, building 235, waterway 3, zone 2).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 235 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 166 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8847/8.45528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1011160 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 275 elements); data/traces/breidenbach-castle-q1011160.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
