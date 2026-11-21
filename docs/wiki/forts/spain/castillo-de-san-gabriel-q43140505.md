# Castillo de San Gabriel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-gabriel-q43140505` |
| Coordinates | 28.95642, -13.54758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.95642/-13.54758)) |
| Wikidata | [Q43140505](https://www.wikidata.org/wiki/Q43140505) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|fort |
| Administrative area | Arrecife |
| Inception | 1587 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, marker 2, coastline 16, road 27, retaining-wall 9, building 3, wall 1, water 2).

Evidence: documented 0, mapped 61, inferred 0, derived 2; heights documented 3, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18277867 historic=castle Q43140505 1 m from ledger point
- island ring (10383 m2) cut out of sea-0
- island ring (1928 m2) cut out of sea-0
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":368,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":391,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.95642/-13.54758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|fort; sitelinks=2; wikidata:Q43140505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/castillo-de-san-gabriel-q43140505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
