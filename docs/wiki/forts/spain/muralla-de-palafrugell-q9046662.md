# Muralla de Palafrugell

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-palafrugell-q9046662` |
| Coordinates | 41.9168, 3.16462 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.9168/3.16462)) |
| Wikidata | [Q9046662](https://www.wikidata.org/wiki/Q9046662) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Palafrugell |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 2, road 86, building 539, zone 7, wall 223, water 1, retaining-wall 1).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 0, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/235321811 historic=monument 222 m from ledger point
- pruned to the outline plus 150 m: 860 -> 416 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 255 mapped (trace size budget); the rest of the town is not drawn
- origin moved 222 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.9168/3.16462) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q9046662 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/muralla-de-palafrugell-q9046662.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
