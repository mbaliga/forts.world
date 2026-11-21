# King Abdul Aziz Fort

> Saudi Arabia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-abdul-aziz-fort-q20400572` |
| Coordinates | 27.34842, 35.69487 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.34842/35.69487)) |
| Wikidata | [Q20400572](https://www.wikidata.org/wiki/Q20400572) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Duba governorate |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, coastline 1, road 25, building 3, zone 1, water 2).

Evidence: documented 0, mapped 33, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11572434 historic=castle 7 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":63,"medianInside":2.4,"medianOutside":11.3}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":8.8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.34842/35.69487) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q20400572 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/king-abdul-aziz-fort-q20400572.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/saudi-arabia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
