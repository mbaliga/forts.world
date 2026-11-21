# Torre Santa Caterina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-santa-caterina-q3995271` |
| Coordinates | 40.14083, 17.98861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.14083/17.98861)) |
| Wikidata | [Q3995271](https://www.wikidata.org/wiki/Q3995271) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Nardò |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, road 43, zone 10, wall 16, building 69, coastline 1, water 1).

Evidence: documented 0, mapped 141, inferred 0, derived 1; heights documented 0, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/328649309 historic=building Q3995271 23 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":33,"medianInside":0,"medianOutside":21.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.14083/17.98861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=1; wikidata:Q3995271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/torre-santa-caterina-q3995271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
