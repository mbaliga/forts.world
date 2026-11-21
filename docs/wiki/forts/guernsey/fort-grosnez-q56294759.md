# Fort Grosnez

> Guernsey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-grosnez-q56294759` |
| Coordinates | 49.72441, -2.20398 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.72441/-2.20398)) |
| Wikidata | [Q56294759](https://www.wikidata.org/wiki/Q56294759) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 55 elements (outline 1, coastline 1, road 21, water 5, building 24, wall 2, zone 1).

Evidence: documented 0, mapped 55, inferred 0, derived 4; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1062182003 historic=fort 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":729,"medianInside":0,"medianOutside":null}
- sea-1: DEM check failed {"cells":148,"medianInside":0,"medianOutside":0}
- sea-2: DEM check ok {"cells":334,"medianInside":0,"medianOutside":0.4}
- sea-3: DEM check failed {"cells":723,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.72441/-2.20398) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q56294759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 55 elements); data/traces/fort-grosnez-q56294759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/guernsey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
