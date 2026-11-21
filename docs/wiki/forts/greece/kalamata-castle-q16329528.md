# Kalamata Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalamata-castle-q16329528` |
| Coordinates | 37.04583, 22.11667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.04583/22.11667)) |
| Wikidata | [Q16329528](https://www.wikidata.org/wiki/Q16329528) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kalamata Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |
| OSM `website` | https://www.efames.gr/kastro_klmt_gr.html |

## What the model contains

Tier **T1**, status `outline+walls`, 117 elements (outline 1, road 97, building 14, zone 1, waterway 1, cliff 2).

Evidence: documented 0, mapped 117, inferred 0, derived 0; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/347957227 historic=castle Q16329528 24 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.04583/22.11667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q16329528 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 117 elements); data/traces/kalamata-castle-q16329528.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
