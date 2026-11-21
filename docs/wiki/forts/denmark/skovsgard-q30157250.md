# Skovsgård

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skovsgard-q30157250` |
| Coordinates | 54.84533, 10.75089 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.84533/10.75089)) |
| Wikidata | [Q30157250](https://www.wikidata.org/wiki/Q30157250) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Langeland Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `website` | https://skovsgaard.dn.dk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, road 30, building 18, water 2, zone 9, wall 4).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 11, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/250806880 historic=castle Q12335823 33 m from ledger point
- origin moved 34 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.84533/10.75089) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=0; wikidata:Q30157250 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/skovsgard-q30157250.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
