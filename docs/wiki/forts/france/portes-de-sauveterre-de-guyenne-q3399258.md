# Portes de Sauveterre-de-Guyenne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portes-de-sauveterre-de-guyenne-q3399258` |
| Coordinates | 44.6946, -0.08829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.6946/-0.08829)) |
| Wikidata | [Q3399258](https://www.wikidata.org/wiki/Q3399258) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Sauveterre-de-Guyenne |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, road 58, building 351, waterway 1).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/501388836 historic=monument 468 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- origin moved 468 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.6946/-0.08829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3399258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 180 elements); data/traces/portes-de-sauveterre-de-guyenne-q3399258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
