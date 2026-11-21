# Porta Grossetana

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-grossetana-q3908722` |
| Coordinates | 42.86749, 11.16593 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.86749/11.16593)) |
| Wikidata | [Q3908722](https://www.wikidata.org/wiki/Q3908722) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Grosseto |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 168 elements (road 41, zone 2, waterway 5, building 409).

Evidence: documented 0, mapped 168, inferred 0, derived 0; heights documented 120, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 409 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.86749/11.16593) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q3908722 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 168 elements); data/traces/porta-grossetana-q3908722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
