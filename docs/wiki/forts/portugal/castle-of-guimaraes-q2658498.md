# Castle of Guimarães

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-guimaraes-q2658498` |
| Coordinates | 41.44783, -8.2903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.44783/-8.2903)) |
| Wikidata | [Q2658498](https://www.wikidata.org/wiki/Q2658498) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Oliveira, São Paio e São Sebastião |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 146 elements (outline 1, road 91, building 45, zone 5, wall 3).

Evidence: documented 0, mapped 146, inferred 0, derived 0; heights documented 7, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/346365692 historic=castle Q2658498 10 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.44783/-8.2903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=22; wikidata:Q2658498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 146 elements); data/traces/castle-of-guimaraes-q2658498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
