# Västerport

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vasterport-q110814600` |
| Coordinates | 56.66333, 16.36 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.66333/16.36)) |
| Wikidata | [Q110814600](https://www.wikidata.org/wiki/Q110814600) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|building |
| Administrative area | Kalmar Municipality |
| Inception | 1658 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | https://www.kalmarslott.se/ |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, coastline 6, road 58, zone 3, wall 12, building 6, water 3).

Evidence: documented 0, mapped 89, inferred 0, derived 3; heights documented 4, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1331955 historic=castle Q648226 655 m from ledger point
- island ring (1876 m2) cut out of sea-0
- island ring (27362 m2) cut out of sea-0
- island ring (1656 m2) cut out of sea-0
- origin moved 654 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":342,"medianInside":3.1,"medianOutside":5.4}
- sea-1: DEM check failed {"cells":418,"medianInside":3.9,"medianOutside":1.2}
- sea-2: DEM check ok {"cells":286,"medianInside":2.4,"medianOutside":8.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 41 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.66333/16.36) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|building; sitelinks=2; wikidata:Q110814600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/vasterport-q110814600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
