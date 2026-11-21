# Fortino di Orrigo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortino-di-orrigo-q32125026` |
| Coordinates | 40.55695, 14.19831 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.55695/14.19831)) |
| Wikidata | [Q32125026](https://www.wikidata.org/wiki/Q32125026) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Anacapri |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, coastline 1, road 8, building 26, water 1).

Evidence: documented 0, mapped 37, inferred 0, derived 1; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/534893475 historic=fort 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":215,"medianInside":0,"medianOutside":47.9}
- 16 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.55695/14.19831) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q32125026 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 37 elements); data/traces/fortino-di-orrigo-q32125026.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
