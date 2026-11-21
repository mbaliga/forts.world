# Palais Khevenhüller-Metsch

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-khevenhuller-metsch-q2047035` |
| Coordinates | 48.21781, 16.36344 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21781/16.36344)) |
| Wikidata | [Q2047035](https://www.wikidata.org/wiki/Q2047035) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Vienna |
| Inception | 1858 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 293 elements (outline 1, marker 22, road 285, waterway 1, building 93, zone 26).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 85, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2001387 historic=castle Q2047035 4 m from ledger point
- roads capped: kept the 150 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21781/16.36344) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q2047035 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 293 elements); data/traces/palais-khevenhuller-metsch-q2047035.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
