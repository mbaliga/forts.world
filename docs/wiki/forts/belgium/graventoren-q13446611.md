# Graventoren

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `graventoren-q13446611` |
| Coordinates | 51.1262, 4.29269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1262/4.29269)) |
| Wikidata | [Q13446611](https://www.wikidata.org/wiki/Q13446611) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kruibeke |
| Designations | beschermd monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | https://inventaris.onroerenderfgoed.be/dibe/relict/17690 |
| OSM `description` | Herenhuis XIX |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 4, water 6, road 104, zone 9, building 586, retaining-wall 3, wall 3, waterway 8).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 1, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/351501129 historic=yes 115 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 586 mapped (trace size budget); the rest of the town is not drawn
- origin moved 114 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1262/4.29269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q13446611 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/graventoren-q13446611.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
