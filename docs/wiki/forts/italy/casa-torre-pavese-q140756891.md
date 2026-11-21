# Casa Torre Pavese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-torre-pavese-q140756891` |
| Coordinates | 44.30847, 8.48332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.30847/8.48332)) |
| Wikidata | [Q140756891](https://www.wikidata.org/wiki/Q140756891) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Savona |
| Inception | 1500 |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 17, road 180, building 75, zone 16, wall 6, coastline 1, retaining-wall 2, water 1).

Evidence: documented 0, mapped 299, inferred 0, derived 1; heights documented 38, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5481601 historic=castle Q777001 442 m from ledger point
- origin moved 461 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":152,"medianInside":0,"medianOutside":9.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.30847/8.48332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=0; wikidata:Q140756891 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/casa-torre-pavese-q140756891.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
