# Fort de Chaudanne

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-chaudanne-q3078157` |
| Coordinates | 47.227, 6.02345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.227/6.02345)) |
| Wikidata | [Q3078157](https://www.wikidata.org/wiki/Q3078157) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Besançon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `location-only`, 354 elements (marker 5, road 180, waterway 5, building 168, zone 47, wall 16, retaining-wall 6, water 4, cliff 1).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 3, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/308039 historic=citywalls Q37776 754 m from ledger point
- site is a site relation of 23 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1633 x 1759 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 168 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 180 mapped (trace size budget); minor lanes are not drawn
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.227/6.02345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078157 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 354 elements); data/traces/fort-de-chaudanne-q3078157.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
