# Fort-les-Bains

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-les-bains-q3077748` |
| Coordinates | 42.4708, 2.66446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.4708/2.66446)) |
| Wikidata | [Q3077748](https://www.wikidata.org/wiki/Q3077748) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Amélie-les-Bains-Palalda |
| Inception | 1670 |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 33, waterway 1, building 22, water 1, wall 2).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 1, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1014403 historic=castle Q3077748 11 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.4708/2.66446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3077748 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/fort-les-bains-q3077748.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
