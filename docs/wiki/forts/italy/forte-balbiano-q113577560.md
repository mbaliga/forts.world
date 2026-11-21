# Forte Balbiano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-balbiano-q113577560` |
| Coordinates | 41.21116, 9.40184 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.21116/9.40184)) |
| Wikidata | [Q113577560](https://www.wikidata.org/wiki/Q113577560) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 156 elements (outline 1, marker 1, coastline 4, road 51, building 93, wall 2, retaining-wall 1, water 3).

Evidence: documented 0, mapped 156, inferred 0, derived 3; heights documented 0, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/277777273 historic=ruins 2 m from ledger point
- island ring (749 m2) cut out of sea-0
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":149,"medianInside":0,"medianOutside":9.5}
- sea-1: DEM check ok {"cells":24,"medianInside":0,"medianOutside":3.9}
- sea-2: DEM check failed {"cells":400,"medianInside":2.8,"medianOutside":0.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.21116/9.40184) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q113577560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 156 elements); data/traces/forte-balbiano-q113577560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
