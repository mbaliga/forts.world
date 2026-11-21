# Porta de Santa Margarida

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-de-santa-margarida-q11942416` |
| Coordinates | 39.57615, 2.65231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.57615/2.65231)) |
| Wikidata | [Q11942416](https://www.wikidata.org/wiki/Q11942416) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Palma |
| Wikipedia language editions | 3 |
| OSM `historic` | monastery |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 2, road 164, building 384, wall 3, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1585247 historic=monastery Q11915460 347 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 349 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.57615/2.65231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q11942416 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/porta-de-santa-margarida-q11942416.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
