# Castle Haven

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-haven-q1049420` |
| Coordinates | 54.80944, -4.19 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.80944/-4.19)) |
| Wikidata | [Q1049420](https://www.wikidata.org/wiki/Q1049420) (CC0) |
| Wikidata class | fortification |
| Types | dun |
| Administrative area | Dumfries and Galloway |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | dun |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 1, road 2, water 3).

Evidence: documented 0, mapped 7, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19252737 historic=archaeological_site 11 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":123,"medianInside":3,"medianOutside":10.6}
- sea-1: DEM check ok {"cells":15,"medianInside":2.3,"medianOutside":8.4}
- sea-2: DEM check ok {"cells":399,"medianInside":7.3,"medianOutside":18.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.80944/-4.19) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; dun; sitelinks=2; wikidata:Q1049420 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/castle-haven-q1049420.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
