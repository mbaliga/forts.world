# Dumfries Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dumfries-castle-q5313791` |
| Coordinates | 55.0561, -3.6022 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.0561/-3.6022)) |
| Wikidata | [Q5313791](https://www.wikidata.org/wiki/Q5313791) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Dumfries and Galloway |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 132 elements (coastline 1, road 37, building 89, zone 2, waterway 1, water 2).

Evidence: documented 0, mapped 132, inferred 0, derived 2; heights documented 0, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":388,"medianInside":24.5,"medianOutside":27.1}
- sea-1: DEM check ok {"cells":33,"medianInside":8.1,"medianOutside":25.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.0561/-3.6022) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5313791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 132 elements); data/traces/dumfries-castle-q5313791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
