# Castle of Tiedra

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-tiedra-q5757625` |
| Coordinates | 41.65012, -5.26932 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.65012/-5.26932)) |
| Wikidata | [Q5757625](https://www.wikidata.org/wiki/Q5757625) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tiedra |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |
| OSM `website` | https://www.castillosnet.org/monumento.php?r=VA-CAS-010&seo=castillo-de-los-tellez-de-meneses |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, building 13, road 32, wall 1).

Evidence: documented 0, mapped 48, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12417622 historic=castle Q5757625 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.65012/-5.26932) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5757625 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/castle-of-tiedra-q5757625.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
