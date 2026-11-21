# Flamborough Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flamborough-castle-q26364996` |
| Coordinates | 54.11443, -0.12573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.11443/-0.12573)) |
| Wikidata | [Q26364996](https://www.wikidata.org/wiki/Q26364996) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Flamborough |
| Designations | Grade II listed building |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, marker 1, road 49, zone 11, waterway 3, building 343, wall 1).

Evidence: documented 0, mapped 186, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1059644040 historic=castle Q26364996 26 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 343 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.11443/-0.12573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q26364996 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/flamborough-castle-q26364996.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
