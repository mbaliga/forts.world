# Istana Bandar

> Malaysia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `istana-bandar-q12688276` |
| Coordinates | 2.85993, 101.44085 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/2.85993/101.44085)) |
| Wikidata | [Q12688276](https://www.wikidata.org/wiki/Q12688276) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.visitselangor.com/istana-bandar-jugra/ |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, road 28, wall 2, building 6).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1387806344 historic=castle Q12688276 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/2.85993/101.44085) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace; sitelinks=5; wikidata:Q12688276 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/istana-bandar-q12688276.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malaysia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
