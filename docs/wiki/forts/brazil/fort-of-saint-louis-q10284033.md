# Fort of Saint Louis

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-saint-louis-q10284033` |
| Coordinates | -22.93458, -43.12134 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-22.93458/-43.12134)) |
| Wikidata | [Q10284033](https://www.wikidata.org/wiki/Q10284033) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Niterói |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, marker 4, road 4, coastline 2, zone 3, building 6, water 2).

Evidence: documented 0, mapped 22, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184247648 historic=castle 136 m from ledger point
- origin moved 133 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":4.9,"medianOutside":131.6}
- sea-1: DEM check failed {"cells":31,"medianInside":24,"medianOutside":134.3}
- 57 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-22.93458/-43.12134) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q10284033 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/fort-of-saint-louis-q10284033.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
