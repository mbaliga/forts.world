# Cummi Howe, broch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cummi-howe-broch-q56668184` |
| Coordinates | 58.97459, -3.2496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.97459/-3.2496)) |
| Wikidata | [Q56668184](https://www.wikidata.org/wiki/Q56668184) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Orkney Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |

## What the model contains

Tier **T1**, status `outline+walls`, 7 elements (outline 1, road 1, waterway 1, coastline 1, wall 1, water 2).

Evidence: documented 0, mapped 7, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385594689 historic=archaeological_site Q56668184 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":55,"medianInside":1.1,"medianOutside":2.2}
- sea-1: DEM check failed {"cells":233,"medianInside":4,"medianOutside":1.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.97459/-3.2496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56668184 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 7 elements); data/traces/cummi-howe-broch-q56668184.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
