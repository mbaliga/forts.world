# Belgern city wall

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belgern-city-wall-q49468582` |
| Coordinates | 51.48137, 13.12631 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48137/13.12631)) |
| Wikidata | [Q49468582](https://www.wikidata.org/wiki/Q49468582) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Belgern-Schildau |
| Inception | 1500 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Erbaut 1578 |

## What the model contains

Tier **T1**, status `outline+walls`, 182 elements (outline 1, marker 6, waterway 1, road 49, zone 1, building 376, wall 3, water 1).

Evidence: documented 0, mapped 182, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32619601 historic=yes Q49468539 155 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 376 mapped (trace size budget); the rest of the town is not drawn
- origin moved 155 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48137/13.12631) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q49468582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 182 elements); data/traces/belgern-city-wall-q49468582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
