# Cockenzie and Port Seton

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cockenzie-and-port-seton-q1013257` |
| Coordinates | 55.969, -2.962 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.969/-2.962)) |
| Wikidata | [Q1013257](https://www.wikidata.org/wiki/Q1013257) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | East Lothian |
| Wikipedia language editions | 18 |

## What the model contains

Tier **T1**, status `location-only`, 252 elements (marker 2, road 102, coastline 1, zone 6, building 383, wall 21).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 115, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 383 mapped (trace size budget); the rest of the town is not drawn
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.969/-2.962) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=18; wikidata:Q1013257 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 252 elements); data/traces/cockenzie-and-port-seton-q1013257.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
