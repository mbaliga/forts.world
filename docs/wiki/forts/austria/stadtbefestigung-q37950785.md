# Stadtbefestigung

> Austria · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q37950785` |
| Coordinates | 47.91422, 16.69384 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.91422/16.69384)) |
| Wikidata | [Q37950785](https://www.wikidata.org/wiki/Q37950785) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Purbach am Neusiedlersee |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 245 elements (marker 3, road 63, wall 48, building 309, zone 6, waterway 5).

Evidence: documented 0, mapped 245, inferred 0, derived 0; heights documented 27, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.91422/16.69384) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q37950785 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 245 elements); data/traces/stadtbefestigung-q37950785.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
