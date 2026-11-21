# Mahee Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mahee-castle-q15243733` |
| Coordinates | 54.50095, -5.64847 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.50095/-5.64847)) |
| Wikidata | [Q15243733](https://www.wikidata.org/wiki/Q15243733) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Inception | 1570 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 30 elements (outline 1, marker 1, coastline 2, road 8, building 4, zone 7, wall 6, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/670214848 historic=castle Q15243733 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":284,"medianInside":5.3,"medianOutside":5.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.50095/-5.64847) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q15243733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 30 elements); data/traces/mahee-castle-q15243733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
