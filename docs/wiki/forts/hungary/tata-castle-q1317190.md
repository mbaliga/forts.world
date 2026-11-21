# Tata Castle

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tata-castle-q1317190` |
| Coordinates | 47.6489, 18.3194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6489/18.3194)) |
| Wikidata | [Q1317190](https://www.wikidata.org/wiki/Q1317190) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tata |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 12, road 178, building 115, waterway 12, wall 30, water 10, zone 3, retaining-wall 2).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 63, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104914815 historic=castle Q1317190 42 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6489/18.3194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1317190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/tata-castle-q1317190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
