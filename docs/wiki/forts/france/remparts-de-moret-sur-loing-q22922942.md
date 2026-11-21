# Remparts de Moret-sur-Loing

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-moret-sur-loing-q22922942` |
| Coordinates | 48.37402, 2.81887 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.37402/2.81887)) |
| Wikidata | [Q22922942](https://www.wikidata.org/wiki/Q22922942) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Moret-Loing-et-Orvanne |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 3, road 133, building 377, wall 36, waterway 7, zone 6, retaining-wall 2).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 1, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/19874271 historic=citywalls 86 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 377 mapped (trace size budget); the rest of the town is not drawn
- origin moved 85 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.37402/2.81887) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q22922942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/remparts-de-moret-sur-loing-q22922942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
