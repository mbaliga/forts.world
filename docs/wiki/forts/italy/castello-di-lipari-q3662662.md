# Castello di Lipari

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-lipari-q3662662` |
| Coordinates | 38.46789, 14.95686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.46789/14.95686)) |
| Wikidata | [Q3662662](https://www.wikidata.org/wiki/Q3662662) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lipari |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 1, road 216, zone 4, building 251, wall 13, retaining-wall 2, coastline 1, water 2).

Evidence: documented 0, mapped 295, inferred 0, derived 2; heights documented 2, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158085632 historic=castle Q3662662 78 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 216 mapped (trace size budget); minor lanes are not drawn
- origin moved 77 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":287,"medianInside":0,"medianOutside":15.6}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":6.5}
- 23 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.46789/14.95686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q3662662 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/castello-di-lipari-q3662662.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
