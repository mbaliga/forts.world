# Vedetta Punta Galera

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vedetta-punta-galera-q113577613` |
| Coordinates | 41.24326, 9.45909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.24326/9.45909)) |
| Wikidata | [Q113577613](https://www.wikidata.org/wiki/Q113577613) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 5 elements (coastline 1, zone 1, road 1, water 2).

Evidence: documented 0, mapped 5, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0}
- sea-1: DEM check ok {"cells":316,"medianInside":0,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.24326/9.45909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113577613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/vedetta-punta-galera-q113577613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
