# Opera di Punta Rossa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opera-di-punta-rossa-q30288308` |
| Coordinates | 41.16867, 9.46967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.16867/9.46967)) |
| Wikidata | [Q30288308](https://www.wikidata.org/wiki/Q30288308) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 12 elements (outline 1, coastline 2, road 4, building 4, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/970912063 historic=yes 37 m from ledger point
- origin moved 37 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":327,"medianInside":0,"medianOutside":0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.16867/9.46967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q30288308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 12 elements); data/traces/opera-di-punta-rossa-q30288308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
