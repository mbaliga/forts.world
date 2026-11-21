# Cork City Town Walls

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cork-city-town-walls-q30161028` |
| Coordinates | 51.89733, -8.47553 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.89733/-8.47553)) |
| Wikidata | [Q30161028](https://www.wikidata.org/wiki/Q30161028) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cork |
| Designations | national monument of Ireland |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 12, road 403, water 2, building 427, waterway 8, wall 62, zone 16).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 35, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/304965648 historic=citywalls Q30161028 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 427 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 403 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.89733/-8.47553) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30161028 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/cork-city-town-walls-q30161028.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
