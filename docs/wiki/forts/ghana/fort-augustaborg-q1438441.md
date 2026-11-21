# Fort Augustaborg

> Ghana · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-augustaborg-q1438441` |
| Coordinates | 5.58333, -0.1 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.58333/-0.1)) |
| Wikidata | [Q1438441](https://www.wikidata.org/wiki/Q1438441) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Greater Accra Region |
| Inception | 1787 |
| Designations | Ghana’s material cultural heritage |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `location-only`, 150 elements (coastline 1, road 24, waterway 5, building 420).

Evidence: documented 0, mapped 150, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 420 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.58333/-0.1) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q1438441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 150 elements); data/traces/fort-augustaborg-q1438441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
