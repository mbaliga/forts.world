# Rocca Farnese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-farnese-q113585521` |
| Coordinates | 42.56801, 11.81909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.56801/11.81909)) |
| Wikidata | [Q113585521](https://www.wikidata.org/wiki/Q113585521) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Valentano |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 185 elements (outline 1, road 64, building 388).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/343946201 historic=castle 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 388 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.56801/11.81909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=1; wikidata:Q113585521 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 185 elements); data/traces/rocca-farnese-q113585521.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
