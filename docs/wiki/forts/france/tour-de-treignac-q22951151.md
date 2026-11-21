# tour de Treignac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-treignac-q22951151` |
| Coordinates | 45.53683, 1.79578 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.53683/1.79578)) |
| Wikidata | [Q22951151](https://www.wikidata.org/wiki/Q22951151) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Treignac |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 204 elements (outline 1, marker 2, waterway 1, road 76, building 339, water 1, retaining-wall 3).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149712568 historic=yes Q22951148 152 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 339 mapped (trace size budget); the rest of the town is not drawn
- origin moved 150 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.53683/1.79578) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22951151 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 204 elements); data/traces/tour-de-treignac-q22951151.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
