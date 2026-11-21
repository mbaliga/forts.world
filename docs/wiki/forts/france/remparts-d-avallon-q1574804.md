# Remparts d'Avallon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-d-avallon-q1574804` |
| Coordinates | 47.4847, 3.90718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.4847/3.90718)) |
| Wikidata | [Q1574804](https://www.wikidata.org/wiki/Q1574804) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Avallon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 2, road 133, building 252, water 6, waterway 2, wall 35, zone 10, cliff 7, retaining-wall 24).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 1, inferred 0, unknown 178.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1282831683 historic=citywalls 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 252 mapped (trace size budget); the rest of the town is not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.4847/3.90718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=3; wikidata:Q1574804 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/remparts-d-avallon-q1574804.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
