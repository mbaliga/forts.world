# Fortifications d’Altkirch

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-d-altkirch-q110885671` |
| Coordinates | 47.62311, 7.23659 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.62311/7.23659)) |
| Wikidata | [Q110885671](https://www.wikidata.org/wiki/Q110885671) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Altkirch |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 307 elements (marker 2, road 157, building 569, waterway 1, zone 10, water 1, retaining-wall 21, wall 2).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 0, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 569 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.62311/7.23659) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q110885671 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 307 elements); data/traces/fortifications-d-altkirch-q110885671.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
