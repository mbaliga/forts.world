# Bu Broch

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bu-broch-q923267` |
| Coordinates | 58.96516, -3.27148 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.96516/-3.27148)) |
| Wikidata | [Q923267](https://www.wikidata.org/wiki/Q923267) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Orkney Islands |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (marker 1, road 2, zone 3, coastline 1, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":72,"medianInside":2.8,"medianOutside":12.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.96516/-3.27148) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=1; wikidata:Q923267 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/bu-broch-q923267.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
