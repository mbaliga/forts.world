# Palais Bellegarde

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-bellegarde-q2046898` |
| Coordinates | 48.21391, 16.3818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21391/16.3818)) |
| Wikidata | [Q2046898](https://www.wikidata.org/wiki/Q2046898) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Vienna |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 281 elements (outline 1, marker 8, road 291, waterway 2, building 97, zone 11, retaining-wall 12).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 80, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1506527 historic=castle Q2046898 2 m from ledger point
- roads capped: kept the 150 longest of 291 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21391/16.3818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=2; wikidata:Q2046898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 281 elements); data/traces/palais-bellegarde-q2046898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
