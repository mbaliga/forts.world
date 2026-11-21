# Fort Bourguignon

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-bourguignon-q12631086` |
| Coordinates | 44.8469, 13.8336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8469/13.8336)) |
| Wikidata | [Q12631086](https://www.wikidata.org/wiki/Q12631086) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pula |
| Inception | 1861 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, road 43, building 18, coastline 1, zone 1, retaining-wall 2, wall 1, water 2).

Evidence: documented 0, mapped 69, inferred 0, derived 2; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13902300 historic=fort Q12631086 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":0,"medianOutside":21.2}
- sea-1: DEM check ok {"cells":18,"medianInside":0,"medianOutside":21.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8469/13.8336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q12631086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 69 elements); data/traces/fort-bourguignon-q12631086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
