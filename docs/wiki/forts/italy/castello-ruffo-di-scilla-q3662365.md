# Castello Ruffo di Scilla

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-ruffo-di-scilla-q3662365` |
| Coordinates | 38.25611, 15.71456 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.25611/15.71456)) |
| Wikidata | [Q3662365](https://www.wikidata.org/wiki/Q3662365) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Scilla |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |
| OSM `website` | http://scilla.asmenet.it/index.php?action=index&p=244 |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 3, coastline 1, road 214, building 275, wall 11, cliff 3, retaining-wall 9, water 1).

Evidence: documented 0, mapped 300, inferred 0, derived 1; heights documented 4, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/229385408 historic=castle Q3662365 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 214 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":239,"medianInside":0,"medianOutside":4.2}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.25611/15.71456) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662365 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/castello-ruffo-di-scilla-q3662365.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
