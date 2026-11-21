# Castello di Tusa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-tusa-q99521051` |
| Coordinates | 37.98522, 14.23674 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.98522/14.23674)) |
| Wikidata | [Q99521051](https://www.wikidata.org/wiki/Q99521051) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Tusa |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 232, building 510, wall 12, retaining-wall 17, waterway 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 1, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/391736121 historic=archaeological_site 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 510 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.98522/14.23674) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=0; wikidata:Q99521051 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/castello-di-tusa-q99521051.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
