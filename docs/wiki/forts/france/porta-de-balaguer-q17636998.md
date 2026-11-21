# Porta de Balaguer

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-de-balaguer-q17636998` |
| Coordinates | 42.5983, 2.971 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.5983/2.971)) |
| Wikidata | [Q17636998](https://www.wikidata.org/wiki/Q17636998) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Elne |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 1, road 234, building 1103, water 7, zone 3, wall 118, waterway 10, retaining-wall 2).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1773021 historic=yes Q2979778 143 m from ledger point
- pruned to the outline plus 150 m: 1479 -> 1037 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 780 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 171 mapped (trace size budget); minor lanes are not drawn
- origin moved 144 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.5983/2.971) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q17636998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/porta-de-balaguer-q17636998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
