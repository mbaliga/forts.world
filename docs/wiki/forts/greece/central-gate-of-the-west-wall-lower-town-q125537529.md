# Central gate of the West wall, lower town

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `central-gate-of-the-west-wall-lower-town-q125537529` |
| Coordinates | 36.68654, 23.05452 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.68654/23.05452)) |
| Wikidata | [Q125537529](https://www.wikidata.org/wiki/Q125537529) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Monemvasia Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 4, coastline 1, road 78, building 147, cliff 5, zone 8, wall 13, retaining-wall 7, water 1).

Evidence: documented 0, mapped 265, inferred 0, derived 1; heights documented 0, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124844560 historic=ruins 108 m from ledger point
- origin moved 107 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":38,"medianInside":0,"medianOutside":78.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.68654/23.05452) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q125537529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/central-gate-of-the-west-wall-lower-town-q125537529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
