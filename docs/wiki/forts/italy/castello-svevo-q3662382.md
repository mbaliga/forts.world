# Castello Svevo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-svevo-q3662382` |
| Coordinates | 43.43529, 13.66221 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.43529/13.66221)) |
| Wikidata | [Q3662382](https://www.wikidata.org/wiki/Q3662382) (CC0) |
| Wikidata class | castle |
| Types | castle\|Category:Hohenstaufen castles in Southern Italy |
| Administrative area | Porto Recanati |
| Inception | 1229 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 281 elements (outline 1, road 119, building 156, coastline 1, zone 2, waterway 1, water 1).

Evidence: documented 0, mapped 281, inferred 0, derived 1; heights documented 2, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3251685 historic=castle Q3662382 15 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":4,"medianInside":0,"medianOutside":4.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.43529/13.66221) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Category:Hohenstaufen castles in Southern Italy; sitelinks=3; wikidata:Q3662382 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 281 elements); data/traces/castello-svevo-q3662382.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
