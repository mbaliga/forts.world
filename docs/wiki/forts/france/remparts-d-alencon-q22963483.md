# Remparts d'Alençon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-d-alencon-q22963483` |
| Coordinates | 48.42833, 0.08819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.42833/0.08819)) |
| Wikidata | [Q22963483](https://www.wikidata.org/wiki/Q22963483) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Alençon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 1, road 121, building 570, waterway 12, wall 68, zone 12).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 0, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124791698 historic=castle Q2971484 403 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 570 mapped (trace size budget); the rest of the town is not drawn
- origin moved 404 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.42833/0.08819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q22963483 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/remparts-d-alencon-q22963483.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
