# Maiden Tower

> Azerbaijan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maiden-tower-q842822` |
| Coordinates | 40.36615, 49.83727 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.36615/49.83727)) |
| Wikidata | [Q842822](https://www.wikidata.org/wiki/Q842822) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|monument |
| Administrative area | Sabail raion |
| Inception | 1200 |
| UNESCO WHC id | 958-002 |
| Wikipedia language editions | 48 |
| OSM `historic` | castle |
| OSM `website` | https://www.chitalnya.ru/503287/ |

## What the model contains

Tier **T1**, status `outline-only`, 263 elements (outline 1, marker 5, road 129, water 2, building 110, zone 15, coastline 1).

Evidence: documented 0, mapped 263, inferred 0, derived 1; heights documented 16, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/299418016 historic=castle Q842822 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":-25.6,"medianOutside":-17}
- 1466 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.36615/49.83727) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|monument; sitelinks=48; wikidata:Q842822 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 263 elements); data/traces/maiden-tower-q842822.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/azerbaijan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
