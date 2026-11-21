# Castillo de Alhama

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-alhama-q24023598` |
| Coordinates | 37.85384, -1.42407 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.85384/-1.42407)) |
| Wikidata | [Q24023598](https://www.wikidata.org/wiki/Q24023598) (CC0) |
| Wikidata class | castle |
| Types | castle\|tourist destination\|rammed earth\|monument |
| Administrative area | Alhama de Murcia |
| Inception | 0011 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, marker 6, road 76, building 24, water 4, zone 3, wall 23, cliff 3).

Evidence: documented 0, mapped 141, inferred 0, derived 0; heights documented 2, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1096988181 historic=yes 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.85384/-1.42407) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tourist destination\|rammed earth\|monument; sitelinks=4; wikidata:Q24023598 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/castillo-de-alhama-q24023598.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
