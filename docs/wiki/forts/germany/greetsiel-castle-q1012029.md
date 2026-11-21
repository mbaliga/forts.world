# Greetsiel Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `greetsiel-castle-q1012029` |
| Coordinates | 53.4986, 7.09806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4986/7.09806)) |
| Wikidata | [Q1012029](https://www.wikidata.org/wiki/Q1012029) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Greetsiel |
| Inception | 1362 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 1, road 119, waterway 5, building 239, water 2, wall 7, zone 1).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 36, inferred 0, unknown 210.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/228405567 historic=building 432 m from ledger point
- origin moved 431 m from the ledger point to the centre of the mapped site
- 221 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4986/7.09806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q1012029 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/greetsiel-castle-q1012029.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
