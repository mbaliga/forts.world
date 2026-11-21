# Kahl-Burg

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kahl-burg-q56284998` |
| Coordinates | 50.05931, 1.36941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05931/1.36941)) |
| Wikidata | [Q56284998](https://www.wikidata.org/wiki/Q56284998) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Le Tréport |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 241 elements (marker 2, road 115, cliff 1, building 869, coastline 2, wall 1).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 869 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05931/1.36941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=3; wikidata:Q56284998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 241 elements); data/traces/kahl-burg-q56284998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
