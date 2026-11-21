# Fortaleza de São João

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sao-joao-q5472516` |
| Coordinates | -22.94337, -43.15646 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-22.94337/-43.15646)) |
| Wikidata | [Q5472516](https://www.wikidata.org/wiki/Q5472516) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Rio de Janeiro |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, marker 4, road 1, building 1, coastline 1, zone 1, water 2).

Evidence: documented 0, mapped 11, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42291492 historic=castle 597 m from ledger point
- origin moved 597 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":939,"medianInside":-29,"medianOutside":0.5}
- sea-1: DEM check failed {"cells":2,"medianInside":-29,"medianOutside":-29}
- 3919 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-22.94337/-43.15646) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q5472516 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/fortaleza-de-sao-joao-q5472516.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
