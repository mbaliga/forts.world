# Schloss Göppingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-goppingen-q1519114` |
| Coordinates | 48.70508, 9.65159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.70508/9.65159)) |
| Wikidata | [Q1519114](https://www.wikidata.org/wiki/Q1519114) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Göppingen |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 279 elements (outline 1, marker 16, road 141, building 331, waterway 1).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 6, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/386394 historic=castle Q1519114 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.70508/9.65159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q1519114 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 279 elements); data/traces/schloss-goppingen-q1519114.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
