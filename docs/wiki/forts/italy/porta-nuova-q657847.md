# Porta Nuova

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-nuova-q657847` |
| Coordinates | 38.11214, 13.35278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.11214/13.35278)) |
| Wikidata | [Q657847](https://www.wikidata.org/wiki/Q657847) (CC0) |
| Wikidata class | fortification |
| Types | triumphal arch\|city gate |
| Administrative area | Palermo |
| Inception | 1669 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |
| OSM `website` | https://www.federicosecondo.org/palazzo-reale-2/ |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 6, road 181, building 271, wall 6, zone 7, water 6).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 7, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/395010 historic=castle Q1473825 116 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 271 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 115 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.11214/13.35278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; triumphal arch\|city gate; sitelinks=11; wikidata:Q657847 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/porta-nuova-q657847.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
