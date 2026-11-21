# Chavonnes Battery

> South Africa · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chavonnes-battery-q5088529` |
| Coordinates | -33.90722, 18.42139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.90722/18.42139)) |
| Wikidata | [Q5088529](https://www.wikidata.org/wiki/Q5088529) (CC0) |
| Wikidata class | fort |
| Types | fortification\|museum |
| Administrative area | City of Cape Town |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 98 elements (outline 1, marker 3, road 55, building 24, coastline 5, zone 3, water 7).

Evidence: documented 0, mapped 98, inferred 0, derived 7; heights documented 4, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158441581 historic=monument Q55634395 109 m from ledger point
- origin moved 109 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":399,"medianInside":3.7,"medianOutside":3}
- sea-1: DEM check failed {"cells":25,"medianInside":5.2,"medianOutside":3.4}
- sea-2: DEM check failed {"cells":266,"medianInside":3.9,"medianOutside":3.3}
- sea-3: DEM check ok {"cells":392,"medianInside":3.7,"medianOutside":3.8}
- sea-4: DEM check failed {"cells":398,"medianInside":3.7,"medianOutside":3}
- sea-5: DEM check ok {"cells":348,"medianInside":3.2,"medianOutside":6}
- sea-6: DEM check failed {"cells":392,"medianInside":3.8,"medianOutside":2}
- 70 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.90722/18.42139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|museum; sitelinks=3; wikidata:Q5088529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 98 elements); data/traces/chavonnes-battery-q5088529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-africa.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
