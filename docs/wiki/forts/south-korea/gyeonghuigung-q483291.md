# Gyeonghuigung

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gyeonghuigung-q483291` |
| Coordinates | 37.57064, 126.96862 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.57064/126.96862)) |
| Wikidata | [Q483291](https://www.wikidata.org/wiki/Q483291) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.deoksugung.go.kr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 165 elements (outline 1, wall 12, road 37, building 82, zone 33).

Evidence: documented 0, mapped 165, inferred 0, derived 0; heights documented 8, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/646147127 historic=castle Q16095015 558 m from ledger point
- origin moved 558 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.57064/126.96862) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=22; wikidata:Q483291 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 165 elements); data/traces/gyeonghuigung-q483291.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
