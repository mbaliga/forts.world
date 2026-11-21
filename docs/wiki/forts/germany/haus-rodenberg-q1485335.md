# Haus Rodenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haus-rodenberg-q1485335` |
| Coordinates | 51.4928, 7.55417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4928/7.55417)) |
| Wikidata | [Q1485335](https://www.wikidata.org/wiki/Q1485335) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Dortmund |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 23, road 306, building 212, water 1, waterway 7, zone 6, wall 17).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 3, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23043649 historic=castle Q1485335 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 306 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4928/7.55417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q1485335 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/haus-rodenberg-q1485335.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
