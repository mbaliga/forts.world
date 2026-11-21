# Buchetium

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buchetium-q4982699` |
| Coordinates | 39.15631, 20.84691 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.15631/20.84691)) |
| Wikidata | [Q4982699](https://www.wikidata.org/wiki/Q4982699) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|polis\|ancient city |
| Administrative area | Ziros Municipality |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, zone 1, waterway 1, road 5, building 2, wall 2).

Evidence: documented 0, mapped 13, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/559363666 historic=castle Q4982699 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.15631/20.84691) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|polis\|ancient city; sitelinks=5; wikidata:Q4982699 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 13 elements); data/traces/buchetium-q4982699.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
