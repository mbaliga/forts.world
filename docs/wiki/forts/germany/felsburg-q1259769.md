# Felsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `felsburg-q1259769` |
| Coordinates | 51.1358, 9.42028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1358/9.42028)) |
| Wikidata | [Q1259769](https://www.wikidata.org/wiki/Q1259769) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Felsberg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | open only sunday, from april till october |
| OSM `ruins` | yes |
| OSM `website` | https://burgverein-felsberg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 52, road 73, building 219, wall 12, zone 2, retaining-wall 4).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 1, inferred 0, unknown 234.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180989373 historic=castle Q1259769 27 m from ledger point
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1358/9.42028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1259769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/felsburg-q1259769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
