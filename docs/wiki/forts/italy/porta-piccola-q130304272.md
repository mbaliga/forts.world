# Porta Piccola

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-piccola-q130304272` |
| Coordinates | 40.74234, 17.42709 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.74234/17.42709)) |
| Wikidata | [Q130304272](https://www.wikidata.org/wiki/Q130304272) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Cisternino |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 5, road 192, zone 1, building 159, wall 31, retaining-wall 25).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 1, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/420121748 historic=castle Q130304288 149 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 159 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 150 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.74234/17.42709) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q130304272 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/porta-piccola-q130304272.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
