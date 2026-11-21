# Rieterschloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rieterschloss-q98608243` |
| Coordinates | 49.35534, 11.0985 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.35534/11.0985)) |
| Wikidata | [Q98608243](https://www.wikidata.org/wiki/Q98608243) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-kornburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 2, road 69, building 471, zone 3, wall 8, retaining-wall 1).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 20, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35206273 historic=castle 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 471 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.35534/11.0985) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=3; wikidata:Q98608243 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/rieterschloss-q98608243.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
