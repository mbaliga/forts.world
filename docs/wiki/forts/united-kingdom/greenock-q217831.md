# Greenock

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `greenock-q217831` |
| Coordinates | 55.95, -4.76667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.95/-4.76667)) |
| Wikidata | [Q217831](https://www.wikidata.org/wiki/Q217831) (CC0) |
| Wikidata class | fortification |
| Types | town\|large burgh |
| Administrative area | Inverclyde |
| Wikipedia language editions | 59 |

## What the model contains

Tier **T1**, status `location-only`, 161 elements (road 58, zone 5, building 94, coastline 1, wall 3).

Evidence: documented 0, mapped 161, inferred 0, derived 0; heights documented 1, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.95/-4.76667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|large burgh; sitelinks=59; wikidata:Q217831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 161 elements); data/traces/greenock-q217831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
