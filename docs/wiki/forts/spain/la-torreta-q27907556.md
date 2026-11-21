# La Torreta

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-torreta-q27907556` |
| Coordinates | 40.11306, -0.05417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.11306/-0.05417)) |
| Wikidata | [Q27907556](https://www.wikidata.org/wiki/Q27907556) (CC0) |
| Wikidata class | fortification |
| Types | monument\|watchtower |
| Administrative area | Vilafamés |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 379 elements (marker 3, road 130, wall 119, building 566, waterway 3, zone 4).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 0, inferred 0, unknown 239.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 566 mapped (trace size budget); the rest of the town is not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.11306/-0.05417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|watchtower; sitelinks=3; wikidata:Q27907556 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 379 elements); data/traces/la-torreta-q27907556.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
