# Castello di Arco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-arco-q224779` |
| Coordinates | 45.92217, 10.88827 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.92217/10.88827)) |
| Wikidata | [Q224779](https://www.wikidata.org/wiki/Q224779) (CC0) |
| Wikidata class | ruin |
| Types | historical park museum\|military museum building\|castle ruin\|palazzo museum\|museum of a public entity |
| Administrative area | Arco |
| Inception | 1000 |
| Designations | Italian national heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `website` | https://www.comune.arco.tn.it/Territorio/Luoghi-e-punti-di-interesse/Cosa-puoi-visitare/Beni-artistici-e-monumentali/Il-Castello |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 9, road 320, zone 203, wall 138, retaining-wall 150, cliff 8, building 352, waterway 13, water 4).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 0, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18367358 historic=castle Q224779 29 m from ledger point
- pruned to the outline plus 60 m: 1198 -> 200 elements
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.92217/10.88827) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; historical park museum\|military museum building\|castle ruin\|palazzo museum\|museum of a public entity; sitelinks=8; wikidata:Q224779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/castello-di-arco-q224779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
