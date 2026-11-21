# Porta Marina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-marina-q33141570` |
| Coordinates | 37.06182, 15.29163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.06182/15.29163)) |
| Wikidata | [Q33141570](https://www.wikidata.org/wiki/Q33141570) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Syracuse |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 2, road 125, building 289, wall 38, retaining-wall 10, coastline 2, water 2).

Evidence: documented 0, mapped 300, inferred 0, derived 2; heights documented 49, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/307804241 historic=fort Q72846249 497 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- origin moved 498 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":168,"medianInside":0,"medianOutside":6.1}
- sea-1: DEM check ok {"cells":10,"medianInside":0,"medianOutside":0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.06182/15.29163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q33141570 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/porta-marina-q33141570.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
