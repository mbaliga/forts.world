# Castle of Castro Laboreiro

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-castro-laboreiro-q5050787` |
| Coordinates | 42.02293, -8.15825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.02293/-8.15825)) |
| Wikidata | [Q5050787](https://www.wikidata.org/wiki/Q5050787) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Castro Laboreiro e Lamas de Mouro |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, road 8, wall 1, cliff 7, waterway 1, zone 1).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187415242 historic=castle Q5050787 20 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.02293/-8.15825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=7; wikidata:Q5050787 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/castle-of-castro-laboreiro-q5050787.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
