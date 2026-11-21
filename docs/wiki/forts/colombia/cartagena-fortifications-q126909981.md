# Cartagena Fortifications

> Colombia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cartagena-fortifications-q126909981` |
| Coordinates | 10.42298, -75.54918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.42298/-75.54918)) |
| Wikidata | [Q126909981](https://www.wikidata.org/wiki/Q126909981) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Cartagena |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 6, road 129, wall 3, building 205, zone 3, coastline 3, water 1).

Evidence: documented 0, mapped 352, inferred 0, derived 1; heights documented 49, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/542127716 historic=citywalls 41 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":16,"medianInside":4.6,"medianOutside":11.4}
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.42298/-75.54918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q126909981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/cartagena-fortifications-q126909981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/colombia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
