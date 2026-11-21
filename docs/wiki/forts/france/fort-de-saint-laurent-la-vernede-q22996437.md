# Fort de Saint-Laurent-la-Vernède

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-saint-laurent-la-vernede-q22996437` |
| Coordinates | 44.1051, 4.459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.1051/4.459)) |
| Wikidata | [Q22996437](https://www.wikidata.org/wiki/Q22996437) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Laurent-la-Vernède |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 332 elements (marker 1, road 45, building 281, wall 4, zone 1).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 0, inferred 0, unknown 285.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7376831 historic=fort Q22996437 6 m from ledger point
- site is a site relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (56 x 60 m)
- origin moved 5 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.1051/4.459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22996437 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 332 elements); data/traces/fort-de-saint-laurent-la-vernede-q22996437.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
