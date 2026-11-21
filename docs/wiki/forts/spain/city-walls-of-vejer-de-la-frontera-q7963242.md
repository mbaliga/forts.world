# City walls of Vejer de la Frontera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-vejer-de-la-frontera-q7963242` |
| Coordinates | 36.25352, -5.96271 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.25352/-5.96271)) |
| Wikidata | [Q7963242](https://www.wikidata.org/wiki/Q7963242) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Vejer de la Frontera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, marker 10, road 150, waterway 2, building 495, wall 71, zone 3, cliff 1, retaining-wall 20).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 134, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14594695 historic=castle Q97619488 120 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 495 mapped (trace size budget); the rest of the town is not drawn
- origin moved 121 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.25352/-5.96271) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q7963242 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/city-walls-of-vejer-de-la-frontera-q7963242.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
