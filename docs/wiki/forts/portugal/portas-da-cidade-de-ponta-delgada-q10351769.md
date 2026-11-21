# Portas da Cidade de Ponta Delgada

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portas-da-cidade-de-ponta-delgada-q10351769` |
| Coordinates | 37.7395, -25.66846 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.7395/-25.66846)) |
| Wikidata | [Q10351769](https://www.wikidata.org/wiki/Q10351769) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|triumphal arch\|city gate |
| Administrative area | São Sebastião |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, marker 2, road 73, building 88, zone 1, wall 5, coastline 1, water 1).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 5, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/126109776 historic=castle Q66815829 312 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 310 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.7395/-25.66846) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|triumphal arch\|city gate; sitelinks=3; wikidata:Q10351769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/portas-da-cidade-de-ponta-delgada-q10351769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
