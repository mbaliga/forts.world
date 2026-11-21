# Spitaltorturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spitaltorturm-q41324969` |
| Coordinates | 49.02985, 10.97088 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.02985/10.97088)) |
| Wikidata | [Q41324969](https://www.wikidata.org/wiki/Q41324969) (CC0) |
| Wikidata class | fortification |
| Types | gate tower\|steeple |
| Administrative area | Weißenburg in Bayern |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 143, building 259, zone 3, wall 13, waterway 5).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 12, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/252967151 historic=citywalls Q98634830 170 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- origin moved 170 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.02985/10.97088) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower\|steeple; sitelinks=1; wikidata:Q41324969 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/spitaltorturm-q41324969.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
