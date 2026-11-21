# Fautras Gate

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fautras-gate-q113432745` |
| Coordinates | 48.39119, -4.49019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39119/-4.49019)) |
| Wikidata | [Q113432745](https://www.wikidata.org/wiki/Q113432745) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Brest |
| Inception | 1847 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 282 elements (marker 1, road 480, building 337, zone 7, wall 4).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 36, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 480 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39119/-4.49019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q113432745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 282 elements); data/traces/fautras-gate-q113432745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
