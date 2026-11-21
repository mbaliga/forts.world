# Fortifications of Rhodes

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-rhodes-q3748750` |
| Coordinates | 36.445, 28.227 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.445/28.227)) |
| Wikidata | [Q3748750](https://www.wikidata.org/wiki/Q3748750) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Rhodes Regional Unit |
| Wikipedia language editions | 11 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 3, road 125, wall 22, retaining-wall 6, building 232, zone 11, coastline 2, water 1).

Evidence: documented 0, mapped 292, inferred 0, derived 1; heights documented 10, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284773840 historic=citywalls 79 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 232 mapped (trace size budget); the rest of the town is not drawn
- origin moved 75 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":556,"medianInside":0,"medianOutside":9.6}
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.445/28.227) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=11; wikidata:Q3748750 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/fortifications-of-rhodes-q3748750.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
