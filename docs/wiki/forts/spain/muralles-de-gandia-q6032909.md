# Muralles de Gandia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralles-de-gandia-q6032909` |
| Coordinates | 38.96941, -0.18316 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.96941/-0.18316)) |
| Wikidata | [Q6032909](https://www.wikidata.org/wiki/Q6032909) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Gandia |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | https://www.palauducal.com/?i=es&subsec=hom |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, marker 2, waterway 1, road 104, building 376, wall 13).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 1, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5940326 historic=castle Q549063 481 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 376 mapped (trace size budget); the rest of the town is not drawn
- origin moved 486 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.96941/-0.18316) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q6032909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/muralles-de-gandia-q6032909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
