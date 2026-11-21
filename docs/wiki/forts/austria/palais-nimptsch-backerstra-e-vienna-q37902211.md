# Palais Nimptsch, Bäckerstraße, Vienna

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-nimptsch-backerstra-e-vienna-q37902211` |
| Coordinates | 48.20897, 16.37595 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20897/16.37595)) |
| Wikidata | [Q37902211](https://www.wikidata.org/wiki/Q37902211) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Innere Stadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 35, road 428, waterway 1, building 121, wall 7, retaining-wall 7, zone 7).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 112, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1550006 historic=castle Q37902211 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 121 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 428 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20897/16.37595) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=1; wikidata:Q37902211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/palais-nimptsch-backerstra-e-vienna-q37902211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
