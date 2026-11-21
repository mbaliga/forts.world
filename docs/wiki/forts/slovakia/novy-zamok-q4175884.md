# Nový zámok

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `novy-zamok-q4175884` |
| Coordinates | 48.45577, 18.89616 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.45577/18.89616)) |
| Wikidata | [Q4175884](https://www.wikidata.org/wiki/Q4175884) (CC0) |
| Wikidata class | castle |
| Types | castle\|factory |
| Administrative area | Banská Štiavnica |
| Inception | 1600 |
| Designations | cultural heritage of Slovakia\|Cultural Heritage Monuments of Slovakia |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.muzeumbs.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 10, road 95, building 109, wall 15, zone 5, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 4, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52128919 historic=castle Q4175884 0 m from ledger point
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.45577/18.89616) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|factory; sitelinks=14; wikidata:Q4175884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/novy-zamok-q4175884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
