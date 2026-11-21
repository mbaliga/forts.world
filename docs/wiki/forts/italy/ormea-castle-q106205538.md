# Ormea Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ormea-castle-q106205538` |
| Coordinates | 44.15048, 7.91067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.15048/7.91067)) |
| Wikidata | [Q106205538](https://www.wikidata.org/wiki/Q106205538) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ormea |
| Inception | 1000 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 229 elements (outline 1, marker 3, road 92, water 3, building 469, waterway 3, zone 7).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/710512240 historic=castle Q106205538 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 469 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.15048/7.91067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q106205538 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 229 elements); data/traces/ormea-castle-q106205538.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
