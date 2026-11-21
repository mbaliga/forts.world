# Raspenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `raspenburg-q2131989` |
| Coordinates | 51.17839, 11.42175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.17839/11.42175)) |
| Wikidata | [Q2131989](https://www.wikidata.org/wiki/Q2131989) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Rastenberg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 313 elements (outline 1, marker 2, waterway 1, road 93, building 214, zone 2).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 47, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160045613 historic=archaeological_site Q2131989 48 m from ledger point
- origin moved 54 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.17839/11.42175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q2131989 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 313 elements); data/traces/raspenburg-q2131989.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
