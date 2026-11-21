# Fortino di Sant'Antonio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortino-di-sant-antonio-q62072482` |
| Coordinates | 41.12826, 16.87376 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.12826/16.87376)) |
| Wikidata | [Q62072482](https://www.wikidata.org/wiki/Q62072482) (CC0) |
| Wikidata class | castle |
| Types | castle\|bastion |
| Administrative area | Bari |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 133 elements (outline 1, marker 2, road 86, wall 4, zone 2, building 33, water 4, coastline 1).

Evidence: documented 0, mapped 133, inferred 0, derived 3; heights documented 1, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32231632 historic=castle Q62072482 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":386,"medianInside":0.3,"medianOutside":0}
- sea-1: DEM check ok {"cells":108,"medianInside":0,"medianOutside":0.8}
- sea-2: DEM check ok {"cells":99,"medianInside":0,"medianOutside":1.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.12826/16.87376) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|bastion; sitelinks=1; wikidata:Q62072482 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 133 elements); data/traces/fortino-di-sant-antonio-q62072482.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
