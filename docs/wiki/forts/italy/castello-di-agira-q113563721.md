# Castello di Agira

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-agira-q113563721` |
| Coordinates | 37.65517, 14.52996 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.65517/14.52996)) |
| Wikidata | [Q113563721](https://www.wikidata.org/wiki/Q113563721) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Agira |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 3, road 79, building 439, wall 187, cliff 4, retaining-wall 36).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 0, inferred 0, unknown 243.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1009014814 historic=castle Q134303411 20 m from ledger point
- pruned to the outline plus 150 m: 749 -> 527 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.65517/14.52996) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113563721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/castello-di-agira-q113563721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
