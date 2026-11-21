# Castillo Santa Isabel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-santa-isabel-q20493052` |
| Coordinates | 43.33036, -1.92326 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.33036/-1.92326)) |
| Wikidata | [Q20493052](https://www.wikidata.org/wiki/Q20493052) (CC0) |
| Wikidata class | castle |
| Types | castle\|house\|monument |
| Administrative area | Pasaia |
| Inception | 1621 |
| Designations | part of UNESCO World Heritage Site\|Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, coastline 4, road 13, building 8, retaining-wall 5, wall 1, waterway 2, cliff 1, zone 2, water 3).

Evidence: documented 0, mapped 40, inferred 0, derived 3; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210623549 historic=castle Q20493052 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":235,"medianInside":0,"medianOutside":38.8}
- sea-1: DEM check ok {"cells":359,"medianInside":3.5,"medianOutside":18.5}
- sea-2: DEM check ok {"cells":388,"medianInside":6.6,"medianOutside":34.2}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.33036/-1.92326) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|house\|monument; sitelinks=4; wikidata:Q20493052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/castillo-santa-isabel-q20493052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
