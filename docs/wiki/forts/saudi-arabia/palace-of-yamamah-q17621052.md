# Palace of Yamamah

> Saudi Arabia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-yamamah-q17621052` |
| Coordinates | 24.66535, 46.64059 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.66535/46.64059)) |
| Wikidata | [Q17621052](https://www.wikidata.org/wiki/Q17621052) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Riyadh |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, road 58, building 11, wall 21).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/329990284 historic=castle Q17621052 52 m from ledger point
- origin moved 53 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.66535/46.64059) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=15; wikidata:Q17621052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/palace-of-yamamah-q17621052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/saudi-arabia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
