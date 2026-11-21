# City walls of Altea

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-altea-q52866338` |
| Coordinates | 38.59967, -0.05122 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.59967/-0.05122)) |
| Wikidata | [Q52866338](https://www.wikidata.org/wiki/Q52866338) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Altea |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 287 elements (marker 11, road 245, coastline 1, building 388, wall 1, retaining-wall 3, zone 1).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 4, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 388 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.59967/-0.05122) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q52866338 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 287 elements); data/traces/city-walls-of-altea-q52866338.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
