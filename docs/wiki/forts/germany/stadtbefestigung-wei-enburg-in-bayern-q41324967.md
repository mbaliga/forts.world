# Stadtbefestigung Weißenburg in Bayern

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-wei-enburg-in-bayern-q41324967` |
| Coordinates | 49.03047, 10.96884 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03047/10.96884)) |
| Wikidata | [Q41324967](https://www.wikidata.org/wiki/Q41324967) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage ensemble\|city walls |
| Administrative area | Weißenburg in Bayern |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 1, road 148, building 250, zone 5, wall 12, waterway 4).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 11, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/252967168 historic=citywalls Q638477 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 250 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03047/10.96884) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage ensemble\|city walls; sitelinks=0; wikidata:Q41324967 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/stadtbefestigung-wei-enburg-in-bayern-q41324967.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
