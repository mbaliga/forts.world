# Porta Aragonese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-aragonese-q96759289` |
| Coordinates | 37.87939, 14.95199 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.87939/14.95199)) |
| Wikidata | [Q96759289](https://www.wikidata.org/wiki/Q96759289) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Randazzo |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 2, road 132, building 841, waterway 1, wall 73, retaining-wall 5).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 1, inferred 0, unknown 197.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/128527353 historic=building 307 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 841 mapped (trace size budget); the rest of the town is not drawn
- origin moved 308 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.87939/14.95199) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q96759289 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/porta-aragonese-q96759289.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
