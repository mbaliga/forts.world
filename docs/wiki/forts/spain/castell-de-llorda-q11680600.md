# Castell de Llordà

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-llorda-q11680600` |
| Coordinates | 42.11639, 1.09072 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.11639/1.09072)) |
| Wikidata | [Q11680600](https://www.wikidata.org/wiki/Q11680600) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Isona i Conca Dellà |
| Inception | 1100 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, zone 3, wall 5, building 5, road 9, waterway 2).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 2, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209434631 historic=castle Q11680600 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.11639/1.09072) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q11680600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/castell-de-llorda-q11680600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
