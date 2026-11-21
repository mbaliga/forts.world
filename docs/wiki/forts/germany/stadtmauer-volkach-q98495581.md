# Stadtmauer Volkach

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-volkach-q98495581` |
| Coordinates | 49.86457, 10.22561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.86457/10.22561)) |
| Wikidata | [Q98495581](https://www.wikidata.org/wiki/Q98495581) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Volkach |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `website` | https://www.stadt-volkach.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 1, road 146, wall 9, waterway 4, building 435, zone 4).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 57, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43367173 historic=yes Q14545074 128 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 435 mapped (trace size budget); the rest of the town is not drawn
- origin moved 128 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.86457/10.22561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98495581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/stadtmauer-volkach-q98495581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
