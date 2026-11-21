# Fort Saratoga

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saratoga-q54933359` |
| Coordinates | 38.92944, -76.97833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.92944/-76.97833)) |
| Wikidata | [Q54933359](https://www.wikidata.org/wiki/Q54933359) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Washington, D.C. |
| Inception | 1861 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 270 elements (road 203, building 225).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 103, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 225 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 203 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.92944/-76.97833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q54933359 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 270 elements); data/traces/fort-saratoga-q54933359.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
