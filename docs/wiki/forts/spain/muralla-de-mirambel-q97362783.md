# Muralla de Mirambel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-mirambel-q97362783` |
| Coordinates | 40.58823, -0.34138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.58823/-0.34138)) |
| Wikidata | [Q97362783](https://www.wikidata.org/wiki/Q97362783) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Mirambel |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 3, road 78, building 223, waterway 2, wall 113, zone 4).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 113, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1457201120 historic=castle 62 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 223 mapped (trace size budget); the rest of the town is not drawn
- origin moved 61 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.58823/-0.34138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q97362783 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/muralla-de-mirambel-q97362783.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
