# Cinta muraria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cinta-muraria-q113292437` |
| Coordinates | 44.35939, 11.62888 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.35939/11.62888)) |
| Wikidata | [Q113292437](https://www.wikidata.org/wiki/Q113292437) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Dozza |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, marker 4, road 55, waterway 1, building 30, zone 4, wall 5).

Evidence: documented 0, mapped 100, inferred 0, derived 0; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2071422 historic=castle Q25100412 120 m from ledger point
- origin moved 120 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.35939/11.62888) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113292437 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 100 elements); data/traces/cinta-muraria-q113292437.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
