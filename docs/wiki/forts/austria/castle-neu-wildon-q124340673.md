# Castle Neu-Wildon

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-neu-wildon-q124340673` |
| Coordinates | 46.88442, 15.51347 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.88442/15.51347)) |
| Wikidata | [Q124340673](https://www.wikidata.org/wiki/Q124340673) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wildon |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.hengist-archaeologie.at/archaeologie/fundorte/wildon/325-unterhaus-schlossberg-wildon |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, marker 1, waterway 3, road 25, building 6, zone 2, cliff 5, wall 21).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/405718377 historic=castle 20 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.88442/15.51347) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q124340673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/castle-neu-wildon-q124340673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
