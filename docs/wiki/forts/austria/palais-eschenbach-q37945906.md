# Palais Eschenbach

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-eschenbach-q37945906` |
| Coordinates | 48.20186, 16.36329 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20186/16.36329)) |
| Wikidata | [Q37945906](https://www.wikidata.org/wiki/Q37945906) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Innere Stadt |
| Inception | 1870 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://palais-eschenbach.at/ |

## What the model contains

Tier **T1**, status `outline-only`, 278 elements (outline 1, marker 17, road 358, building 63, zone 39, waterway 1, retaining-wall 7).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 57, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/224969601 historic=castle Q37945906 3 m from ledger point
- roads capped: kept the 150 longest of 358 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20186/16.36329) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=1; wikidata:Q37945906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 278 elements); data/traces/palais-eschenbach-q37945906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
