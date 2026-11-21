# Fort Baluwerti

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-baluwerti-q17999304` |
| Coordinates | -7.81373, 110.36291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-7.81373/110.36291)) |
| Wikidata | [Q17999304](https://www.wikidata.org/wiki/Q17999304) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Yogyakarta |
| Inception | 1785 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 164 elements (outline 1, road 40, building 522, zone 1, wall 2).

Evidence: documented 0, mapped 164, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1266063992 historic=fort 602 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 522 mapped (trace size budget); the rest of the town is not drawn
- origin moved 603 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-7.81373/110.36291) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q17999304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 164 elements); data/traces/fort-baluwerti-q17999304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
