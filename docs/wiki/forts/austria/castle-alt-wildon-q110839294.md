# Castle Alt-Wildon

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-alt-wildon-q110839294` |
| Coordinates | 46.88425, 15.51039 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.88425/15.51039)) |
| Wikidata | [Q110839294](https://www.wikidata.org/wiki/Q110839294) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wildon |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 30, waterway 2, building 20, zone 6, cliff 7, wall 6).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/405718376 historic=castle Q110839294 24 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.88425/15.51039) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q110839294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/castle-alt-wildon-q110839294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
