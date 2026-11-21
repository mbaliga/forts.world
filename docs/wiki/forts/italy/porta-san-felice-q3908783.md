# Porta San Felice

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-felice-q3908783` |
| Coordinates | 44.49923, 11.3272 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.49923/11.3272)) |
| Wikidata | [Q3908783](https://www.wikidata.org/wiki/Q3908783) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|historic building |
| Administrative area | Bologna |
| Inception | 1250 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | building |
| OSM `website` | https://www.palazzopallavicini.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, road 66, building 348, waterway 4, zone 17, wall 18, water 2).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148803275 historic=building Q60839204 644 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 348 mapped (trace size budget); the rest of the town is not drawn
- origin moved 646 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.49923/11.3272) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|historic building; sitelinks=6; wikidata:Q3908783 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/porta-san-felice-q3908783.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
