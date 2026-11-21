# Riffort

> Curaçao · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `riffort-q4563360` |
| Coordinates | 12.10549, -68.93716 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.10549/-68.93716)) |
| Wikidata | [Q4563360](https://www.wikidata.org/wiki/Q4563360) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Willemstad |
| Inception | 1828 |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 359 elements (outline 1, marker 2, road 115, building 231, coastline 4, zone 1, water 5).

Evidence: documented 0, mapped 359, inferred 0, derived 5; heights documented 70, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/312133436 historic=fort 286 m from ledger point
- origin moved 287 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":575,"medianInside":5.7,"medianOutside":7}
- sea-1: DEM check failed {"cells":10,"medianInside":7,"medianOutside":5.5}
- sea-2: DEM check ok {"cells":295,"medianInside":3.1,"medianOutside":8.7}
- sea-3: DEM check failed {"cells":574,"medianInside":5.7,"medianOutside":3.5}
- sea-4: DEM check failed {"cells":556,"medianInside":6,"medianOutside":4.1}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.10549/-68.93716) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q4563360 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 359 elements); data/traces/riffort-q4563360.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/curacao.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
