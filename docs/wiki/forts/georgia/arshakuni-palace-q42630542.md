# Arshakuni Palace

> Georgia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arshakuni-palace-q42630542` |
| Coordinates | 41.70142, 44.79277 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.70142/44.79277)) |
| Wikidata | [Q42630542](https://www.wikidata.org/wiki/Q42630542) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural property\|historic building |
| Administrative area | Mtatsminda District |
| Designations | cultural heritage in Georgia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 17, waterway 1, road 197, building 207, water 1, cliff 1, zone 1, retaining-wall 3, wall 2).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 46, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/65254634 historic=castle Q42630542 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 207 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.70142/44.79277) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural property\|historic building; sitelinks=0; wikidata:Q42630542 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/arshakuni-palace-q42630542.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/georgia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
