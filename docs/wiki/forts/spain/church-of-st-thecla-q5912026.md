# Church of St. Thecla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `church-of-st-thecla-q5912026` |
| Coordinates | 41.43297, -1.73581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.43297/-1.73581)) |
| Wikidata | [Q5912026](https://www.wikidata.org/wiki/Q5912026) (CC0) |
| Wikidata class | fort |
| Types | Monument (Spain)\|fortified church\|Catholic parish church |
| Administrative area | Cervera de la Cañada |
| Designations | bien de interés cultural\|World Heritage Site |
| UNESCO WHC id | 378-006 |
| Wikipedia language editions | 3 |
| OSM `heritage` | https://whc.unesco.org/en/list/378 |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 32, waterway 1, building 21, wall 5).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1274837424 historic=(none; chosen by its Wikidata id) Q5912026 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.43297/-1.73581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; Monument (Spain)\|fortified church\|Catholic parish church; sitelinks=3; wikidata:Q5912026 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 60 elements); data/traces/church-of-st-thecla-q5912026.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 60 elements; outline osm:way/1274837424 historic=(none; chosen by its Wikidata id) Q5912026 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
