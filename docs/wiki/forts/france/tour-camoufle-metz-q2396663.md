# Tour Camoufle (Metz)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-camoufle-metz-q2396663` |
| Coordinates | 49.11194, 6.17351 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.11194/6.17351)) |
| Wikidata | [Q2396663](https://www.wikidata.org/wiki/Q2396663) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Metz |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 1, road 275, building 233, wall 34, zone 14).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 29, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34681147 historic=ruins Q2396663 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 233 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 275 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.11194/6.17351) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=2; wikidata:Q2396663 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/tour-camoufle-metz-q2396663.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
