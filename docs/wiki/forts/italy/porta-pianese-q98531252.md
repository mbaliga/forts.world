# Porta Pianese

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-pianese-q98531252` |
| Coordinates | 42.89344, 11.53867 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.89344/11.53867)) |
| Wikidata | [Q98531252](https://www.wikidata.org/wiki/Q98531252) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Castel del Piano |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 200 elements (road 77, building 558, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 117, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 558 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.89344/11.53867) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q98531252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 200 elements); data/traces/porta-pianese-q98531252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
