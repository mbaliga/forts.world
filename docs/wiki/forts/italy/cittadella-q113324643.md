# Cittadella

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cittadella-q113324643` |
| Coordinates | 44.65314, 10.92062 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.65314/10.92062)) |
| Wikidata | [Q113324643](https://www.wikidata.org/wiki/Q113324643) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Modena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 2, road 282, building 235, wall 15, zone 12).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 3, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1237799348 historic=archaeological_site Q27998804 287 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 235 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 285 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.65314/10.92062) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113324643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/cittadella-q113324643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
