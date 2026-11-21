# Porta Medina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-medina-q124962294` |
| Coordinates | 42.4402, 11.2137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.4402/11.2137)) |
| Wikidata | [Q124962294](https://www.wikidata.org/wiki/Q124962294) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Orbetello |
| Wikipedia language editions | 1 |
| OSM `historic` | palace |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 1, road 110, building 629, wall 4).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 119, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/717007102 historic=palace Q116864859 352 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 629 mapped (trace size budget); the rest of the town is not drawn
- origin moved 353 m from the ledger point to the centre of the mapped site
- 257 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.4402/11.2137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q124962294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/porta-medina-q124962294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
