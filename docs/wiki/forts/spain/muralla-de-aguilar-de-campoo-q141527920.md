# muralla de Aguilar de Campoo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-aguilar-de-campoo-q141527920` |
| Coordinates | 42.79286, -4.26617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.79286/-4.26617)) |
| Wikidata | [Q141527920](https://www.wikidata.org/wiki/Q141527920) (CC0) |
| Wikidata class | fortification |
| Types | city walls\|monument |
| Administrative area | Aguilar de Campoo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, road 72, zone 5, building 65, wall 7, waterway 1).

Evidence: documented 0, mapped 151, inferred 0, derived 0; heights documented 0, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384714940 historic=castle 431 m from ledger point
- origin moved 430 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.79286/-4.26617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls\|monument; sitelinks=1; wikidata:Q141527920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 151 elements); data/traces/muralla-de-aguilar-de-campoo-q141527920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
