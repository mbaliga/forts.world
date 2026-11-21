# Ganghwa Samrangseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ganghwa-samrangseong-q16092181` |
| Coordinates | 37.63167, 126.48861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.63167/126.48861)) |
| Wikidata | [Q16092181](https://www.wikidata.org/wiki/Q16092181) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, road 8).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/334955118 historic=citywalls 402 m from ledger point
- origin moved 411 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.63167/126.48861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=1; wikidata:Q16092181 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/ganghwa-samrangseong-q16092181.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
