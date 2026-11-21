# Grodziec Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grodziec-castle-q491322` |
| Coordinates | 51.17722, 15.75922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.17722/15.75922)) |
| Wikidata | [Q491322](https://www.wikidata.org/wiki/Q491322) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural heritage monument |
| Administrative area | Grodziec |
| Inception | 1500 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, marker 2, road 35, water 1, building 30, wall 17, zone 10, cliff 1).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 20, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261497103 historic=castle Q491322 28 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.17722/15.75922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural heritage monument; sitelinks=15; wikidata:Q491322 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/grodziec-castle-q491322.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
