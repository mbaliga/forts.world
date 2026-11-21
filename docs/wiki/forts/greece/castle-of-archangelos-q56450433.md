# Castle of Archangelos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-archangelos-q56450433` |
| Coordinates | 36.2115, 28.11886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.2115/28.11886)) |
| Wikidata | [Q56450433](https://www.wikidata.org/wiki/Q56450433) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rodos Municipality |
| Inception | 1450 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, marker 1, road 41, waterway 1, building 1).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/168975567 historic=castle 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.2115/28.11886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q56450433 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/castle-of-archangelos-q56450433.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
