# Dun Scurrival,dun,Eoligarry

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-scurrival-dun-eoligarry-q56664376` |
| Coordinates | 57.04512, -7.45148 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.04512/-7.45148)) |
| Wikidata | [Q56664376](https://www.wikidata.org/wiki/Q56664376) (CC0) |
| Wikidata class | fortification |
| Types | broch\|dun |
| Administrative area | Outer Hebrides |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, road 1, coastline 4, water 3).

Evidence: documented 0, mapped 9, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/445377421 historic=archaeological_site Q56664376 13 m from ledger point
- island ring (2624 m2) cut out of sea-2
- origin moved 14 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":31,"medianInside":5.8,"medianOutside":15.2}
- sea-1: DEM check ok {"cells":2,"medianInside":7,"medianOutside":13.3}
- sea-2: DEM check ok {"cells":66,"medianInside":5.2,"medianOutside":17.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.04512/-7.45148) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|dun; sitelinks=1; wikidata:Q56664376 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/dun-scurrival-dun-eoligarry-q56664376.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
