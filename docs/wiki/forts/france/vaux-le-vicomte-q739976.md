# Vaux-le-Vicomte

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vaux-le-vicomte-q739976` |
| Coordinates | 48.56587, 2.71414 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.56587/2.71414)) |
| Wikidata | [Q739976](https://www.wikidata.org/wiki/Q739976) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Maincy |
| Inception | 1656 |
| Designations | Tentative World Heritage Site\|classified historical monument |
| Wikipedia language editions | 41 |
| OSM `historic` | castle |
| OSM `website` | https://www.vaux-le-vicomte.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 131 elements (outline 1, water 6, zone 66, building 13, road 40, wall 4, waterway 1).

Evidence: documented 0, mapped 131, inferred 0, derived 0; heights documented 8, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197235251 historic=castle Q739976 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.56587/2.71414) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=41; wikidata:Q739976 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 131 elements); data/traces/vaux-le-vicomte-q739976.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
