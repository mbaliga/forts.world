# Noyers-sur-Serein city wall

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `noyers-sur-serein-city-wall-q21309017` |
| Coordinates | 47.6989, 3.99609 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6989/3.99609)) |
| Wikidata | [Q21309017](https://www.wikidata.org/wiki/Q21309017) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Noyers |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, road 75, building 426, wall 12, zone 5, waterway 3, retaining-wall 1).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 4, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/330290543 historic=citywalls 300 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 426 mapped (trace size budget); the rest of the town is not drawn
- origin moved 300 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6989/3.99609) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q21309017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/noyers-sur-serein-city-wall-q21309017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
