# Fort Scratchley

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-scratchley-q5472006` |
| Coordinates | -32.9277, 151.79 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-32.9277/151.79)) |
| Wikidata | [Q5472006](https://www.wikidata.org/wiki/Q5472006) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum |
| Administrative area | New South Wales |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 290 elements (outline 1, marker 8, coastline 2, road 192, zone 34, building 43, retaining-wall 8, water 2).

Evidence: documented 0, mapped 290, inferred 0, derived 2; heights documented 2, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019910800 historic=ruins 276 m from ledger point
- origin moved 276 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":10,"medianInside":2.8,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":22,"medianInside":4,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-32.9277/151.79) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum; sitelinks=2; wikidata:Q5472006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 290 elements); data/traces/fort-scratchley-q5472006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
