# Búnker 1 de Camposoto

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-1-de-camposoto-q3276656` |
| Coordinates | 36.39472, -6.21778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.39472/-6.21778)) |
| Wikidata | [Q3276656](https://www.wikidata.org/wiki/Q3276656) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Cádiz Province |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, coastline 2, water 1).

Evidence: documented 0, mapped 4, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238422146 historic=ruins 23 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":228,"medianInside":0,"medianOutside":5.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.39472/-6.21778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=3; wikidata:Q3276656 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 4 elements); data/traces/bunker-1-de-camposoto-q3276656.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
